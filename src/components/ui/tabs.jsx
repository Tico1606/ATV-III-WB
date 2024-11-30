// src/components/ui/tabs.jsx
import React, { useState } from 'react';

export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { activeTab, setActiveTab })
  );
}

export function TabsList({ children, className }) {
  return <div className={`flex ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, activeTab, setActiveTab }) {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`flex-1 p-2 text-center ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, activeTab }) {
  return activeTab === value ? <div>{children}</div> : null;
}
