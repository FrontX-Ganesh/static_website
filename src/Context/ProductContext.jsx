import { createContext, useEffect } from "react";
import App from '../App';
import axios from "axios";
// import { useReducer } from "react";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

// const initialState = {
//     isLoading: false,
//     isError: false,
//     prodcuts: [],
//     featureProdcuts: []
// }

const AppProvider = () => {

    // const [state, dispach] = useReducer(reducer, initialState);

    const getProducts = (url) =>{
        axios.get(url)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getProducts(API);
    },[]);

    return (
        <AppContext.Provider value={{ myName: "Ganesh" }}>
            <App />
        </AppContext.Provider>
    )
};

export { AppProvider, AppContext }