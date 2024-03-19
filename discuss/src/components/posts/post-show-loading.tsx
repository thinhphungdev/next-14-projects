import { Skeleton } from '@nextui-org/react';

function PostShowLoading() {
  return (
    <div className='my-4'>
      <div className='my-2'>
        <Skeleton className='h-8 w-48' />
      </div>

      <div className='p-4 border rounded space-y-2'>
        <Skeleton className='h-6 w-32' />
        <Skeleton className='h-6 w-32' />
        <Skeleton className='h-6 w-32' />
      </div>
    </div>
  );
}

export default PostShowLoading;
