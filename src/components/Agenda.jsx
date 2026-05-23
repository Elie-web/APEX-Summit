import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AGENDA } from '../data/event';
import { Clock, Users } from 'lucide-react';

const T = {
  keynote:    { bg: '#FFF1EC', text: '#B34010', dot: '#E84924' },
  masterclass:{ bg: '#EFF3FF', text: '#2845B8', dot: '#3B82F6' },
  panel:      { bg: '#ECFDF5', text: '#0A7C52', dot: '#10B981' },
  fireside:   { bg: '#FFFBEB', text: '#924E00', dot: '#F5A500' },
  networking: { bg: '#F5F3FF', text: '#5B21B6', dot: '#8B5CF6' },
  social:     { bg: '#F9F6F2', text: '#78716C', dot: '#A8A29E' },
};

export default function Agenda() {
  const [day, setDay] = useState(0);

  return (
    <section id="agenda" style={{ background: 'var(--cream-2)', padding: '100px 0' }}>
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 28px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ marginBottom: 48 }}
        >
          <p className="label" style={{ color: 'rgba(232,73,36,0.6)', marginBottom: 16 }}>Programme</p>
          <h2 style={{
            fontFamily: 'Outfit', fontWeight: 900,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            color: 'var(--t-dark)', lineHeight: 1.06, letterSpacing: '-0.03em',
          }}>
            2 jours.<br />Voici le programme.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'inline-flex', padding: 4, background: '#E4DFD6', borderRadius: 12, marginBottom: 36, gap: 4 }}>
          {AGENDA.map((d, i) => (
            <button key={i} onClick={() => setDay(i)} style={{
              position: 'relative', padding: '9px 22px', borderRadius: 9,
              border: 'none', cursor: 'pointer',
              fontFamily: 'Outfit', fontWeight: 700, fontSize: 13,
              color: day === i ? 'var(--t-dark)' : '#999',
              background: 'transparent', zIndex: 1, transition: 'color 0.2s',
            }}>
              {day === i && (
                <motion.div layoutId="agenda-tab"
                  style={{ position: 'absolute', inset: 0, background: '#fff', borderRadius: 9, zIndex: -1, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                />
              )}
              {d.day} · {d.date}
            </button>
          ))}
        </div>

        {/* Sessions */}
        <AnimatePresence mode="wait">
          <motion.div key={day}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 6 }}
          >
            {AGENDA[day].sessions.map((s, i) => {
              const st = T[s.type] || T.keynote;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 22, delay: i * 0.045 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 18px',
                    background: '#fff', borderRadius: 12,
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 12, color: '#7A7470', minWidth: 42, flexShrink: 0 }}>
                    {s.time}
                  </span>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: st.dot, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 14, color: 'var(--t-dark)', lineHeight: 1.3 }}>{s.title}</p>
                    {s.speaker && (
                      <p style={{ fontSize: 11, color: '#AAA', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Users size={10} />{s.speaker}
                      </p>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <span style={{ fontSize: 11, color: '#C0B8B0', display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Clock size={10} />{s.duration}
                    </span>
                    <span style={{
                      padding: '3px 9px', borderRadius: 100, fontSize: 10, fontWeight: 800,
                      background: st.bg, color: st.text,
                      fontFamily: 'Outfit', letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>
                      {s.type}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#pricing" className="btn btn-dark" style={{ padding: '13px 28px' }}>
            Accéder au programme complet →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
