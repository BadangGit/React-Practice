import React from "react";
import "../../styles/Moon.css";

interface MoonProps {
    pos: { top: string; left: string };
    shape: { width: string; height: string; borderRadius: string };
}

const Moon: React.FC<MoonProps> = ({ shape }) => {
    return (
        <div style={{ position: "absolute", left: "500px", top: "500px" }}>
            <div
                style={{
                    ...shape,
                    transform: "translate(-50%, -50%)",
                }}
                className="moon"></div>
        </div>
    );
};

export default Moon;
