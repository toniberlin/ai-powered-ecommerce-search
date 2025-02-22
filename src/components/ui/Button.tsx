import React, { ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void;
    className?: string;
    children: ReactNode; // ✅ Define children explicitly
}

export const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg bg-blue-500 text-white ${className}`}>
        {children}
    </button>
);
