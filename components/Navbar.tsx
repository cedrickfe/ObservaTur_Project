'use client';

export const Navbar = ({ onToggle }: { onToggle?: () => void }) => {
  return (
    <header style={{ height: 64, borderBottom: '1px solid var(--color-border)', padding: '0 var(--space-4)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'white', zIndex: 30 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <button onClick={onToggle} style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: '0.35rem 0.55rem', background: '#fff', display: 'inline-flex' }}>☰</button>
        <strong>ObservaTur</strong>
      </div>
      <small style={{ color: 'var(--color-text-muted)' }}>Inteligência Turística Municipal</small>
    </header>
  );
};
