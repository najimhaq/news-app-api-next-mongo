// app/news/[id]/page.jsx
import { getNewsById } from '@/app/lib/data';
import { ca } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';

import { IoArrowBack } from 'react-icons/io5';

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsById(id);

  if (!news) {
    return (
      <div className='p-10 text-center'>
        <h1 className='text-2xl font-bold text-red-500'>News Not Found</h1>
        <p>ID: {id}</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 py-10'>
      <article className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
        {/* Image */}
        <div className='relative w-full h-72'>
          <Image
            src={news.image_url}
            alt={news.title}
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* Content */}
        <div className='p-8'>
          <h1 className='text-4xl font-extrabold mb-4 text-gray-900'>
            {news.title}
          </h1>
          <p className='text-sm text-gray-500 mb-6'>
            Author: {news.author?.name || 'Unknown'}
          </p>
          <p className='text-lg leading-relaxed text-gray-700'>
            {news.details}
          </p>
        </div>
        <div className='p-8'>
          <Link href={`/category/${news.category_id}`}>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
              <div className='flex justify-center items-center gap-2'>
                <IoArrowBack className='font-bold'/>
                All news in this category
              </div>
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default NewsDetailsPage;
