'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { label: 'Visão Geral', href: '/' },
  { label: 'Inventário Turístico', href: '/inventario' },
  { label: 'Mapa Turístico', href: '/mapa' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Coleta de Dados', href: '/coleta' },
  { label: 'Relatórios', href: '/relatorios' }
];

export const Sidebar = ({ open }: { open: boolean }) => {
  const pathname = usePathname();
  return (
    <aside style={{ width: 240, borderRight: '1px solid var(--color-border)', padding: 'var(--space-4)', background: 'white', position: open ? 'fixed' : 'sticky', left: 0, top: open ? 64 : 0, bottom: 0, transform: open ? 'translateX(0)' : undefined, zIndex: 20 }}>
      <nav style={{ display: 'grid', gap: 'var(--space-2)' }}>
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.65rem 0.75rem', background: active ? 'var(--color-hover)' : 'white', fontSize: 'var(--font-size-sm)' }}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
