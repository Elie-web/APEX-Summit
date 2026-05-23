import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/event';
import { Plus, Minus } from 'lucide-react';

function Item({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, delay: index * 0.05 }}
      style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
    >
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 16,
        padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{
          fontFamily: 'Outfit', fontWeight: 700, fontSize: 15,
          color: 'var(--t-dark)', lineHeight: 1.4,
        }}>
          {item.q}
        </span>
        <div style={{
          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
          background: open ? 'var(--red)' : '#E4DFD6',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.22s',
        }}>
          {open ? <Minus size={13} style={{ color: '#fff' }} /> : <Plus size={13} style={{ color: '#888' }} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 30 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ paddingBottom: 20, fontSize: 14, color: 'var(--t-mid)', lineHeight: 1.75, maxWidth: '68ch', paddingRight: 40 }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: 'var(--cream-2)', padding: '100px 0' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ marginBottom: 48 }}
        >
          <p className="label" style={{ color: 'rgba(232,73,36,0.6)', marginBottom: 16 }}>FAQ</p>
          <h2 style={{
            fontFamily: 'Outfit', fontWeight: 900,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
            color: 'var(--t-dark)', lineHeight: 1.06, letterSpacing: '-0.03em',
          }}>
            Tout ce qu'il faut savoir.
          </h2>
        </motion.div>
        <div>{FAQS.map((f, i) => <Item key={i} item={f} index={i} />)}</div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ marginTop: 36, fontSize: 14, color: 'var(--t-low)', textAlign: 'center' }}>
          Une autre question ?{' '}
          <a href="mailto:contact@meridianforum.fr" style={{ color: 'var(--red)', textDecoration: 'none', fontWeight: 600 }}>
            Écrivez-nous
          </a>
        </motion.p>
      </div>
    </section>
  );
}
