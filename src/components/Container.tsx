// src/components/Layout/Container.tsx
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Container({ 
  children, 
  className = '', 
  fullWidth = false 
}: ContainerProps) {
  return (
    <div className={`w-full ${fullWidth ? '' : 'max-w-[100vw] overflow-x-hidden'}`}>
      <div className={`${!fullWidth ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : ''} ${className}`}>
        {children}
      </div>
    </div>
  );
}