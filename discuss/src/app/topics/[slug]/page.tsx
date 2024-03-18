import PostCreateForm from '@/components/posts/post-create-form';

type TopicShowProps = {
  params: {
    slug: string;
  };
};

function TopicShow({ params }: TopicShowProps) {
  const { slug } = params;
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <div className='text-2xl font-bold mb-2'>{slug}</div>
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}

export default TopicShow;
