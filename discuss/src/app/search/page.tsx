import PostList from '@/components/posts/post-list';
import { fetchPostBySearchTerm } from '@/db/queries/posts';
import { redirect } from 'next/navigation';
import React from 'react';

type SearchPageProps = {
  searchParams: {
    term: string;
  };
};

async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) redirect('/');

  return (
    <div>
      <PostList fetchData={() => fetchPostBySearchTerm(term)} />
    </div>
  );
}

export default SearchPage;
