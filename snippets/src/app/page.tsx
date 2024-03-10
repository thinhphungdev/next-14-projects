import { db } from '@/db';
import Link from 'next/link';

export default async function HomePage() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className='flex justify-between items-center m-2'>
        <h1 className='text-xl font-bold'>Snippets</h1>

        <Link className='border p-2 rounded' href='/snippets/new'>
          New
        </Link>
      </div>

      <div className='flex gap-2 flex-col'>
        {snippets.map((snippet) => (
          <Link
            className='flex justify-between items-center p-2 border rounded'
            key={snippet.id}
            href={`/snippets/${snippet.id}`}
          >
            {snippet.title}
            <div>View</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
