'use client';

import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch('/api/news');
      const data = await res.json();
      setNews(data);
    };
    fetchNews();
  }, []);


  return (
    <div className='bg-white shadow-md rounded-lg py-3 px-6 flex items-center gap-6 container mx-auto'>
      <button className='bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition'>
        Latest
      </button>
      <Marquee gradient={false} speed={50} pauseOnHover={true} className='text-gray-800 font-medium'>
        {news.map((item) => (
          <span key={item.id} className='text-gray-800 font-medium mr-10'>
            {item.data}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
