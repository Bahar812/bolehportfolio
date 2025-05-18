import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    const handleLinkHoverStart = () => setIsHovering(true);
    const handleLinkHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  // Only show custom cursor on non-touch devices
  useEffect(() => {
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    if (!isTouchDevice()) {
      document.body.style.cursor = 'none';
    }
    
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-300 ${
          isClicked ? 'bg-purple-400 scale-75' : 'bg-white'
        } ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '12px',
          height: '12px',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        className="fixed pointer-events-none z-40 rounded-full border border-white/30 mix-blend-difference transition-all duration-500"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '50px' : '40px',
          height: isHovering ? '50px' : '40px',
          transform: 'translate(-50%, -50%)',
          transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)',
          transitionDuration: '0.2s',
        }}
      />
    </>
  );
};

export default Cursor;