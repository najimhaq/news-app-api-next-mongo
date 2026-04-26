import Link from 'next/link';
import Image from 'next/image';
import avatar from '@/assets/user.png';
import Navlink from '../navlink/page';

const Navbar = () => {
  return (
    <header>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:mt-6'>
        <div></div>

        <div className='hidden items-center gap-4 md:flex'>
          <Navlink href='/'>Home</Navlink>

          <Navlink href='/about'>About</Navlink>

          <Navlink href='/career'>Career</Navlink>
        </div>

        <div className='flex justify-center gap-2'>
          <Image
            src={avatar}
            alt='User Avatar'
            width={40}
            height={40}
            className='h-10 w-10 rounded-full'
          />

          <Link
            href='/signin'
            className='bg-gray-700 text-white hover:bg-gray-600 px-6 py-2 rounded-md'
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
