import { createContext } from "react";
import App from '../App'

const AppContext = createContext();

const AppProvider = () => {
    return (
        <AppContext.Provider value={{ myName: "Ganesh" }}>
            <App />
        </AppContext.Provider>
    )
};

export { AppProvider, AppContext }