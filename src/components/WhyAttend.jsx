import { motion } from 'framer-motion';
import { Zap, Globe, Award } from 'lucide-react';

const REASONS = [
  {
    stat: "94%",
    keyword: "en action",
    detail: "dès la semaine suivante",
    title: "Des décisions prises en salle",
    color: '#E8551A',
  },
  {
    stat: "3.2",
    keyword: "connexions",
    detail: "à fort impact, par participant",
    title: "Des connexions qui durent",
    color: '#3B82F6',
  },
  {
    stat: "11.8×",
    keyword: "de ROI",
    detail: "mesuré dans les 6 mois suivants",
    title: "Un investissement qui se mesure",
    color: '#10B981',
  },
];

const SMALL = [
  { icon: Zap,   color: '#F59F00', title: "Speakers terrain",    desc: "Ils ont fait, et viennent raconter ce qui s'est vraiment passé." },
  { icon: Globe, color: '#EC4899', title: "40+ pays",             desc: "La personne dont vous avez besoin est probablement dans la salle." },
  { icon: Award, color: '#8B5CF6', title: "Palais des Congrès",   desc: "Un cadre à la hauteur du contenu." },
];

export default function WhyAttend() {
  return (
    <section style={{ background: 'var(--dark)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ marginBottom: 56 }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--t-light)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '18ch',
            }}>
              Ce que vous ramenez de deux jours à Paris.
            </h2>
            <p style={{ fontSize: 14, color: 'var(--t-dim)', maxWidth: '44ch', lineHeight: 1.7, fontWeight: 450 }}>
              Les gens qui avancent vite ont un truc en commun : ils ne le font pas seuls.
              Ils se retrouvent dans les mêmes salles, et partagent ce qu'ils ont vraiment appris.
              Pas ce qu'ils publient sur LinkedIn.
            </p>
          </div>
        </motion.div>

        {/* 3 stat cards, stat first */}
        <div style={{ display: 'grid', gap: 16, marginBottom: 16 }}
          className="grid grid-cols-1 md:grid-cols-3">
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: i * 0.1 }}
              style={{
                background: 'var(--dark-2)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 18,
                padding: '28px 28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              {/* Stat hero */}
              <p style={{
                fontFamily: 'Outfit', fontWeight: 900,
                fontSize: 'clamp(3rem, 5vw, 4.2rem)',
                color: r.color,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                marginBottom: 4,
              }}>
                {r.stat}
              </p>
              <p style={{
                fontFamily: 'Outfit', fontWeight: 800,
                fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
                color: 'var(--t-light)', letterSpacing: '-0.01em', marginBottom: 4,
              }}>
                {r.keyword}
              </p>
              <p style={{ fontSize: 12, color: 'var(--t-muted)', lineHeight: 1.4, marginBottom: 20 }}>
                {r.detail}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 18 }} />

              {/* Title */}
              <p style={{
                fontFamily: 'Outfit', fontWeight: 700,
                fontSize: 15,
                color: 'var(--t-light)',
                lineHeight: 1.3,
              }}>
                {r.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3 small cards */}
        <div style={{ display: 'grid', gap: 16 }}
          className="grid grid-cols-1 md:grid-cols-3">
          {SMALL.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, delay: i * 0.08 }}
                style={{
                  background: 'var(--dark-2)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: `${r.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={15} style={{ color: r.color }} />
                </div>
                <div>
                  <p style={{
                    fontFamily: 'Outfit', fontWeight: 700, fontSize: 13,
                    color: 'var(--t-light)', marginBottom: 2,
                  }}>
                    {r.title}
                  </p>
                  <p style={{ fontSize: 12, color: 'var(--t-dim)', lineHeight: 1.5 }}>{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
