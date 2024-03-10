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

  return <div>{snippet.title}</div>;
}
