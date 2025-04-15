import React from 'react';
type ButtonProps = {
    text: string;
    className?: string;
    id?: string;
};

export const Button: React.FC<ButtonProps> = ({ text, className, id }) => {
    return (
        <a className={`cta-wrapper ${className || ""}`} id={id}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow-down" />
                </div>
            </div>
        </a>
    );
};