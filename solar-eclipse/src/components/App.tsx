import React from "react";
import "./App.css";

import Sun from "./orb/Sun";
import Moon from "./orb/Moon";

function App() {
    const noonPostion = {
        top: "100px",
        left: "50%",
    };

    const orbShape = {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
    };

    return (
        <div>
            <Sun pos={noonPostion} shape={orbShape} />
            <Moon pos={noonPostion} shape={orbShape} />
        </div>
    );
}

export default App;

