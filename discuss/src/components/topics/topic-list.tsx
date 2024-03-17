import { Chip } from '@nextui-org/react';
import Link from 'next/link';
import { db } from '@/db';
import paths from '@/paths';

async function TopicList() {
  const topics = await db.topic.findMany();

  return (
    <div className='flex flex-grow flex-wrap gap-2'>
      {topics.map((topic) => (
        <div key={topic.id}>
          <Link href={paths.topicShowPath(topic.slug)}>
            <Chip color='warning' variant='shadow'>
              {topic.slug}
            </Chip>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TopicList;
