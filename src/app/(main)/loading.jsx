import CategorySkeleton from '../components/skeleton/CategorySkeleton';
import MainNewsSkeleton from '../components/skeleton/MainNewsSkeleton';

export default function Loading() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
        <div className='md:col-span-3'>
          <CategorySkeleton />
        </div>

        <div className='md:col-span-6'>
          <MainNewsSkeleton />
        </div>

        <div className='md:col-span-3'>
          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
            <div className='animate-pulse space-y-4'>
              <div className='h-6 w-32 rounded bg-slate-200'></div>
              <div className='h-12 w-full rounded-xl bg-slate-200'></div>
              <div className='h-12 w-full rounded-xl bg-slate-200'></div>
              <div className='h-40 w-full rounded-xl bg-slate-200'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
