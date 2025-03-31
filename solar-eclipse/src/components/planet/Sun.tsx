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

            <div className="sunshine"></div>
        </div>
    );
};

export default Sun;
