import React from "react";
import "./Button.css";
// import { Link } from "react-router-dom";

const STYLES = ["btn-primary", "btn-outline"];

const SIZES = ["btn-medium", "btn-large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    // jadi checkButtonStyle klo misal stylesnya include buttonstyle klo bener itu ya buttonstyle, klo ga style indeks ke 0 yaitu btn-primary

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>

        // ` bisa campuran isinya
    );
};

// ero function
