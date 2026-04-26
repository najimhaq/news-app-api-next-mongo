import { NextResponse } from 'next/server';

export async function GET() {
  const newsData = [
    { id: '1', data: 'Breaking News - Major update on global economy today.' },
    { id: '2', data: 'Breaking News - New technology breakthrough announced.' },
    {
      id: '3',
      data: 'Breaking News - Sports world shocked by unexpected result.',
    },
  ];
  return NextResponse.json(newsData);
}
