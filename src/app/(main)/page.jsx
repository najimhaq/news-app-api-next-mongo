import { redirect } from 'next/navigation';

export default async function Homepage() {
  const category_id = '01';

  redirect(`/category/${category_id}`);
}
