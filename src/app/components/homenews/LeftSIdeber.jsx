import Link from 'next/link';
async function getAllCategory() {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch category list`);
  }

  const data = await res.json();
  return data.data.news_category;
}
export default async function LeftSIdeber({ id }) {
  const categories = await getAllCategory();
  const activeCategoryId = id || '01';
  return (
    <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
      <h2 className='border-b border-slate-200 pb-3 text-xl font-bold text-slate-800'>
        All Category
      </h2>

      <ul className='mt-4 space-y-2'>
        {categories.map((category) => (
          <li key={category.category_id}>
            <Link
              href={`/category/${category.category_id}`}
              className={`block rounded-xl border px-4 py-3 text-sm font-medium shadow-sm transition-all duration-200 ${
                activeCategoryId === category.category_id
                  ? 'border-red-200 bg-red-50 text-red-600'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
