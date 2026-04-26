'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { VscSignIn } from 'react-icons/vsc';
import { RiMenuUnfold2Fill, RiCloseLine } from 'react-icons/ri';
import useActivePath from '@/hook/useActivePath';
import authClient from '@/app/lib/auth-client';
import { ThemeSwitchToggle } from '../themeSwitch/ThemeSwitchToggle';

// ✅ authClient থেকে destructure
const { signOut, useSession } = authClient;

const navLinks = [
  { id: 'home', name: 'Home', path: '/', icon: FaHome },
  { id: 'about', name: 'About', path: '/about', icon: FaHome },
  { id: 'contact', name: 'Contact', path: '/contact', icon: FaHome },
];

const Navbar = () => {
  const isActivePath = useActivePath();
  const [isOpen, setIsOpen] = useState(false);

  // ✅ useSession authClient থেকে
  const { data: session, isPending } = useSession();
  const user = session?.user;

  return (
    <header className='sticky top-0 z-50  backdrop-blur-md dark:border-white/10 dark:bg-slate-950/80'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='text-xl font-extrabold tracking-tight text-slate-900 dark:text-white'
        >
          Logo
        </Link>

        <nav className='hidden items-center gap-2 md:flex'>
          {navLinks.map(({ id, name, path, icon: Icon }) => {
            const active = isActivePath(path);
            return (
              <Link
                key={id}
                href={path}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-indigo-600 text-white shadow-sm dark:bg-indigo-500'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                {Icon && <Icon className='text-sm' />}
                <span>{name}</span>
              </Link>
            );
          })}

          {/* Auth Section */}
          <div className='ml-2 flex items-center gap-1'>
            {isPending ? (
              <div className='inline-flex items-center gap-2 rounded-full px-4 py-2'>
                <div className='h-4 w-4 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700' />
                <div className='h-4 w-20 animate-pulse rounded bg-slate-300 dark:bg-slate-700' />
              </div>
            ) : user ? (
              <div className='flex items-center gap-1'>
                <span className='inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300'>
                  <FaUser className='text-sm' />
                  {user.name || user.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className='inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  title='Sign Out'
                >
                  <FaSignOutAlt className='text-sm' />
                </button>
              </div>
            ) : (
              <Link
                href='/signin'
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActivePath('/auth/signin')
                    ? 'bg-indigo-600 text-white shadow-sm dark:bg-indigo-500'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                <VscSignIn className='text-sm' />
                Sign In
              </Link>
            )}
          </div>

          <div className='ml-6'>
            <ThemeSwitchToggle />
          </div>
        </nav>

        {/* Mobile */}
        <div className='flex items-center gap-2 md:hidden'>
          <ThemeSwitchToggle />
          <button
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            className='inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
          >
            {isOpen ? (
              <RiCloseLine className='text-2xl' />
            ) : (
              <RiMenuUnfold2Fill className='text-2xl' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className='border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-950/95'>
          <div className='flex flex-col gap-2'>
            {navLinks.map(({ id, name, path, icon: Icon }) => {
              const active = isActivePath(path);
              return (
                <Link
                  key={`mobile-${id}`}
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  {Icon && <Icon className='text-base' />}
                  <span>{name}</span>
                </Link>
              );
            })}

            {/* Mobile Auth */}
            {isPending ? (
              <div className='flex items-center gap-3 rounded-2xl px-4 py-3'>
                <div className='h-5 w-5 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700' />
                <div className='h-4 w-24 animate-pulse rounded bg-slate-300 dark:bg-slate-700' />
              </div>
            ) : user ? (
              <>
                <div className='flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300'>
                  <FaUser className='text-base' />
                  {user.name || user.email}
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className='flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30'
                >
                  <FaSignOutAlt className='text-base' />
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href='/auth/signin'
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                  isActivePath('/auth/signin')
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                <VscSignIn className='text-base' />
                Sign In
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
