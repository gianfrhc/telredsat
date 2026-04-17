"use client";
import { useEffect, useRef } from 'react';

export default function PartnersMarquee({ partners }) {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentScrollLeft = useRef(0);

  useEffect(() => {
    let animationFrameId;
    
    // We set initial scroll position to the middle so dragging left works immediately
    if (scrollRef.current) {
       scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 4;
    }

    const scroll = () => {
      if (scrollRef.current) {
        if (!isDragging.current) {
          scrollRef.current.scrollLeft += 0.6; // auto scroll speed
        }
        
        const halfWidth = scrollRef.current.scrollWidth / 2;
        
        // Loop forwards
        if (scrollRef.current.scrollLeft >= halfWidth) {
          scrollRef.current.scrollLeft -= (scrollRef.current.scrollWidth / 4); // Jump back seamlessly
        } 
        // Loop backwards (when dragging right)
        else if (scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft += (scrollRef.current.scrollWidth / 4); // Jump forward seamlessly
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    currentScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // drag sensitivity
    scrollRef.current.scrollLeft = currentScrollLeft.current - walk;
  };

  // We quadruple the list to give plenty of space for seamless jumping backwards and forwards
  const renderList = [...partners, ...partners, ...partners, ...partners];

  return (
    <div 
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={{ 
        overflowX: 'hidden', 
        whiteSpace: 'nowrap', 
        display: 'flex', 
        cursor: 'default',
        padding: '20px 0'
      }}
    >
      <div style={{ display: 'flex', gap: '80px', padding: '0 40px', alignItems: 'center' }}>
         {renderList.map((partner, i) => (
           <img 
              key={i} 
              src={`/partners/${partner}`} 
              alt="Partner" 
              className="partner-logo"
              draggable="false"
              style={{ height: '50px', objectFit: 'contain' }} 
           />
         ))}
      </div>
    </div>
  );
}
