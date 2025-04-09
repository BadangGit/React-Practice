import React from "react";

import "../styles/App.css";

import Card from "./Card";

function App() {
    const cardInfo = [{ title: "Card 1" }, { title: "Card 2" }];

    return (
        <div className="App">
            {cardInfo.map((info, index) => (
                <Card key={index} title={info.title} />
            ))}
        </div>
    );
}

export default App;

