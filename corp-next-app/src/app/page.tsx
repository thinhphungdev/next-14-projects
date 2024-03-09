import Image from 'next/image';
import homeImg from '@/../../public/home.jpg';

export default function HomePage() {
  return (
    <>
      Home Page
      <div className='absolute -z-10 inset-0'>
        <Image fill src={homeImg} alt='car factory' className='object-cover' />
      </div>
    </>
  );
}
