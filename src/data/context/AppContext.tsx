import { createContext, useState } from "react";

type Theme = 'dark' | '';

interface AppContextProps{
    theme?: Theme;
    changeTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props:any){
    const [theme, setTheme] = useState<Theme>('dark');

    function changeTheme(){
        // fazendo a alternancia, se for um, alterna pro outro
        setTheme(theme==='' ? 'dark' : '');
    }

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