import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticBtn({ children, strength = 0.28, className, style, onClick, href }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 160, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 160, damping: 18, mass: 0.5 });

  const onMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width  / 2) * strength);
    my.set((e.clientY - rect.top  - rect.height / 2) * strength);
  };

  const onLeave = () => { mx.set(0); my.set(0); };

  const Tag = href ? 'a' : 'div';

  return (
    <Tag href={href} ref={ref}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ display: 'inline-block', textDecoration: 'none' }}
    >
      <motion.div style={{ x: sx, y: sy, display: 'inline-flex' }} className={className}>
        {typeof children === 'function'
          ? children({ style })
          : <div style={style} onClick={onClick} className={className}>{children}</div>
        }
      </motion.div>
    </Tag>
  );
}
