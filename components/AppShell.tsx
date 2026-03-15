'use client';

import { ReactNode, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

export const AppShell = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="main-layout">
      <div className="desktop-sidebar"><Sidebar open={false} /></div>
      {open && <div className="mobile-sidebar"><Sidebar open={true} /></div>}
      <div className="content-wrap">
        <Navbar onToggle={() => setOpen((v) => !v)} />
        <main className="page-content">{children}</main>
      </div>
      <style jsx>{`
        .desktop-sidebar { display: none; }
        .mobile-sidebar { display: block; }
        @media (min-width: 901px) {
          .desktop-sidebar { display: block; }
          .mobile-sidebar { display: none; }
        }
      `}</style>
    </div>
  );
};
