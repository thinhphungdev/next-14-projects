import { db } from '@/db';

export default async function HomePage() {
  const snippets = await db.snippet.findMany();

  return (
    <>
      {snippets.map((snippet) => (
        <div key={snippet.id}>{snippet.title}</div>
      ))}
    </>
  );
}
