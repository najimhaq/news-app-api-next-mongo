'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check } from '@gravity-ui/icons';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { toast } from 'react-toastify';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import  authClient  from '@/app/lib/auth-client';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signUp.email(
        {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          callbackURL: '/auth/signin',
        },
        {
          onSuccess: () => {
            toast.success('Account created successfully!');
            setTimeout(() => {
              router.push('/auth/signin');
            }, 1500);
          },
          onError: (ctx) => {
            toast.error(ctx?.error?.message || 'Signup failed');
          },
        }
      );

      if (error) {
        toast.error(error?.message || 'Something went wrong');
      } else {
        console.log('Signup success:', data);
      }
    } catch (err) {
      toast.error('Unexpected error occurred');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0f] px-4 py-12'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]' />
        <div className='absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]' />
        <div className='absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px]' />
      </div>

      <div className='relative w-full max-w-md'>
        <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600/50 via-blue-600/50 to-violet-600/50 opacity-50 blur-sm' />

        <div className='relative rounded-2xl border border-white/10 bg-[#13131f]/95 p-8 shadow-2xl backdrop-blur-xl sm:p-10'>
          <div className='mb-8 text-center'>
            <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Create Account
            </h1>
            <p className='mt-2 text-sm text-slate-400'>
              Join us today and get started
            </p>
            <div className='mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent' />
          </div>

          <Form className='flex flex-col gap-5' onSubmit={onSubmit}>
            <TextField
              isRequired
              name='name'
              validate={(value) => {
                if (value.length < 3)
                  return 'Name must be at least 3 characters';
                return null;
              }}
            >
              <Label className='mb-1.5 block text-xs font-semibold uppercase tracking-wider text-violet-400'>
                Full Name
              </Label>
              <div className='relative'>
                <FiUser className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500' />
                <Input
                  placeholder='John Doe'
                  className='w-full rounded-xl border border-white/10 bg-[#1a1a2e] py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20'
                />
              </div>
              <FieldError className='mt-1 text-xs text-red-400' />
            </TextField>

            <TextField
              isRequired
              name='email'
              type='email'
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return 'Please enter a valid email address';
                }
                return null;
              }}
            >
              <Label className='mb-1.5 block text-xs font-semibold uppercase tracking-wider text-violet-400'>
                Email Address
              </Label>
              <div className='relative'>
                <FiMail className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500' />
                <Input
                  placeholder='john@example.com'
                  className='w-full rounded-xl border border-white/10 bg-[#1a1a2e] py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20'
                />
              </div>
              <FieldError className='mt-1 text-xs text-red-400' />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name='password'
              type={showPassword ? 'text' : 'password'}
              validate={(value) => {
                if (value.length < 8)
                  return 'Password must be at least 8 characters';
                if (!/[A-Z]/.test(value))
                  return 'Password must contain at least one uppercase letter';
                if (!/[0-9]/.test(value))
                  return 'Password must contain at least one number';
                return null;
              }}
            >
              <Label className='mb-1.5 block text-xs font-semibold uppercase tracking-wider text-violet-400'>
                Password
              </Label>
              <div className='relative'>
                <FiLock className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500' />
                <Input
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
              <Description className='mt-1 text-xs text-slate-500'>
                Must be at least 8 characters with 1 uppercase & 1 number
              </Description>
              <FieldError className='mt-1 text-xs text-red-400' />
            </TextField>

            <Button
              type='submit'
              disabled={isLoading}
              className='mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-blue-500 hover:shadow-violet-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70'
            >
              <Check className='h-4 w-4' />
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>

            <Button
              type='reset'
              variant='secondary'
              disabled={isLoading}
              className='inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-[#1a1a2e] px-6 py-3 text-sm font-medium text-slate-400 transition hover:border-white/20 hover:bg-[#252542] hover:text-white disabled:cursor-not-allowed disabled:opacity-70'
            >
              Reset Form
            </Button>
          </Form>

          <div className='my-6 flex items-center gap-3'>
            <div className='h-px flex-1 bg-white/10' />
            <span className='text-xs text-slate-500'>or continue with</span>
            <div className='h-px flex-1 bg-white/10' />
          </div>

          <div className='flex gap-3'>
            <button
              type='button'
              className='flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#1a1a2e] py-2.5 text-sm text-slate-300 transition hover:border-white/20 hover:bg-[#252542]'
            >
              <FcGoogle className='h-5 w-5' />
              Google
            </button>
            <button
              type='button'
              className='flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#1a1a2e] py-2.5 text-sm text-slate-300 transition hover:border-white/20 hover:bg-[#252542]'
            >
              <FaGithub className='h-5 w-5' />
              GitHub
            </button>
          </div>

          <p className='mt-6 text-center text-xs text-slate-500'>
            Already have an account?{' '}
            <a
              href='/auth/signin'
              className='text-violet-400 transition hover:text-violet-300'
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
