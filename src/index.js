import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/index.css";
import App from "./Components/App.js";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./Context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AppProvider>
        <App />
    </AppProvider>
);

reportWebVitals();
