import React from "react";
type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-lg shadow-md border border-gray-200 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardContent: React.FC<CardProps> = ({ children, className = "", ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);
