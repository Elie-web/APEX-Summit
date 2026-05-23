import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRICING } from '../data/event';
import { Check, ArrowRight, Zap } from 'lucide-react';

export default function Pricing() {
  const [hov, setHov] = useState(null);

  return (
    <section id="pricing" style={{ background: 'var(--cream)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 28px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ marginBottom: 40 }}
        >
          <p className="label" style={{ color: 'rgba(232,73,36,0.6)', marginBottom: 16 }}>Tarifs</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h2 style={{
              fontFamily: 'Outfit', fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              color: 'var(--t-dark)', lineHeight: 1.06, letterSpacing: '-0.03em',
            }}>
              Choisissez votre<br />investissement.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--t-mid)', maxWidth: '42ch', lineHeight: 1.75, fontWeight: 450 }}>
              En moyenne, nos participants mesurent un retour de 11.8× dans les 6 mois suivant l'événement.
            </p>
          </div>
        </motion.div>

        {/* Urgency */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 16px',
            background: 'rgba(232,73,36,0.07)',
            border: '1px solid rgba(232,73,36,0.18)',
            borderRadius: 100, fontSize: 13, fontWeight: 600, color: 'var(--red)',
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red)', animation: 'pulse-dot 1.6s infinite' }} />
            23 places Early Bird restantes · tarif valable jusqu'au 30 juin 2026
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gap: 18, alignItems: 'start' }}
          className="grid grid-cols-1 md:grid-cols-3">
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: i * 0.1 }}
              onMouseEnter={() => setHov(plan.id)}
              onMouseLeave={() => setHov(null)}
              style={{
                position: 'relative',
                background: plan.highlight ? '#100F0C' : '#fff',
                border: plan.highlight
                  ? '2px solid #1E1C18'
                  : `2px solid ${hov === plan.id ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.07)'}`,
                borderRadius: 22,
                padding: 32,
                display: 'flex', flexDirection: 'column',
                transform: plan.highlight ? 'translateY(-6px)' : hov === plan.id ? 'translateY(-4px)' : 'none',
                boxShadow: plan.highlight
                  ? '0 32px 64px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.04)'
                  : hov === plan.id ? '0 16px 40px rgba(0,0,0,0.09)' : '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div style={{
                  position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                  padding: '4px 14px', borderRadius: 100,
                  fontFamily: 'Outfit', fontWeight: 800, fontSize: 10,
                  letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  background: plan.highlight ? 'var(--red)' : '#E4DFD6',
                  color: plan.highlight ? '#fff' : '#7C7470',
                }}>
                  {plan.badge}
                </div>
              )}

              {/* Name */}
              <p style={{
                fontFamily: 'Outfit', fontSize: 11, fontWeight: 800,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: plan.highlight ? 'rgba(255,255,255,0.4)' : '#BAB4AE',
                marginBottom: 18,
              }}>
                {plan.name}
              </p>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 6 }}>
                <span style={{
                  fontFamily: 'Outfit', fontWeight: 900, fontSize: 52, lineHeight: 1,
                  color: plan.highlight ? '#fff' : 'var(--t-dark)',
                  letterSpacing: '-0.04em',
                }}>
                  €{plan.price.toLocaleString('fr-FR')}
                </span>
                {plan.oldPrice && (
                  <span style={{
                    fontSize: 20, marginBottom: 7,
                    color: plan.highlight ? 'rgba(255,255,255,0.25)' : '#C0B8B0',
                    textDecoration: 'line-through',
                  }}>
                    €{plan.oldPrice.toLocaleString('fr-FR')}
                  </span>
                )}
              </div>
              {plan.oldPrice && (
                <div style={{ marginBottom: 16 }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    padding: '3px 10px', borderRadius: 100, fontSize: 12, fontWeight: 700,
                    fontFamily: 'Outfit',
                    background: plan.highlight ? 'rgba(245,165,0,0.18)' : 'rgba(232,73,36,0.07)',
                    color: plan.highlight ? 'var(--amber)' : 'var(--red)',
                  }}>
                    <Zap size={11} />
                    −€{(plan.oldPrice - plan.price).toLocaleString('fr-FR')}
                  </span>
                </div>
              )}

              <p style={{
                fontSize: 14, lineHeight: 1.7, marginBottom: 24,
                color: plan.highlight ? 'rgba(255,255,255,0.78)' : 'var(--t-mid)',
              }}>
                {plan.description}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: plan.highlight ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)', marginBottom: 20 }} />

              {/* Features */}
              <ul style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 28 }}>
                {plan.features.map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                      background: plan.highlight ? 'rgba(255,255,255,0.1)' : 'rgba(232,73,36,0.09)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Check size={10} style={{ color: plan.highlight ? 'rgba(255,255,255,0.7)' : 'var(--red)' }} />
                    </div>
                    <span style={{
                      fontSize: 13, lineHeight: 1.5,
                      color: plan.highlight ? 'rgba(255,255,255,0.85)' : 'var(--t-mid)',
                    }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.highlight ? (
                <a href="mailto:vip@meridianforum.fr" className="btn btn-red" style={{ justifyContent: 'center', padding: '14px 24px' }}>
                  {plan.cta} <ArrowRight size={15} />
                </a>
              ) : plan.id === 'enterprise' ? (
                <a href="mailto:enterprise@meridianforum.fr" className="btn btn-outline-dark" style={{ justifyContent: 'center', padding: '14px 24px' }}>
                  {plan.cta} <ArrowRight size={15} />
                </a>
              ) : (
                <a href="mailto:tickets@meridianforum.fr" className="btn btn-outline-dark" style={{ justifyContent: 'center', padding: '14px 24px' }}>
                  {plan.cta} <ArrowRight size={15} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 36 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            padding: '14px 24px', borderRadius: 14,
            background: '#fff', border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}>
            <span style={{ fontSize: 22 }}>🛡️</span>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 13, color: 'var(--t-dark)' }}>
                Remboursement intégral jusqu'à 30 jours avant l'événement
              </p>
              <p style={{ fontSize: 12, color: 'var(--t-low)' }}>Aucun risque. Si vous ne pouvez pas venir, vous récupérez tout.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
