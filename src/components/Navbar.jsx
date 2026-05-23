import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV = [
  { l: 'Speakers', h: '#speakers' },
  { l: 'Programme', h: '#agenda' },
  { l: 'Tarifs', h: '#pricing' },
  { l: 'FAQ', h: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 90, damping: 22, delay: 0.05 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(8,9,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: 64 }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            {/* APEX = peak/triangle logomark */}
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" style={{ flexShrink: 0 }}>
              <polygon points="15,3 28,26 2,26" fill="none" stroke="var(--red)" strokeWidth="2.2" strokeLinejoin="round"/>
              <line x1="9" y1="19" x2="21" y2="19" stroke="var(--red)" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <span style={{
                fontFamily: 'Outfit', fontWeight: 900, fontSize: 14,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--t-light)', lineHeight: 1.1,
              }}>
                MERIDIAN
              </span>
              <span style={{
                fontFamily: 'Outfit', fontWeight: 400, fontSize: 9,
                letterSpacing: '0.28em', textTransform: 'uppercase',
                color: 'var(--t-dim)', lineHeight: 1,
              }}>
                FORUM · 2026
              </span>
            </div>
          </a>

          {/* Nav */}
          <nav className="navbar-links">
            {NAV.map(n => (
              <a key={n.l} href={n.h} style={{
                fontSize: 14, fontWeight: 500, color: 'var(--t-dim)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--t-light)'}
              onMouseLeave={e => e.target.style.color = 'var(--t-dim)'}
              >
                {n.l}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="navbar-actions">
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '0.07em',
              color: 'var(--amber)',
            }}>
              18–19 SEPT. 2026
            </span>
            <a href="#pricing" className="btn btn-red" style={{ padding: '9px 18px', fontSize: '13px', borderRadius: '8px' }}>
              Réserver →
            </a>
          </div>

          <button className="navbar-burger" onClick={() => setOpen(!open)}
            style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--t-dim)', padding: 4 }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 26 }}
            style={{ overflow: 'hidden', background: 'var(--dark-2)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div style={{ padding: '16px 28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {NAV.map(n => (
                <a key={n.l} href={n.h} onClick={() => setOpen(false)} style={{
                  fontSize: 17, fontWeight: 600, color: 'var(--t-dim)',
                  textDecoration: 'none', fontFamily: 'Outfit',
                }}>
                  {n.l}
                </a>
              ))}
              <a href="#pricing" onClick={() => setOpen(false)}
                className="btn btn-red" style={{ marginTop: 8, justifyContent: 'center' }}>
                Réserver ma place →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
