import React from "react";
import "../styles/App.css";

import Sun from "./orb/Sun";
import Moon from "./orb/Moon";

import createRandomColor from "../utils/colors";

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

    const randomColor = createRandomColor();

    return (
        <div>
            <Sun pos={noonPostion} shape={orbShape} shineColor={randomColor} />
            <Moon pos={noonPostion} shape={orbShape} />
        </div>
    );
}

export default App;

