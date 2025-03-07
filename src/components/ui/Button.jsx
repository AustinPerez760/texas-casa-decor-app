'use client';

import Link from 'next/link';

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  // Define styles based on variant
  const variantStyles = {
    primary: 'bg-amber-800 text-white hover:bg-amber-700',
    secondary: 'bg-white text-amber-800 border border-amber-800 hover:bg-amber-50',
    outline: 'bg-transparent text-amber-800 border border-amber-800 hover:bg-amber-50',
    ghost: 'bg-transparent text-amber-800 hover:bg-amber-50',
  };

  // Define styles based on size
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  // Combine all styles
  const buttonStyles = `
    inline-flex items-center justify-center 
    rounded-md font-medium transition-colors 
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${className}
  `;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonStyles} {...props}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button 
      type={type} 
      className={buttonStyles} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
