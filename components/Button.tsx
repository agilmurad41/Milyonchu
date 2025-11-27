import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'option';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold py-3 px-6 rounded-lg transition-all duration-200 transform active:scale-95 shadow-lg border-2";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 border-blue-400 text-white",
    secondary: "bg-slate-700 hover:bg-slate-600 border-slate-500 text-gray-200",
    option: "bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border-slate-500 text-white text-left relative overflow-hidden"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};