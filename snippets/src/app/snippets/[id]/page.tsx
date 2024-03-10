import { db } from '@/db';
import { notFound } from 'next/navigation';

type SnippetDetailsPageProps = {
  params: {
    id: string;
  };
};

export default async function SnippetDetailsPage(
  props: SnippetDetailsPageProps
) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: +props.params.id,
    },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <div className='flex m-4 items-center justify-between'>
        <h1 className='text-xl font-bold'>{snippet.title}</h1>

        <div className='flex gap-4'>
          <button className='p-2 border rounded'>Edit</button>
          <button className='p-2 border rounded'>Delete</button>
        </div>
      </div>

      <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
