'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import type * as React from 'react';

const navbarConfig = [
  {
    title: 'projects',
    path: '/',
  },
  {
    title: 'work',
    path: '/work',
  },
  {
    title: 'blogs',
    path: '/blogs',
  },
];

export default function Navbar() {
  return (
    <div className="inline-flex items-center gap-5">
      {navbarConfig.map((item, index) => (
        <NavbarItem key={`${item.title}-${index}`} url={item.path}>
          [{item.title.slice(0, 1)}] {item.title}
        </NavbarItem>
      ))}
    </div>
  );
}

interface NavbarItemProps {
  children: React.ReactNode;
  url: string;
}

function NavbarItem({ children, url }: NavbarItemProps) {
  const pathname = usePathname();
  const active = pathname === url;

  return (
    <Link
      href={url}
      className={cn(
        'text-sm',
        active ? 'text-foreground' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  );
}
