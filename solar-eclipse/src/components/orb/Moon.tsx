import React from "react";
import "./Moon.css";

interface MoonProps {
    pos: { top: string; left: string };
    shape: { width: string; height: string; borderRadius: string };
}

const Moon: React.FC<MoonProps> = ({ shape }) => {
    return (
        <div style={{ position: "relative", left: "500px", top: "500px" }}>
            <div
                style={{
                    ...shape,
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                }}
                className="moon"></div>
            <div
                style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                }}
                className="moonshine"></div>
        </div>
    );
};

export default Moon;
