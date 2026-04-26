import LeftSIdeber from '../components/homenews/LeftSIdeber';
import MainNews from '../components/homenews/MainNews';
import RightSideber from '../components/homenews/RightSideber';

export default async function Homepage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
        <aside className='md:col-span-3'>
          <LeftSIdeber />
        </aside>

        <main className='rounded-2xl bg-pink-100 p-6 md:col-span-6'>
          Dragon News Home
          <MainNews />
        </main>

        <aside className='md:col-span-3'>
          <RightSideber />
        </aside>
      </div>
    </div>
  );
}
