import { createContext, useEffect, useState } from "react";

type Theme = 'dark' | '';

interface AppContextProps{
    theme?: string;
    changeTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props:any){
    const [theme, setTheme] = useState<string>('dark');

    function changeTheme(){
        // fazendo a alternancia, se for um, alterna pro outro
        const newTheme = theme==='' ? 'dark' : '';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme!==null) setTheme(savedTheme);
    }, []);

    return (
        <AppContext.Provider value={{
            theme: theme, 
            changeTheme
        }} >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;
export const AppConsumer = AppContext.Consumer;