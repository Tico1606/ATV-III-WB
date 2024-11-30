// src/components/ui/button.jsx
import React from 'react';

export function Button({ children, variant, className, ...props }) {
  let baseStyle = 'px-4 py-2 rounded text-white ';
  
  switch (variant) {
    case 'outline':
      baseStyle += 'border border-gray-400 text-gray-700 bg-transparent';
      break;
    case 'destructive':
      baseStyle += 'bg-red-500 hover:bg-red-600';
      break;
    default:
      baseStyle += 'bg-blue-500 hover:bg-blue-600';
  }

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
