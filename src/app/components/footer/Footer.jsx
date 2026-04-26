export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className='space-x-4 mt-4 md:mt-0'>
          <a href='#' className='hover:text-indigo-400'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-indigo-400'>
            Terms of Service
          </a>
          <a href='#' className='hover:text-indigo-400'>
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
