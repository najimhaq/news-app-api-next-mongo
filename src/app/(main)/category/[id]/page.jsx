import LeftSIdeber from '@/app/components/homenews/LeftSIdeber';
import MainNews from '@/app/components/homenews/MainNews';
import RightSideber from '@/app/components/homenews/RightSideber';

export default async function NewsDetailPageId({ params }) {
  const { id } = await params;
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
        <aside className='md:col-span-3'>
          <LeftSIdeber id={id} />
        </aside>

        <main className='rounded-2xl border border-slate-200 bg-slate-50 p-6 md:col-span-6'>
          <h2 className='border-b border-slate-200 pb-3 text-xl font-bold text-slate-800'>
            Dragon News Home
          </h2>

          <MainNews id={id} />
        </main>

        <aside className='md:col-span-3'>
          <RightSideber />
        </aside>
      </div>
    </div>
  );
}
