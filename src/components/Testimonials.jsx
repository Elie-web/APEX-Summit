import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/event';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Stars({ n = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--amber)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function Avatar({ t }) {
  const [err, setErr] = useState(false);
  if (t.photo && !err) {
    return (
      <img
        src={t.photo}
        alt={t.name}
        onError={() => setErr(true)}
        style={{
          width: 48, height: 48, borderRadius: 14, flexShrink: 0,
          objectFit: 'cover', objectPosition: 'top center',
          border: `2px solid ${t.color}30`,
        }}
      />
    );
  }
  return (
    <div style={{
      width: 48, height: 48, borderRadius: 14, flexShrink: 0,
      background: `${t.color}18`,
      border: `2px solid ${t.color}30`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Outfit', fontWeight: 800, fontSize: 15, color: t.color,
    }}>
      {t.name.split(' ').map(w => w[0]).join('')}
    </div>
  );
}

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const ref = useRef(null);

  const next = () => setCur(c => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCur(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const reset = () => { clearInterval(ref.current); ref.current = setInterval(next, 6200); };

  useEffect(() => { ref.current = setInterval(next, 6200); return () => clearInterval(ref.current); }, []);

  const t = TESTIMONIALS[cur];

  return (
    <section style={{ background: 'var(--dark-2)', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 28px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 56 }}
        >
          <div>
            <p className="label" style={{ marginBottom: 16 }}>Témoignages</p>
            <h2 style={{
              fontFamily: 'Outfit', fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              color: 'var(--t-light)', lineHeight: 1.06, letterSpacing: '-0.03em',
            }}>
              Ce que les participants<br />en disent.
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', gap: 3, justifyContent: 'flex-end', marginBottom: 6 }}><Stars /></div>
            <p style={{ fontSize: 13, color: 'var(--t-muted)' }}>4.9/5 · 847 avis post-événement vérifiés</p>
          </div>
        </motion.div>

        {/* ── DESKTOP: carousel ── */}
        <div className="testi-desktop">
          <AnimatePresence mode="wait">
            <motion.div key={cur}
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ type: 'spring', stiffness: 130, damping: 26 }}
              style={{
                background: 'var(--dark-3)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24, padding: '48px 48px 40px', marginBottom: 28,
                position: 'relative', overflow: 'hidden',
                borderLeft: `3px solid ${t.color}`,
              }}
            >
              {/* Decorative quote mark */}
              <div style={{
                position: 'absolute', top: 20, right: 32,
                fontFamily: 'Outfit', fontWeight: 900,
                fontSize: '7rem', lineHeight: 1,
                color: `${t.color}12`,
                userSelect: 'none',
              }}>
                "
              </div>

              <p style={{
                fontFamily: 'Outfit', fontWeight: 700,
                fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
                color: 'var(--t-light)', lineHeight: 1.55,
                letterSpacing: '-0.01em', maxWidth: '64ch', marginBottom: 36,
              }}>
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <Avatar t={t} />
                <div>
                  <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 14, color: 'var(--t-light)', marginBottom: 2 }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: t.color, fontWeight: 600 }}>{t.title}</p>
                </div>
                <div style={{ marginLeft: 'auto' }}><Stars n={t.rating} /></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {[prev, null, next].map((fn, i) => (
              fn ? (
                <button key={i} onClick={() => { fn(); reset(); }} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--t-dim)', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = 'var(--t-light)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--t-dim)'; }}>
                  {i === 0 ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </button>
              ) : (
                <div key={i} style={{ flex: 1, display: 'flex', gap: 6, justifyContent: 'center' }}>
                  {TESTIMONIALS.map((item, j) => (
                    <button key={j} onClick={() => { setCur(j); reset(); }} style={{
                      height: 4, borderRadius: 100, border: 'none', cursor: 'pointer',
                      width: j === cur ? 28 : 8,
                      background: j === cur ? TESTIMONIALS[j].color : 'rgba(255,255,255,0.15)',
                      transition: 'all 0.3s ease',
                    }} />
                  ))}
                </div>
              )
            ))}
          </div>
        </div>

        {/* ── MOBILE: all reviews stacked, nothing hidden behind a carousel ── */}
        <div className="testi-mobile">
          {TESTIMONIALS.map((item, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 24 }}
              style={{
                background: 'var(--dark-3)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: `3px solid ${item.color}`,
                borderRadius: 18, padding: '24px 22px 20px',
              }}
            >
              <div style={{ marginBottom: 16 }}><Stars n={item.rating} /></div>
              <p style={{
                fontFamily: 'Outfit', fontWeight: 700,
                fontSize: 16, color: 'var(--t-light)', lineHeight: 1.5,
                letterSpacing: '-0.01em', marginBottom: 22,
              }}>
                "{item.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar t={item} />
                <div>
                  <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 14, color: 'var(--t-light)', marginBottom: 2 }}>{item.name}</p>
                  <p style={{ fontSize: 12, color: item.color, fontWeight: 600 }}>{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
