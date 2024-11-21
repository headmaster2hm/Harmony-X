import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string; // Optional label property
    error?: string; // Optional error message property
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <input {...props} />
            {error && <span>{error}</span>}
        </div>
    );
};

export default Input;
