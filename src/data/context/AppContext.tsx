import { createContext } from "react";

const AppContext = createContext({
    name: ''
});

export function AppProvider(props:any){
    return (
        <AppContext.Provider value={{
            name: "Teste ContextAPI"
        }} >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;
export const AppConsumer = AppContext.Consumer;