import { EVENT } from '../data/event';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark-2)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '36px 28px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="26" height="26" viewBox="0 0 30 30" fill="none" style={{ flexShrink: 0 }}>
            <polygon points="15,3 28,26 2,26" fill="none" stroke="var(--red)" strokeWidth="2.2" strokeLinejoin="round"/>
            <line x1="9" y1="19" x2="21" y2="19" stroke="var(--red)" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          <div>
            <p style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--t-light)', lineHeight: 1.2 }}>
              MERIDIAN
            </p>
            <p style={{ fontSize: 9, fontWeight: 400, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--t-muted)', lineHeight: 1 }}>
              FORUM · {EVENT.date}
            </p>
          </div>
        </a>

        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {[['#speakers','Speakers'],['#agenda','Programme'],['#pricing','Tarifs'],['#faq','FAQ'],['mailto:contact@meridianforum.fr','Contact']].map(([h,l]) => (
            <a key={h} href={h} style={{ fontSize: 13, color: 'var(--t-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--t-light)'}
              onMouseLeave={e => e.target.style.color = 'var(--t-muted)'}>
              {l}
            </a>
          ))}
        </div>

        <p style={{ fontSize: 12, color: 'var(--t-muted)' }}>© 2026 Meridian Forum</p>
      </div>
    </footer>
  );
}
