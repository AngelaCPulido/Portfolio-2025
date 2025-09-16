import * as React from "react";
import { motion } from 'motion/react';
import { cn } from "./ui/utils";
import { ArrowUpRight } from 'lucide-react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
  children: React.ReactNode;
}

export function CustomButton({ 
  className, 
  variant = 'primary', 
  showArrow = false,
  children, 
  ...props 
}: CustomButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-10 py-4 font-medium transition-all duration-200 border-2 border-black shadow-sm hover:shadow-lg disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    primary: "bg-primary text-black hover:bg-primary/90",
    secondary: "bg-white text-black hover:bg-gray-50"
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowUpRight size={18} className="ml-1" />
      )}
    </motion.button>
  );
}