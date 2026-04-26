'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import authClient from '@/app/lib/auth-client';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    const formdata = new FormData(e.target);
    const userData = Object.fromEntries(formdata.entries());
    console.log('userdata is', userData);
    try {
      const result = await authClient.signIn.email(
        {
          email: userData.email,
          password: userData.password,
          rememberMe: true,
        },
        {
          onSuccess: () => {
            toast.success('Account login Successsfully');
            setTimeout(() => {
              router.push('/components/dashboard/');
            }, 1500);
          },
        }
      );

      if (result.error) {
        setError(result.error.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0f] px-4 py-12'>
      {/* Background blobs */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]' />
        <div className='absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]' />
        <div className='absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px]' />
      </div>

      {/* Main card */}
      <div className='relative w-full max-w-md'>
        <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600/50 via-blue-600/50 to-violet-600/50 opacity-50 blur-sm' />

        <div className='relative rounded-2xl border border-white/10 bg-[#13131f]/95 p-8 shadow-2xl backdrop-blur-xl sm:p-10'>
          {/* Header */}
          <div className='mb-8 text-center'>
            <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Welcome Back
            </h1>
            <p className='mt-2 text-sm text-slate-400'>
              Sign in to your account to continue
            </p>
            <div className='mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent' />
          </div>

          {/* Error message */}
          {error && (
            <div className='mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400'>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            {/* Email Field */}
            <div>
              <label className='mb-1.5 block text-xs font-semibold uppercase tracking-wider text-violet-400'>
                Email Address
              </label>
              <div className='relative'>
                <FiMail className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500' />
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='john@example.com'
                  className='w-full rounded-xl border border-white/10 bg-[#1a1a2e] py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20'
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className='mb-1.5 flex items-center justify-between'>
                <label className='text-xs font-semibold uppercase tracking-wider text-violet-400'>
                  Password
                </label>
                <Link
                  href='/forgot-password'
                  className='text-xs text-slate-500 transition hover:text-violet-400'
                >
                  Forgot password?
                </Link>
              </div>
              <div className='relative'>
                <FiLock className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  required
                  placeholder='Enter your password'
                  className='w-full rounded-xl border border-white/10 bg-[#1a1a2e] py-3 pl-10 pr-10 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-300'
                >
                  {showPassword ? (
                    <FiEyeOff className='h-4 w-4' />
                  ) : (
                    <FiEye className='h-4 w-4' />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me checkbox */}
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                name='remember'
                id='remember'
                className='h-4 w-4 rounded border-white/10 bg-[#1a1a2e] text-violet-600 focus:ring-violet-500/20'
              />
              <label htmlFor='remember' className='text-sm text-slate-400'>
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={isLoading}
              className='mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-blue-500 hover:shadow-violet-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50'
            >
              {isLoading ? (
                <BeatLoader size={10} color='#ffffff' />
              ) : (
                <>
                  Sign In
                  <FiArrowRight className='h-4 w-4' />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className='my-6 flex items-center gap-3'>
            <div className='h-px flex-1 bg-white/10' />
            <span className='text-xs text-slate-500'>or continue with</span>
            <div className='h-px flex-1 bg-white/10' />
          </div>

          {/* Footer */}
          <p className='mt-6 text-center text-xs text-slate-500'>
            Don&apos;t have an account?{' '}
            <Link
              href='/signup'
              className='text-violet-400 transition hover:text-violet-300'
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
