import React from "react";
import "../styles/App.css";

import Card from "./Card";
import SolarEclipse from "./SolarEclipse";

function App() {
    const cards = [
        SolarEclipse,
        SolarEclipse,
        SolarEclipse,
        SolarEclipse,
        SolarEclipse,
        SolarEclipse,
        SolarEclipse,
        SolarEclipse,
        SolarEclipse,
        SolarEclipse,
        SolarEclipse,
        SolarEclipse,
    ];

    return (
        <div className="App">
            <div className="card-container">
                {cards.map((CardComponent, index) => (
                    <div className="card">
                        <Card key={index} content={SolarEclipse} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

