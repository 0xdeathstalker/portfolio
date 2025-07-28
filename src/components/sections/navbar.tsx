'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';
import { cn } from '@/lib/utils';

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
  const router = useRouter();

  const handleKeyPress = React.useCallback(
    (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        event.target instanceof HTMLInputElement
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case 'h':
          router.push('/');
          break;
        case 'p':
          router.push('/');
          break;
        case 'w':
          router.push('/work');
          break;
        case 'b':
          router.push('/blogs');
          break;
      }
    },
    [router]
  );

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="inline-flex items-center gap-5 sticky top-3 py-2 px-6 border border-dashed backdrop-blur-xl">
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
        'text-sm hover:text-foreground transition-colors ease-in-out',
        active ? 'text-foreground' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  );
}
