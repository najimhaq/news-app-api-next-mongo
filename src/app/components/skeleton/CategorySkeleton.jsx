export default function CategorySkeleton() {
  return (
    <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
      <div className='animate-pulse'>
        <div className='mb-5 h-6 w-36 rounded bg-slate-200'></div>

        <div className='space-y-3'>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div
              key={item}
              className='h-12 w-full rounded-xl bg-slate-200'
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
