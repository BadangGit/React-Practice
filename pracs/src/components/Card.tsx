import React from "react";

import styles from "../styles/Card.module.css";

interface CardProps {
    content: React.FunctionComponent;
}

const Card: React.FC<CardProps> = ({ content: Content }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <Content />
            </div>
        </div>
    );
};

export default Card;
