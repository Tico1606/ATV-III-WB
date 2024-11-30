// src/components/ui/card.jsx
import React from 'react';

export function Card({ children, className }) {
  return <div className={`p-4 shadow-md rounded-lg bg-white ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="border-b pb-2 mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export function CardContent({ children }) {
  return <div className="text-sm">{children}</div>;
}
