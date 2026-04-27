// Fetch all news categories
export async function getAllCategory() {
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
// Fetch news categories
export async function getCategoryNews(categoryId) {
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

// app/lib/data.js
export async function getNewsById(news_id) {
  const url = `https://openapi.programming-hero.com/api/news/${news_id}`;

  // console.log('Fetching URL:', url); // Debug

  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch news ${news_id}: ${res.status}`);
  }

  const data = await res.json();
  // console.log('API Response:', data); // Debug

  // Programming Hero API: data.data array থাকে
  if (!data.data || data.data.length === 0) {
    return null;
  }

  return data.data[0];
}
