// components/StylishCursor.js
import React, { useState, useEffect } from 'react';
import './StylishCursor.css';

const StylishCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // Check if hovering over clickable elements
      setIsPointer(window.getComputedStyle(e.target).getPropertyValue('cursor') === 'pointer');
    };

    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className={`cursor-dot ${isPointer ? 'pointer' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Cursor outline */}
      <div 
        className={`cursor-outline ${isPointer ? 'pointer' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default StylishCursor;