import React from "react";
import "../../styles/Sun.css";

interface SunProps {
    pos: { top: string; left: string };
    shape: { width: string; height: string; borderRadius: string };
    shineColor: string;
}

const Sun: React.FC<SunProps> = ({ pos, shape, shineColor }) => {
    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    ...pos,
                    ...shape,
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                }}
                className="sun"></div>

            <div
                style={
                    {
                        ...pos,
                        position: "absolute",
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: -1,
                        "--sunshine-color": shineColor,
                    } as React.CSSProperties
                }
                className="sunshine"></div>
        </div>
    );
};

export default Sun;
