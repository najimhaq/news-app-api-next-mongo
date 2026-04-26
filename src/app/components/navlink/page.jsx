'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-lg tracking-tight transition-all duration-200 ${
        isActive
          ? 'font-semibold text-blue-600 border-b-2 border-blue-600 scale-105'
          : 'font-normal text-slate-900 dark:text-white'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

export default Navlink;
