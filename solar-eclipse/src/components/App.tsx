import React from "react";
import "./App.css";

import Sun from "./planet/Sun";

function App() {
    const noonPostion = {
        top: "100px",
        left: "50%",
    };

    const planetShape = {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
    };

    return (
        <div>
            <Sun pos={noonPostion} shape={planetShape} />
        </div>
    );
}

export default App;

