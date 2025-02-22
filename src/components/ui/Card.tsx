import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;  // ✅ Allow className
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
    <div className={`border rounded-lg p-4 shadow-md bg-white ${className || ""}`}>
        {children}
    </div>
);

interface CardContentProps {
    children: React.ReactNode;
    className?: string;  // ✅ Allow className
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
    <div className={`mt-2 ${className || ""}`}>
        {children}
    </div>
);
