import { ReactNode } from 'react';
import { Card } from '@/components/ui';

export const ChartCard = ({ title, children }: { title: string; children: ReactNode }) => (
  <Card>
    <h3 style={{ marginTop: 0 }}>{title}</h3>
    {children}
  </Card>
);
