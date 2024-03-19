import Link from 'next/link';
import React from 'react';
import paths from '../../../../../paths';
import PostShow from '@/components/posts/post-show';
import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import { fetchCommentsByPostId } from '@/db/queries/comments';

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
      <CommentList fetchData={() => fetchCommentsByPostId(postId)} />
    </div>
  );
}

export default PostShowPage;
