import { createContext, useEffect } from "react";
import App from "../Components/App";
import axios from "axios";
import { useReducer } from "react";
import prodcutReducer from "../Reducer/prodcutReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    prodcuts: [],
    featureProdcuts: [],
    isSingleLoading: false,
    isSingleProduct: []
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

    const getSigleProducts = (url) =>{
        dispach({type: "SET_SINGLE_LOADING"});
        axios.get(url)
        .then((res) => {
            dispach({type: "GET_SINGLE_API_DATA", payload : res});
        })
        .catch((err) => {
            dispach({type: "API_SINGLE_ERROR"});
        });
    }

    useEffect(() => {
        getProducts(API);
    },[]);

    return (
        <AppContext.Provider value={{ ...state, getSigleProducts }}>
            <App />
        </AppContext.Provider>
    )
};

export { AppProvider, AppContext }