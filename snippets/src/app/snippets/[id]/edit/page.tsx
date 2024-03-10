import { db } from '@/db/index';
import { notFound } from 'next/navigation';

import SnippetEditForm from '@/components/SnippetEditForm';

type EditSnippetPage = {
  params: {
    id: string;
  };
};

export default async function EditSnippet(props: EditSnippetPage) {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
