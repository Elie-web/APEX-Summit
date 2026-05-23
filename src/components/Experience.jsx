import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Zap, Users, TrendingUp, Globe, Award } from 'lucide-react';

function AnimatedStat({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ''));
    const prefix = value.match(/^[^0-9]*/)?.[0] || '';
    const suffix = value.match(/[^0-9.]+$/)?.[0] || '';
    const isFloat = value.includes('.');

    const controls = animate(0, numeric, {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(prefix + (isFloat ? v.toFixed(1) : Math.round(v)) + suffix),
    });
    return controls.stop;
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

const MOMENTS = [
  { label: 'Keynotes',      emoji: '🎯', desc: 'Des angles que vous n\'avez pas depuis votre bureau.' },
  { label: 'Networking',    emoji: '🤝', desc: 'Des connexions qui tiennent des années après l\'événement.' },
  { label: 'Masterclasses', emoji: '⚡', desc: 'Repartez avec des outils concrets, pas des slides.' },
  { label: 'Investor Rooms',emoji: '💼', desc: 'Accès direct à des VCs et business angels sélectionnés.' },
  { label: 'Cocktails VIP', emoji: '🥂', desc: 'Les deals informels se signent en dehors des salles.' },
  { label: 'Live Workshops',emoji: '🛠', desc: 'Travaillez vos stratégies avec des dirigeants qui ont les mêmes défis.' },
];

export default function Experience() {
  return (
    <section style={{ background: 'var(--dark)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '5%',
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,73,36,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ marginBottom: 56 }}
        >
          <p className="label" style={{ marginBottom: 16 }}>Ce qui se passe sur place</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h2 style={{
              fontFamily: 'Outfit', fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              color: 'var(--t-light)', lineHeight: 1.06, letterSpacing: '-0.03em', maxWidth: '16ch',
            }}>
              Deux jours qui valent une année de réseau.
            </h2>
            <p className="prose" style={{ color: 'var(--t-dim)' }}>
              Ceux qui sont venus une fois reviennent l'année d'après.
              Parce que les gens qu'ils ont rencontrés là ont changé quelque chose dans leur boîte.
            </p>
          </div>
        </motion.div>

        {/* BENTO GRID */}
        <div style={{
          display: 'grid',
          gridTemplateRows: 'auto auto',
          gap: 14,
          marginBottom: 56,
        }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {/* Big stat card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 75, damping: 20 }}
            style={{
              gridColumn: 'span 2', gridRow: 'span 2',
              background: 'var(--dark-2)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: 32,
              display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', bottom: -40, right: -40,
              width: 200, height: 200, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232,73,36,0.12) 0%, transparent 70%)',
            }} />
            <div>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(232,73,36,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24,
              }}>
                <TrendingUp size={22} style={{ color: 'var(--red)' }} />
              </div>
            </div>
            <div>
              <p style={{
                fontFamily: 'Outfit', fontWeight: 900,
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                color: 'var(--t-light)', lineHeight: 1,
                letterSpacing: '-0.04em', marginBottom: 8,
              }}>
                <AnimatedStat value="11.8×" />
              </p>
              <p style={{
                fontFamily: 'Outfit', fontWeight: 800,
                fontSize: 'clamp(1.3rem, 2.4vw, 1.9rem)',
                color: 'var(--t-light)', letterSpacing: '-0.02em', marginBottom: 8,
              }}>
                de ROI
              </p>
              <p style={{ fontSize: 13, color: 'var(--t-muted)', lineHeight: 1.5 }}>
                mesuré sur les 6 mois suivant l'événement.
              </p>
            </div>
          </motion.div>

          {/* Other stat cards */}
          {[
            { color: '#3B82F6', value: '3.2',  label: 'connexions',   desc: 'à fort impact, par participant' },
            { color: '#10B981', value: '94%',  label: 'en action',    desc: 'dès la semaine suivante' },
            { color: '#F5A500', value: '40+',  label: 'pays',         desc: 'représentés dans la salle' },
            { color: '#8B5CF6', value: '6',    label: 'speakers',     desc: 'triés sur leurs résultats' },
          ].map(({ color, value, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: (i + 1) * 0.08 }}
              style={{
                background: 'var(--dark-2)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '20px 22px',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 4,
              }}
            >
              <p style={{
                fontFamily: 'Outfit', fontWeight: 900,
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                color: 'var(--t-light)', lineHeight: 1,
                letterSpacing: '-0.03em', marginBottom: 2,
              }}>
                <AnimatedStat value={value} />
              </p>
              <p style={{ fontSize: 17, fontWeight: 700, color, fontFamily: 'Outfit', lineHeight: 1.2 }}>{label}</p>
              <p style={{ fontSize: 12, color: 'var(--t-muted)', lineHeight: 1.4 }}>{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Moments grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ marginBottom: 20 }}
        >
          <p className="label-dim" style={{ marginBottom: 20 }}>Ce qui vous attend</p>
        </motion.div>
        <div style={{ display: 'grid', gap: 12 }}
          className="grid grid-cols-1 md:grid-cols-3">
          {MOMENTS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: i * 0.06 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, flexShrink: 0,
              }}>
                {m.emoji}
              </div>
              <div>
                <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 13, color: 'var(--t-light)', marginBottom: 2 }}>
                  {m.label}
                </p>
                <p style={{ fontSize: 12, color: 'var(--t-dim)', lineHeight: 1.5 }}>{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
