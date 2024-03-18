import Link from 'next/link';
import React from 'react';
import paths from '../../../../../paths';
import PostShow from '@/components/posts/post-show';
import CommentCreateForm from '@/components/comments/comment-create-form';

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
      <CommentCreateForm postId={postId} startOpen />
    </div>
  );
}

export default PostShowPage;
