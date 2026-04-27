import { getCategoryNews } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

export default async function MainNews({ id }) {
  const categoryId = id || '01';
  const newsData = await getCategoryNews(categoryId);


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
                  {news.details?.slice(0, 100) || 'No details available'}...
                </p>

                <Link
                  href={`/news/${news._id}`}
                  className='rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600'
                >
                  Read More
                </Link>
              </div>

              <div className='flex items-center justify-between border-t border-slate-200 px-5 py-4'>
                <div className='flex items-center gap-1 text-orange-500'>
                  <IoIosStar />

                  <span className='text-sm font-semibold'>
                    {news.rating?.number || 0}
                  </span>
                  <span className='text-xs text-slate-500'>
                    ({news.rating?.badge || 'No Rating'})
                  </span>
                </div>

                <div className='flex items-center gap-2 text-slate-500'>
                  <FaEye />

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
