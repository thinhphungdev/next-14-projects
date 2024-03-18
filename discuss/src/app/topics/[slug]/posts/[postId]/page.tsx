import Link from 'next/link';
import React from 'react';
import paths from '../../../../../paths';
import PostShow from '@/components/posts/post-show';

type PostShowPageProps = {
  params: {
    slug: string;
    postId: string;
  };
};

function PostShowPage({ params }: PostShowPageProps) {
  const { postId, slug } = params;

  return (
    <div className='space-y-3'>
      <Link
        className='underline decoration-solid'
        href={paths.topicShowPath(slug)}
      >
        Back to {slug}
      </Link>
      <PostShow postId={postId} />
    </div>
  );
}

export default PostShowPage;
