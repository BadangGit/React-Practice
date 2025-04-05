import React from "react";

import Sun from "./orb/Sun";
import Moon from "./orb/Moon";

import createRandomColor from "../utils/colors";

import styles from "../styles/SolarEclipse.module.css";

const SolarEclipse: React.FC = () => {
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
        <div className={styles.app}>
            <Sun pos={noonPostion} shape={orbShape} shineColor={randomColor} />
            <Moon pos={noonPostion} shape={orbShape} />

            <div className={styles.footer}>
                <h1>Solar Eclipse</h1>
                <h3>drag the moon</h3>
            </div>
        </div>
    );
};

export default SolarEclipse;
