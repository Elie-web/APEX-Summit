import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPEAKERS } from '../data/event';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const INTERVAL = 7000;

const photoVars = {
  enter: d => ({ x: d > 0 ? '100%' : '-100%', scale: 0.94, opacity: 0 }),
  center: { x: 0, scale: 1, opacity: 1 },
  exit: d => ({ x: d > 0 ? '-28%' : '28%', scale: 0.96, opacity: 0 }),
};

const contentVars = {
  enter: d => ({ opacity: 0, y: d > 0 ? 18 : -18 }),
  center: { opacity: 1, y: 0 },
  exit: d => ({ opacity: 0, y: d > 0 ? -12 : 12 }),
};

const spring = { type: 'spring', stiffness: 280, damping: 22 };
const ease   = { duration: 0.26, ease: [0.25, 0.1, 0.25, 1] };

const NavBtn = ({ onClick, children, label, side }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.08, x: side === 'left' ? -3 : 3 }}
    whileTap={{ scale: 0.91 }}
    aria-label={label}
    className="speaker-nav-side"
    style={{
      position: 'absolute',
      [side]: '-32px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 20,
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'rgba(10,11,20,0.92)',
      backdropFilter: 'blur(16px) saturate(1.5)',
      border: '1.5px solid rgba(255,255,255,0.22)',
      cursor: 'pointer',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 12px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.1)',
      transition: 'border-color 0.2s',
    }}
  >
    {children}
  </motion.button>
);

