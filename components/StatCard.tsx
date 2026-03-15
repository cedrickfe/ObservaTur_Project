import { Card } from '@/components/ui';

export const StatCard = ({ label, value, change }: { label: string; value: string; change?: string }) => (
  <Card>
    <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>{label}</p>
    <h3 style={{ margin: 'var(--space-2) 0', fontSize: 'var(--font-size-xl)' }}>{value}</h3>
    {change && <p style={{ margin: 0, color: 'var(--color-primary)', fontSize: 'var(--font-size-sm)' }}>{change}</p>}
  </Card>
);
