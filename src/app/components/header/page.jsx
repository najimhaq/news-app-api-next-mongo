import Image from 'next/image';
import logo from '@/assets/logo.png';
import { format } from 'date-fns';
import { ThemeSwitchToggle } from '../themeSwitch/ThemeSwitchToggle';
const Header = () => {
  const today = new Date();
  const day = format(today, 'EEEE'); // সপ্তাহের দিন
  const rest = format(today, 'MMMM dd, yyyy'); // মাস, তারিখ, বছর
  return (
    //className='sticky top-0 z-50  backdrop-blur-md dark:border-white/10 dark:bg-slate-950/80 flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8'
    <div className='flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
      <div></div>
      <div className='text-center py-6 space-y-3'>
        <Image
          src={logo}
          width={300}
          height={200}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          alt='Logo'
          className='mx-auto'
        />
        <p className='text-gray-500'>Journalism Without Fear or Favour</p>

        <p className='text-gray-500 text-lg'>
          <span className='font-medium text-xl'>{day}</span>, {rest}
        </p>
      </div>
      <div>
        <ThemeSwitchToggle />
      </div>
    </div>
  );
};

export default Header;
