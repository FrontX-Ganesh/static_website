import { createContext, useEffect } from "react";
import App from '../App';
import axios from "axios";
import { useReducer } from "react";
import prodcutReducer from "../Reducer/prodcutReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    prodcuts: [],
    featureProdcuts: []
}

const AppProvider = () => {

    const [state, dispach] = useReducer(prodcutReducer, initialState);

    const getProducts = (url) =>{
        dispach({type: "SET_LOADING"});
        axios.get(url)
        .then((res) => {
            dispach({type: "GET_API_DATA", payload : res});
        })
        .catch((err) => {
            dispach({type: "API_ERROR"});
        });
    }

    useEffect(() => {
        getProducts(API);
    },[]);

    return (
        <AppContext.Provider value={{ ...state }}>
            <App />
        </AppContext.Provider>
    )
};

export { AppProvider, AppContext }