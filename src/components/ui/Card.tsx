import React from "react";

interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => (
    <div className="border rounded-lg p-4 shadow-md bg-white">{children}</div>
);

interface CardContentProps {
    children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => (
    <div className="mt-2">{children}</div>
);