export default function Speakers() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const resumeKey = useRef(0);

  const s = SPEAKERS[idx];
  const col = s.color;

  const go = useCallback((next, d) => {
    if (next === idx) return;
    setDir(d ?? (next > idx ? 1 : -1));
    setIdx(next);
  }, [idx]);

  const goNext = useCallback(() => go((idx + 1) % SPEAKERS.length, 1),  [go, idx]);
  const goPrev = useCallback(() => go((idx - 1 + SPEAKERS.length) % SPEAKERS.length, -1), [go, idx]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(goNext, INTERVAL);
    return () => clearTimeout(t);
  }, [idx, paused, goNext]);

  return (
    <section
      id="speakers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); resumeKey.current += 1; }}
      style={{ background: 'var(--dark)', padding: '100px 0 80px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '5%', left: '15%',
        width: 900, height: 900, borderRadius: '50%',
        filter: 'blur(240px)', opacity: 0.06, pointerEvents: 'none',
        backgroundColor: col, transition: 'background-color 1s ease',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 44 }}
        >
          <div>
            <p className="label" style={{ marginBottom: 12 }}>Lineup 2026</p>
            <h2 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--t-light)', lineHeight: 1.06, letterSpacing: '-0.03em' }}>
              Ceux qui<br />l'ont fait.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
            <p style={{ fontSize: 15, color: 'var(--t-dim)', maxWidth: '40ch', lineHeight: 1.75, textAlign: 'right', fontWeight: 450 }}>
              Ils ont scalé, levé, vendu.<br className="hide-mobile" />
              Maintenant ils racontent ce qui a marché, et ce qui n'a pas marché.
            </p>
            {/* Counter only, arrows are on the card */}
            <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 13, color: 'var(--t-dim)', letterSpacing: '0.06em' }}>
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ color: col, transition: 'color 0.4s' }}
              >
                {String(idx + 1).padStart(2, '0')}
              </motion.span>
              {' / '}{String(SPEAKERS.length).padStart(2, '0')}
            </span>
          </div>
        </motion.div>

        {/* ── Card + floating side arrows (desktop) ── */}
        <div className="speaker-card-wrapper">

          {/* Desktop side arrows */}
          <NavBtn onClick={goPrev} label="Intervenant précédent" side="left">
            <ChevronLeft size={26} strokeWidth={2.5} />
          </NavBtn>
          <NavBtn onClick={goNext} label="Intervenant suivant" side="right">
            <ChevronRight size={26} strokeWidth={2.5} />
          </NavBtn>

          {/* Main card */}
          <div
            className="speaker-carousel-grid"
            style={{
              borderRadius: 20, overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.38)',
            }}
          >
            {/* PHOTO */}
            <div className="speaker-photo-panel" style={{ position: 'relative', overflow: 'hidden', background: '#05050D' }}>
              <AnimatePresence custom={dir} mode="popLayout">
                <motion.img
                  key={`p-${idx}`}
                  src={s.photo.replace('w=500', 'w=900')}
                  alt={s.name}
                  custom={dir}
                  variants={photoVars}
                  initial="enter" animate="center" exit="exit"
                  transition={spring}
                  className="speaker-photo"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </AnimatePresence>

              {/* Gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(100deg, transparent 50%, rgba(8,9,18,0.55) 100%)' }} />

              {/* Accent bar */}
              <motion.div
                animate={{ backgroundColor: col }}
                transition={{ duration: 0.6 }}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3 }}
              />

              {/* Mobile inline arrows, small screens only */}
              <div className="speaker-mobile-arrows">
                <motion.button
                  onClick={goPrev}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Précédent"
                  style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: 'rgba(10,11,20,0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1.5px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  }}
                >
                  <ChevronLeft size={22} strokeWidth={2.5} />
                </motion.button>
                <motion.button
                  onClick={goNext}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Suivant"
                  style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: 'rgba(10,11,20,0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1.5px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  }}
                >
                  <ChevronRight size={22} strokeWidth={2.5} />
                </motion.button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="speaker-content-pad" style={{ background: 'var(--dark-2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
              <AnimatePresence custom={dir} mode="wait">
                <motion.div
                  key={`c-${idx}`}
                  custom={dir}
                  variants={contentVars}
                  initial="enter" animate="center" exit="exit"
                  transition={ease}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <span style={{
                    display: 'inline-block', alignSelf: 'flex-start',
                    padding: '4px 14px', borderRadius: 100,
                    fontSize: 10, fontWeight: 800, letterSpacing: '0.13em', textTransform: 'uppercase',
                    background: `${col}18`, color: col, border: `1px solid ${col}35`,
                    marginBottom: 20,
                  }}>{s.tag}</span>

                  <h3 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(1.7rem, 2.8vw, 2.6rem)', color: '#FFFFFF', lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: 10 }}>
                    {s.name}
                  </h3>

                  <p style={{ fontSize: 14, fontWeight: 700, color: col, marginBottom: 3 }}>{s.title}</p>
                  <p style={{ fontSize: 13, color: 'var(--t-dim)', marginBottom: 26, fontWeight: 450 }}>{s.company}</p>

                  <div className="speaker-sep" style={{ width: 28, height: 2, backgroundColor: col, opacity: 0.45, marginBottom: 20, transition: 'background-color 0.4s' }} />

                  <p className="speaker-bio" style={{ fontSize: 15, color: 'var(--t-dim)', lineHeight: 1.74, fontWeight: 450 }}>{s.bio}</p>

                  <div className="speaker-topics" style={{ display: 'flex', gap: 8 }}>
                    {s.topics.map(t => (
                      <span key={t} style={{ padding: '5px 14px', borderRadius: 100, fontSize: 12, fontWeight: 600, background: 'rgba(255,255,255,0.05)', color: 'var(--t-dim)', border: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>{t}</span>
                    ))}
                  </div>

                  <a href="#pricing" className="btn btn-red speaker-cta" style={{ alignSelf: 'flex-start' }}>
                    Réserver pour l'entendre <ArrowRight size={14} />
                  </a>
                </motion.div>
              </AnimatePresence>

              {/* Progress bar */}
              {!paused && (
                <motion.div
                  key={`bar-${idx}-${resumeKey.current}`}
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                  style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, backgroundColor: col, transformOrigin: 'left', transition: 'background-color 0.4s' }}
                />
              )}
            </div>
          </div>
        </div>

        {/* ── Avatar strip ── */}
        <div className="speaker-thumb-strip" style={{ display: 'flex', justifyContent: 'center', marginTop: 28, gap: 12, overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: 2 }}>
          {SPEAKERS.map((sp, i) => (
            <motion.button
              key={sp.id} onClick={() => go(i)}
              whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.9 }}
              title={sp.name}
              style={{
                flexShrink: 0, width: 52, height: 52,
                borderRadius: '50%', padding: 0, border: 'none',
                cursor: 'pointer', background: 'transparent', position: 'relative',
                outline: i === idx ? `2.5px solid ${sp.color}` : '2.5px solid rgba(255,255,255,0.12)',
                outlineOffset: 3,
                opacity: i === idx ? 1 : 0.45,
                transition: 'opacity 0.35s, outline 0.3s',
              }}
            >
              <img src={sp.photo} alt={sp.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', objectPosition: '50% 18%', display: 'block' }} />
            </motion.button>
          ))}
        </div>

        {/* Animated dot indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
          {SPEAKERS.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => go(i)}
              animate={{ width: i === idx ? 22 : 6, backgroundColor: i === idx ? col : 'rgba(255,255,255,0.18)' }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              style={{ height: 6, borderRadius: 3, cursor: 'pointer' }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
