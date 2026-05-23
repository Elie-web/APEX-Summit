import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY } from '../data/event';
import { X, ZoomIn } from 'lucide-react';

function GalleryImage({ item, delay, tall }) {
  const [hov, setHov] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ type: 'spring', stiffness: 70, damping: 20, delay }}
        data-cursor="image"
        data-cursor-label="VOIR"
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          position: 'relative',
          height: tall ? 440 : 260,
          borderRadius: 16,
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {/* Photo */}
        <motion.img
          src={item.photo}
          alt={item.label}
          loading="lazy"
          animate={{ scale: hov ? 1.06 : 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 30 }}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block',
          }}
        />

        {/* Permanent bottom gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(8,9,15,0.75) 0%, rgba(8,9,15,0.1) 50%, transparent 100%)',
        }} />

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hov ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(8,9,15,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ZoomIn size={20} style={{ color: '#fff' }} />
          </div>
        </motion.div>

        {/* Label */}
        <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
          <span style={{
            fontFamily: 'Outfit', fontWeight: 600, fontSize: 13,
            color: 'rgba(255,255,255,0.9)',
          }}>
            {item.label}
          </span>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(5,5,9,0.9)', backdropFilter: 'blur(20px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 28 }}
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: 900, width: '100%', borderRadius: 20, overflow: 'hidden' }}
            >
              <img src={item.photo.replace('w=700', 'w=1200').replace('w=900', 'w=1200')} alt={item.label}
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '80vh', objectFit: 'cover' }} />
              <button onClick={() => setOpen(false)} style={{
                position: 'absolute', top: 16, right: 16,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', cursor: 'pointer',
              }}>
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Gallery() {
  return (
    <section style={{ background: 'var(--dark)', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, marginBottom: 48 }}
        >
          <div>
            <p className="label" style={{ marginBottom: 16 }}>L'atmosphère MERIDIAN</p>
            <h2 style={{
              fontFamily: 'Outfit', fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              color: 'var(--t-light)', lineHeight: 1.06, letterSpacing: '-0.03em',
            }}>
              Ce que ça ressemble,<br />de l'intérieur.
            </h2>
          </div>
          <p style={{ fontSize: 15, color: 'var(--t-dim)', maxWidth: '40ch', lineHeight: 1.75, fontWeight: 450 }}>
            3 éditions, 3 600 participants. Voici comment ça se passe.
          </p>
        </motion.div>

        {/* Row 1 · 2 images, asymmetric */}
        <div className="g-asym" style={{ gap: 14, marginBottom: 14 }}>
          <GalleryImage item={GALLERY[0]} delay={0}    tall />
          <GalleryImage item={GALLERY[1]} delay={0.08} tall />
        </div>

        {/* Row 2 · 4 images, equal */}
        <div style={{ display: 'grid', gap: 14 }}
          className="grid grid-cols-2 md:grid-cols-4">
          {GALLERY.slice(2).map((item, i) => (
            <GalleryImage key={i} item={item} delay={i * 0.07} tall={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
