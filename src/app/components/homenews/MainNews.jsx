import Image from 'next/image';

async function getCategoryNews(categoryId) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch category ${categoryId}`);
  }

  const data = await res.json();
  return data.data;
}

export default async function MainNews({ id }) {
  const categoryId = id || '01';
  const newsData = await getCategoryNews(categoryId);
  console.log(newsData)

  return (
    <section className='container mx-auto px-4 py-8'>
      {/* <h2 className='border-b border-slate-200 pb-3 text-xl font-bold text-slate-800'>
        Dragon News Home
      </h2> */}
      <div className='mb-6 flex items-center justify-between'>
        <p className='text-sm text-slate-500'>Total News: {newsData.length}</p>
      </div>

      {newsData.length > 0 ? (
        <div className='space-y-6'>
          {newsData.map((news) => (
            <article
              key={news._id}
              className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md'
            >
              <div className='border-b border-slate-200 p-5'>
                <div className='flex items-center gap-3'>
                  <Image
                    src={news.author?.img || 'https://via.placeholder.com/40'}
                    alt={news.author?.name || 'Author'}
                    width={48}
                    height={48}
                    className='h-12 w-12 rounded-full object-cover'
                  />

                  <div className='flex-1'>
                    <h3 className='text-sm font-semibold text-slate-800'>
                      {news.author?.name || 'Unknown Author'}
                    </h3>
                    <p className='text-xs text-slate-500'>
                      {news.author?.published_date || 'No published date'}
                    </p>
                  </div>
                </div>
              </div>

              <div className='p-5'>
                <div className='mb-4 flex flex-wrap gap-2'>
                  {news.others_info?.is_trending && (
                    <span className='rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600'>
                      Trending
                    </span>
                  )}

                  {news.others_info?.is_todays_pick && (
                    <span className='rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600'>
                      Today’s Pick
                    </span>
                  )}

                  <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                    Category {news.category_id}
                  </span>
                </div>

                <h2 className='mb-4 text-xl font-bold leading-snug text-slate-800'>
                  {news.title}
                </h2>

                {news.image_url && (
                  <Image
                    src={news.image_url}
                    alt={news.title}
                    width={800}
                    height={450}
                    className='mb-4 h-64 w-full rounded-xl object-cover'
                  />
                )}

                <p className='mb-5 text-sm leading-7 text-slate-600'>
                  {news.details?.slice(0, 250) || 'No details available'}...
                </p>

                <button className='rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600'>
                  Read More
                </button>
              </div>

              <div className='flex items-center justify-between border-t border-slate-200 px-5 py-4'>
                <div className='flex items-center gap-1 text-orange-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <span className='text-sm font-semibold'>
                    {news.rating?.number || 0}
                  </span>
                  <span className='text-xs text-slate-500'>
                    ({news.rating?.badge || 'No Rating'})
                  </span>
                </div>

                <div className='flex items-center gap-2 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 15.75A3.75 3.75 0 1 0 12 8.25a3.75 3.75 0 0 0 0 7.5z'
                    />
                  </svg>
                  <span className='text-sm font-medium'>
                    {news.total_view || 0}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center'>
          <h2 className='text-2xl font-semibold text-slate-700'>
            No news found
          </h2>
          <p className='mt-2 text-sm text-slate-500'>News not available now</p>
        </div>
      )}
    </section>
  );
}
