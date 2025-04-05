import React from "react";
import "../styles/App.css";

import Sun from "./orb/Sun";
import Moon from "./orb/Moon";

function App() {
    const noonPostion = {
        top: "100px",
        left: "50%",
    };

    const orbShape = {
        width: "40px",
        height: "40px",
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

