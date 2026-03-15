import { ChangeEventHandler, ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
);

export const Card = ({ children }: { children: ReactNode }) => (
  <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', background: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)' }}>{children}</div>
);

export const SectionHeader = ({ title, description }: { title: string; description?: string }) => (
  <div style={{ marginBottom: 'var(--space-4)' }}>
    <h2 style={{ margin: 0, fontSize: 'var(--font-size-xl)' }}>{title}</h2>
    {description && <p style={{ margin: 'var(--space-2) 0 0', color: 'var(--color-text-muted)' }}>{description}</p>}
  </div>
);

export const Button = ({ children }: { children: ReactNode }) => (
  <button style={{ border: '1px solid var(--color-border-strong)', borderRadius: 'var(--radius-md)', background: 'white', padding: '0.55rem 0.9rem', cursor: 'pointer' }}>{children}</button>
);

export const Input = ({ placeholder, value, onChange }: { placeholder: string; value?: string; onChange?: ChangeEventHandler<HTMLInputElement> }) => (
  <input value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.6rem 0.75rem' }} />
);

export const Select = ({ options, value, onChange }: { options: string[]; value?: string; onChange?: ChangeEventHandler<HTMLSelectElement> }) => (
  <select value={value} onChange={onChange} style={{ width: '100%', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.6rem 0.75rem', background: '#fff' }}>
    {options.map((option) => <option key={option}>{option}</option>)}
  </select>
);

export const Badge = ({ children }: { children: ReactNode }) => (
  <span style={{ display: 'inline-block', border: '1px solid var(--color-border)', borderRadius: '999px', padding: '0.2rem 0.55rem', fontSize: 'var(--font-size-xs)', background: 'var(--color-surface-muted)' }}>{children}</span>
);
