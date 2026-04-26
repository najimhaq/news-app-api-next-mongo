export default function MainNewsSkeleton() {
  return (
    <div className='space-y-6'>
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'
        >
          <div className='animate-pulse'>
            <div className='border-b border-slate-200 p-5'>
              <div className='flex items-center gap-3'>
                <div className='h-12 w-12 rounded-full bg-slate-200'></div>
                <div className='flex-1 space-y-2'>
                  <div className='h-4 w-32 rounded bg-slate-200'></div>
                  <div className='h-3 w-24 rounded bg-slate-200'></div>
                </div>
              </div>
            </div>

            <div className='p-5'>
              <div className='mb-4 flex gap-2'>
                <div className='h-6 w-20 rounded-full bg-slate-200'></div>
                <div className='h-6 w-24 rounded-full bg-slate-200'></div>
              </div>

              <div className='mb-4 h-6 w-3/4 rounded bg-slate-200'></div>
              <div className='mb-4 h-64 w-full rounded-xl bg-slate-200'></div>

              <div className='space-y-2'>
                <div className='h-4 w-full rounded bg-slate-200'></div>
                <div className='h-4 w-full rounded bg-slate-200'></div>
                <div className='h-4 w-2/3 rounded bg-slate-200'></div>
              </div>

              <div className='mt-5 h-10 w-28 rounded-lg bg-slate-200'></div>
            </div>

            <div className='flex items-center justify-between border-t border-slate-200 px-5 py-4'>
              <div className='h-5 w-24 rounded bg-slate-200'></div>
              <div className='h-5 w-20 rounded bg-slate-200'></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
