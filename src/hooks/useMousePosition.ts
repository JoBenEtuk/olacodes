import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [boldCursor, setBoldCursor] = useState(false);

  useEffect(() => {
    const handlePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if ((e.target as HTMLElement).className === 'boldCursor') {
        setBoldCursor(true);
      } else {
        setBoldCursor(false);
      }
    };

    window.addEventListener('mousemove', handlePosition);
    return () => window.removeEventListener('mousemove', handlePosition);
  }, []);
  return { ...mousePosition, boldCursor };
};

export default useMousePosition;
