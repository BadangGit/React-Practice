import React from "react";

interface CardProps {
    title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
    return (
        <div className="card">
            <div className="cardContent">{title}</div>
        </div>
    );
};

export default Card;
