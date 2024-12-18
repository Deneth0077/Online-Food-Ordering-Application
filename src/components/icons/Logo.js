import React from 'react';
import Image from 'next/image';

export default function Logo({ className = "h-36 w-36", width = 240, height =240 }) {
  return (
    <Image 
      src='/mart.png' 
      alt="Logo" 
      className={className} 
      width={width} 
      height={height} 
    />
  );
}
