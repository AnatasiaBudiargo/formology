import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    // buat ngehighlight klo misal ada problem di appsnya
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
