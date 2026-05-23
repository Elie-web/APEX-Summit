import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 28 }}
          style={{
            position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40,
            background: 'rgba(16,17,26,0.97)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
          }}
          className="md:hidden"
        >
          <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 13, color: 'var(--t-light)' }}>
                MERIDIAN Forum 2026
              </p>
              <p style={{ fontSize: 11, color: 'var(--red)', fontWeight: 600 }}>
                ⚡ 23 places Early Bird restantes
              </p>
            </div>
            <a href="#pricing" className="btn btn-red" style={{ padding: '10px 18px', fontSize: 13 }}>
              Réserver →
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
