import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import Countdown from './Countdown';
import MagneticBtn from './MagneticBtn';
import { EVENT, SPEAKERS } from '../data/event';

const sp = { type: 'spring', stiffness: 80, damping: 22 };
const up = (d = 0) => ({ initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 }, transition: { ...sp, delay: d } });
const COLS = ['#E84924','#3B82F6','#10B981','#F5A500','#EC4899','#8B5CF6'];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const overlayO = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.82]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100dvh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 64,
      }}
    >
      {/* ── Parallax background image ── */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          y: imgY,
          backgroundImage: `url(${EVENT.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />

      {/* ── Dark overlay ── */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          background: 'var(--dark)',
          opacity: overlayO,
        }}
      />

      {/* ── Dot grid ── */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* ── Subtle red glow top-right ── */}
      <div style={{
        position: 'absolute', top: '-5%', right: '0',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,73,36,0.12) 0%, transparent 68%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* ── Large year watermark ── */}
      <div style={{
        position: 'absolute', right: '-1%', bottom: '5%',
        fontFamily: 'Outfit', fontWeight: 900,
        fontSize: 'clamp(8rem, 20vw, 20rem)',
        color: 'rgba(255,255,255,0.03)',
        lineHeight: 1, letterSpacing: '-0.05em',
        userSelect: 'none', pointerEvents: 'none',
      }}>
        2026
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 28px 80px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="g-hero" style={{ gap: 60, alignItems: 'center' }}>

          {/* LEFT */}
          <div>
            {/* Badge */}
            <motion.div {...up(0.06)} style={{ marginBottom: 24 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px 6px 8px',
                border: '1px solid rgba(232,73,36,0.35)',
                borderRadius: 100,
                background: 'rgba(232,73,36,0.09)',
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: 'rgba(232,73,36,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red)', animation: 'pulse-dot 1.6s ease-in-out infinite' }} />
                </div>
                <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF7A5A' }}>
                  3ème édition · 18–19 Septembre 2026 · Paris
                </span>
              </div>
            </motion.div>

            {/* Headline : dit CE QUE C'EST, clairement */}
            <motion.h1
              className="display"
              {...up(0.12)}
              style={{
                fontSize: 'clamp(2.8rem, 6.5vw, 6.8rem)',
                color: 'var(--t-light)',
                marginBottom: 24,
                maxWidth: '14ch',
                lineHeight: 1.04,
              }}
            >
              IA, Scale &{' '}
              <span style={{ color: 'var(--red)' }}>Fundraising</span>
              <br />pour les dirigeants tech.
            </motion.h1>

            {/* Sub : ancrage catégorie style UNBOUND + urgence style TED */}
            <motion.p {...up(0.18)} className="prose" style={{ fontSize: 16, color: 'rgba(235,231,223,0.80)', marginBottom: 32, maxWidth: '46ch', lineHeight: 1.7 }}>
              L'IA, le scale, le fundraising : ça bouge trop vite pour rester seul dans son coin. MERIDIAN, c'est deux jours par an pour en parler avec les gens qui gèrent les mêmes choses.
            </motion.p>

            {/* Meta chips */}
            <motion.div {...up(0.23)} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
              {[
                { icon: Calendar, text: '18–19 Septembre 2026' },
                { icon: MapPin,   text: 'Palais des Congrès, Paris' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '7px 14px',
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, fontSize: 13, color: 'rgba(235,231,223,0.75)',
                }}>
                  <Icon size={13} style={{ color: 'var(--red)', flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...up(0.28)} style={{ marginBottom: 52 }}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 12 }}>
                <MagneticBtn href="#pricing">
                  <span className="btn btn-red" style={{ padding: '15px 32px', fontSize: '15px' }}>
                    Réserver ma place
                    <ArrowRight size={17} />
                  </span>
                </MagneticBtn>
                <MagneticBtn href="#speakers">
                  <span className="btn btn-ghost-light" style={{ padding: '15px 28px', fontSize: '15px' }}>
                    Voir les speakers
                  </span>
                </MagneticBtn>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(235,231,223,0.45)', fontWeight: 500 }}>
                À partir de <strong style={{ color: 'rgba(235,231,223,0.75)' }}>€497</strong> · Early Bird jusqu'au 30 juin · Places limitées
              </p>
            </motion.div>

            {/* Countdown */}
            <motion.div {...up(0.34)}>
              <p className="label-dim" style={{ marginBottom: 12 }}>Les portes ouvrent dans</p>
              <Countdown />
            </motion.div>
          </div>

          {/* RIGHT : Speaker card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 22, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div style={{
              background: 'rgba(14,15,24,0.75)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 22,
              padding: 24,
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <p className="label-dim">6 Speakers confirmés</p>
                <div style={{
                  padding: '4px 10px', borderRadius: 100,
                  background: 'rgba(245,165,0,0.12)',
                  border: '1px solid rgba(245,165,0,0.2)',
                  fontSize: 11, fontWeight: 700, color: 'var(--amber)', fontFamily: 'Outfit',
                }}>
                  Sept. 2026
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {SPEAKERS.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.45 + i * 0.07 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '8px 10px',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: 10,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                      overflow: 'hidden',
                      border: `1.5px solid ${COLS[i]}40`,
                    }}>
                      <img
                        src={s.photo}
                        alt={s.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                        loading="lazy"
                      />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 12, color: 'var(--t-light)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {s.name}
                      </p>
                      <p style={{ fontSize: 10, color: 'var(--t-dim)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {s.company}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {[['23', 'Places restantes'], ['€497', 'À partir de']].map(([v, l]) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <p style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 22, color: 'var(--t-light)', letterSpacing: '-0.02em' }}>{v}</p>
                    <p style={{ fontSize: 10, color: 'var(--t-muted)', marginTop: 2 }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          zIndex: 2,
        }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ChevronDown size={18} style={{ color: 'rgba(255,255,255,0.3)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
