import { motion } from 'framer-motion';
import { STATS, LOGOS } from '../data/event';

export default function SocialProof() {
  return (
    <section style={{ background: 'var(--dark-2)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      {/* Stats */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 28px 48px' }}>
        <div style={{ display: 'grid', gap: '1px' }}
          className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, damping: 22, delay: i * 0.07 }}
              style={{ padding: '4px 16px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
              className={i < 3 ? '' : 'border-r-0'}
            >
              <p style={{
                fontFamily: 'Outfit', fontWeight: 900,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: 'var(--t-light)',
                lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 6,
              }}>
                {s.value}
              </p>
              <p style={{ fontSize: 13, color: 'var(--t-dim)', fontWeight: 500 }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingBottom: 32, paddingTop: 24, overflow: 'hidden' }}>
        <p className="label-dim" style={{ textAlign: 'center', marginBottom: 16 }}>
          Ces entreprises envoient leurs équipes chaque année
        </p>
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', gap: 0, width: 'max-content', animation: 'ticker 30s linear infinite', alignItems: 'center' }}>
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'Outfit', fontWeight: 700, fontSize: 13,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(235,231,223,0.28)', whiteSpace: 'nowrap',
                  padding: '0 36px',
                }}>
                  {logo}
                </span>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
              </span>
            ))}
          </div>
          {/* Fade edges */}
          {['left', 'right'].map(side => (
            <div key={side} style={{
              position: 'absolute', insetBlock: 0,
              [side]: 0, width: 120, pointerEvents: 'none',
              background: `linear-gradient(${side === 'right' ? '270' : '90'}deg, var(--dark-2), transparent)`,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
