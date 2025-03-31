import React from "react";
import "./Sun.css";

interface SunProps {
    pos: { top: string; left: string };
    shape: { width: string; height: string };
}

const Sun: React.FC<SunProps> = ({ pos, shape }) => {
    return (
        <div>
            <div
                style={{
                    ...pos,
                    ...shape,
                    position: "absolute",
                }}
                className="sun"></div>

            <div
                style={
                    {
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                        width: "100vw",
                        height: "100vh",
                        zIndex: -1,
                        opacity: 0.5,
                        "--sun-postion-x": `${pos.left}`,
                        "--sun-postion-y": `${pos.top}`,
                    } as React.CSSProperties
                }
                className="sunshine"></div>
        </div>
    );
};

export default Sun;
