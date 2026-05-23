import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  // Dot: ultra-tight
  const dx = useSpring(mx, { stiffness: 700, damping: 40, mass: 0.3 });
  const dy = useSpring(my, { stiffness: 700, damping: 40, mass: 0.3 });

  // Ring: looser
  const rx = useSpring(mx, { stiffness: 180, damping: 28, mass: 0.6 });
  const ry = useSpring(my, { stiffness: 180, damping: 28, mass: 0.6 });

  const [state, setState] = useState('default'); // 'default' | 'hover' | 'image'
  const [label, setLabel] = useState('');

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); };

    const enter = (e) => {
      const el = e.target.closest('a, button, [data-cursor]');
      if (!el) return;
      const type = el.dataset.cursor || 'hover';
      setState(type === 'image' ? 'image' : 'hover');
      setLabel(el.dataset.cursorLabel || '');
    };

    const leave = (e) => {
      const el = e.target.closest('a, button, [data-cursor]');
      if (el) { setState('default'); setLabel(''); }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', enter, true);
    document.addEventListener('mouseleave', leave, true);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', enter, true);
      document.removeEventListener('mouseleave', leave, true);
    };
  }, []);

  // Only show on desktop
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

  const ringSize = state === 'hover' ? 52 : state === 'image' ? 80 : 36;
  const dotSize  = state === 'hover' ? 5  : state === 'image' ? 6  : 7;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          x: rx, y: ry,
          width: ringSize, height: ringSize,
          marginLeft: -ringSize / 2, marginTop: -ringSize / 2,
          borderRadius: '50%',
          border: state === 'image' ? '2px solid rgba(232,73,36,0.8)' : '1.5px solid rgba(255,255,255,0.55)',
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, border-color 0.3s ease',
          mixBlendMode: state === 'image' ? 'normal' : 'difference',
        }}
      >
        {label && (
          <span style={{
            fontFamily: 'Outfit', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#fff', whiteSpace: 'nowrap',
          }}>
            {label}
          </span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          x: dx, y: dy,
          width: dotSize, height: dotSize,
          marginLeft: -dotSize / 2, marginTop: -dotSize / 2,
          borderRadius: '50%',
          background: state === 'image' ? 'var(--red)' : '#fff',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease, background 0.2s ease',
          mixBlendMode: state === 'image' ? 'normal' : 'difference',
        }}
      />

      {/* Hide native cursor via style tag */}
      <style>{`
        html { cursor: none !important; }
        a, button, [data-cursor], input, select, textarea { cursor: none !important; }
      `}</style>
    </>
  );
}
