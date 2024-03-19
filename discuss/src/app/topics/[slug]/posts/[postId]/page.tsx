import Link from 'next/link';
import paths from '@/paths';
import PostShow from '@/components/posts/post-show';
import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import { Suspense } from 'react';
import PostShowLoading from '@/components/posts/post-show-loading';

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
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}

export default PostShowPage;
