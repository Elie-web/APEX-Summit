import { useState, useEffect } from 'react';
import { EVENT } from '../data/event';

function pad(n) { return String(n).padStart(2, '0'); }

function getTimeLeft() {
  const diff = EVENT.targetDate - new Date();
  if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' };
  return {
    days:    pad(Math.floor(diff / 86400000)),
    hours:   pad(Math.floor((diff / 3600000) % 24)),
    minutes: pad(Math.floor((diff / 60000) % 60)),
    seconds: pad(Math.floor((diff / 1000) % 60)),
  };
}

function Unit({ value, label, dark = true }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        padding: '10px 16px',
        background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
        border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
        borderRadius: 10,
        minWidth: 56,
      }}>
        <span style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 800,
          fontSize: 26,
          fontVariantNumeric: 'tabular-nums',
          lineHeight: 1,
          color: dark ? 'var(--t-light)' : 'var(--t-dark)',
        }}>
          {value}
        </span>
      </div>
      <span style={{
        display: 'block',
        marginTop: 5,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: dark ? 'var(--t-dim)' : '#888',
      }}>
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ dark = true }) {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const sep = (
    <span style={{
      fontSize: 22,
      fontWeight: 300,
      color: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
      paddingBottom: 18,
    }}>:</span>
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Unit value={time.days} label="Jours" dark={dark} />
      {sep}
      <Unit value={time.hours} label="Heures" dark={dark} />
      {sep}
      <Unit value={time.minutes} label="Min" dark={dark} />
      {sep}
      <Unit value={time.seconds} label="Sec" dark={dark} />
    </div>
  );
}
