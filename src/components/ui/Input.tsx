// src/components/ui/input.tsx
import React from 'react';

export const Input: React.FC<{ value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; className?: string; placeholder: string }> = ({ value, onChange, className, placeholder }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        className={`px-4 py-2 border rounded-md ${className}`}
        placeholder={placeholder}
    />
);
