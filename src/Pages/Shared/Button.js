import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary text-white uppercase test-bold bg-gradient-to-r from-secondary to-primary">{children ? children : "Get Started"}</button>
        </div>
    );
};

export default Button;