import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className='flex items-center justify-end gap-6 mb-6'>
      <Link href='/' className='hover:underline underline-offset-2'>
        home
      </Link>
      <Link href='/projects' className='hover:underline underline-offset-2'>
        projects
      </Link>
      <Link href='/blog' className='hover:underline underline-offset-2'>
        blog
      </Link>
    </header>
  );
};

export default Navbar;
