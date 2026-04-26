'use client';

import Link from 'next/link';
import Image from 'next/image';
import notFoundImg from '@/assets/error.png';
import { useEffect, useState } from 'react';
import { RiArrowLeftLine, RiHome5Line, RiContactsLine } from 'react-icons/ri';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center bg-linear-to-r from-violet-600/50 via-blue-600/50 to-violet-600/50 px-6 py-12 text-white overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.25),transparent_40%)]' />
      </div>

      {/* Card */}
      <div
        className={`relative flex w-full max-w-5xl flex-col items-center gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-md sm:flex-row sm:text-left transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Illustration */}
        <div
          className={`w-full max-w-70 shrink-0 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Image
            src={notFoundImg}
            alt='404 not found illustration'
            width={300}
            height={300}
            priority
            className='h-auto w-full object-contain drop-shadow-lg'
          />
        </div>

        {/* Text & Actions */}
        <div
          className={`flex flex-col items-center sm:items-start transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <p className='text-sm font-semibold uppercase tracking-widest text-green-400'>
            Error 404
          </p>

          <h1 className='mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl'>
            Page Not Found
          </h1>

          <p className='mt-4 max-w-md text-base text-white/70'>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been removed, renamed, or the link might be broken.
          </p>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 rounded-lg bg-green-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-green-300 hover:shadow-lg'
            >
              <RiHome5Line size={18} />
              Go Home
            </Link>


          </div>

          <div className='mt-6 flex items-center gap-2 text-sm text-white/50'>
            <RiArrowLeftLine size={18} />
            <span>Check the URL or return to a safe page.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
