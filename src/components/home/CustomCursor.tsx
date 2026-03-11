import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      }
      animRef.current = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', handleMove);
    animateRing();

    // Add cursor:none to body
    document.body.style.cursor = 'none';

    // Interactive element hover effects
    const addHover = () => {
      document.querySelectorAll('button, a, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (cursorRef.current) cursorRef.current.style.transform += ' scale(1.8)';
          if (ringRef.current) ringRef.current.style.borderColor = 'rgba(99,102,241,0.8)';
        });
        el.addEventListener('mouseleave', () => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(1.8)', '');
          }
          if (ringRef.current) ringRef.current.style.borderColor = 'rgba(99,102,241,0.5)';
        });
      });
    };
    // Delay to catch rendered elements
    const t = setTimeout(addHover, 1000);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animRef.current);
      document.body.style.cursor = '';
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 rounded-full pointer-events-none hidden lg:block"
        style={{
          background: '#6366f1',
          zIndex: 9999,
          transition: 'transform 0.15s ease, opacity 0.15s',
          mixBlendMode: 'screen',
        }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full pointer-events-none hidden lg:block"
        style={{
          border: '1px solid rgba(99,102,241,0.5)',
          zIndex: 9998,
          transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
    </>
  );
};
