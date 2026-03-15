'use client';

import { useState } from 'react';

export const useMobileMenu = () => {
  const [open, setOpen] = useState(false);
  return { open, setOpen, toggle: () => setOpen((prev) => !prev) };
};
