import React from "react";
import "../../styles/Sun.css";

interface SunProps {
    pos: { top: string; left: string };
    shape: { width: string; height: string; borderRadius: string };
}

const Sun: React.FC<SunProps> = ({ pos, shape }) => {
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
                style={{
                    ...pos,
                    position: "absolute",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                }}
                className="sunshine"></div>
        </div>
    );
};

export default Sun;
