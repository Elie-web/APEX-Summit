import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Globe, Mic2, Layers } from 'lucide-react';

const FACTS = [
  { icon: Calendar, label: '18–19 Septembre 2026',  sub: 'Palais des Congrès, Paris' },
  { icon: Users,    label: '1 200 participants',      sub: 'fondateurs, DG, investisseurs' },
  { icon: Globe,    label: '40+ pays',                sub: 'représentés dans la salle' },
  { icon: Mic2,     label: '6 speakers',              sub: 'triés sur leurs résultats' },
];

const FORMAT = [
  { label: 'Keynotes',        detail: '45 min · scène principale' },
  { label: 'Masterclasses',   detail: '90 min · groupes de 20' },
  { label: 'Investor Rooms',  detail: 'VCs & angels · sur inscription' },
  { label: 'Networking',      detail: 'organisé par secteur' },
  { label: 'Soirée VIP',      detail: 'le 18 septembre au soir' },
];

const sp = { type: 'spring', stiffness: 75, damping: 22 };

export default function Concept() {
  return (
    <section style={{
      background: 'var(--dark)',
      padding: '96px 0',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle orb */}
      <div style={{
        position: 'absolute', top: '30%', left: '40%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>
        <div className="concept-grid">

          {/* LEFT : copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={sp}
          >
            <p className="label" style={{ marginBottom: 20 }}>Le concept</p>
            <h2 style={{
              fontFamily: 'Outfit', fontWeight: 900,
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              color: 'var(--t-light)', lineHeight: 1.06,
              letterSpacing: '-0.03em', maxWidth: '22ch', marginBottom: 32,
            }}>
              Deux jours avec les gens qui pilotent les mêmes défis que vous.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <p style={{ fontSize: 16, color: 'var(--t-dim)', lineHeight: 1.75, fontWeight: 450 }}>
                MERIDIAN, c'est une conférence de deux jours à Paris, chaque septembre. Le format mélange keynotes, masterclasses en petits groupes, sessions avec des VCs et soirée de networking. 1 200 personnes. Des fondateurs, des DG, quelques investisseurs.
              </p>
              <p style={{ fontSize: 16, color: 'var(--t-dim)', lineHeight: 1.75, fontWeight: 450 }}>
                Les speakers ont été sélectionnés sur ce qu'ils ont construit, pas sur leur notoriété. Ils viennent raconter ce qui s'est passé dans leur boîte : les décisions, les chiffres, et les erreurs.
              </p>
              <p style={{ fontSize: 16, color: 'var(--t-dim)', lineHeight: 1.75, fontWeight: 450 }}>
                La plupart des participants repartent avec une décision en tête et deux ou trois contacts qu'ils auraient mis des mois à trouver autrement.
              </p>
            </div>
          </motion.div>

          {/* RIGHT : cards */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...sp, delay: 0.12 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            {/* Facts */}
            <div style={{
              background: 'var(--dark-2)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: 28,
            }}>
              <p className="label-dim" style={{ marginBottom: 20 }}>En bref</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {FACTS.map(({ icon: Icon, label, sub }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 9,
                      background: 'rgba(232,73,36,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Icon size={16} style={{ color: 'var(--red)' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 14, color: 'var(--t-light)' }}>{label}</p>
                      <p style={{ fontSize: 12, color: 'var(--t-muted)', marginTop: 1 }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Format */}
            <div style={{
              background: 'var(--dark-2)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: 28,
            }}>
              <p className="label-dim" style={{ marginBottom: 20 }}>Les formats</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {FORMAT.map((f, i) => (
                  <div key={f.label} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '11px 0',
                    borderBottom: i < FORMAT.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}>
                    <p style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: 'var(--t-light)' }}>{f.label}</p>
                    <p style={{ fontSize: 11, color: 'var(--t-muted)', textAlign: 'right' }}>{f.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
