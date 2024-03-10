import { db } from '@/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { deleteSnippet } from '@/actions';

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

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className='flex m-4 items-center justify-between'>
        <h1 className='text-xl font-bold'>{snippet.title}</h1>

        <div className='flex gap-4'>
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className='p-2 border rounded'
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button type='submit' className='p-2 border rounded'>
              Delete
            </button>
          </form>
        </div>
      </div>

      <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
