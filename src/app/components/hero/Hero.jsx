export default function Hero() {
  return (
    <main className='min-h-screen flex flex-col bg-gray-50'>
      <section className='flex flex-col items-center justify-center flex-grow text-center px-6 py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white'>
        <h2 className='text-4xl font-bold mb-4'>Welcome to MyApp</h2>
        <p className='max-w-xl mb-6'>
          A common homepage design you can reuse across multiple projects.
        </p>
        <button className='px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100'>
          Get Started
        </button>
      </section>
    </main>
  );
}
