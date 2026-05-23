import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { EVENT } from '../data/event';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <section
      className="dot-grid"
      style={{
        background: 'var(--dark)',
        padding: '120px 0',
        position: 'relative', overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Central orb */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,73,36,0.07) 0%, transparent 62%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 28px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 75, damping: 22 }}
        >
          <p className="label" style={{ marginBottom: 28 }}>18–19 Septembre 2026 · Paris</p>
          <h2 className="display" style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)',
            color: 'var(--t-light)',
            marginBottom: 24,
          }}>
            Votre place est<br />
            <span style={{ color: 'var(--red)' }}>encore disponible.</span>
          </h2>
          <p style={{
            fontSize: 18, color: 'var(--t-dim)',
            lineHeight: 1.65, maxWidth: '48ch', margin: '0 auto 48px',
          }}>
            1 200 fondateurs et dirigeants. Paris, 18 septembre.
            Les conversations sur le scale, le fundraising et l'IA
            qui vont changer votre année. Elles se passent là.
            Il reste des places.
          </p>

          {/* Primary CTA */}
          <a href="mailto:tickets@meridianforum.fr" className="btn btn-red" style={{ padding: '17px 40px', fontSize: '16px' }}>
            Je réserve ma place maintenant
            <ArrowRight size={18} />
          </a>

          {/* Trust signals */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 24, marginTop: 28, marginBottom: 60 }}>
            {[
              `📅 ${EVENT.date}`,
              `📍 ${EVENT.location}`,
              '🛡️ Remboursement J−30',
            ].map(s => (
              <span key={s} style={{ fontSize: 13, color: 'var(--t-muted)', fontWeight: 500 }}>{s}</span>
            ))}
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
            <span style={{ fontSize: 12, color: 'var(--t-muted)', whiteSpace: 'nowrap' }}>Vous voulez d'abord voir le programme ?</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
          </div>

          {/* Secondary : lead capture */}
          {!sent ? (
            <form onSubmit={handleWaitlist} style={{ display: 'flex', gap: 8, maxWidth: 440, margin: '0 auto' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10, padding: '0 16px' }}>
                <Mail size={14} style={{ color: 'var(--t-muted)', flexShrink: 0 }} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  style={{
                    flex: 1, background: 'none', border: 'none', outline: 'none',
                    color: 'var(--t-light)', fontSize: 14, fontFamily: 'Plus Jakarta Sans',
                    padding: '12px 0',
                  }}
                />
              </div>
              <button type="submit" className="btn btn-ghost-light" style={{ padding: '12px 20px', fontSize: 13, flexShrink: 0 }}>
                Recevoir le programme
              </button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: 14, color: '#10B981', fontWeight: 600 }}
            >
              ✓ Programme envoyé. Vérifiez votre boîte mail.
            </motion.p>
          )}
          <p style={{ fontSize: 12, color: 'var(--t-muted)', marginTop: 10 }}>
            Programme complet + détails speakers + offres exclusives. Sans spam.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
