import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type HeroProps = {
  image: StaticImageData;
  imgAlt: string;
  title: string;
};

function Hero(props: HeroProps) {
  return (
    <div className='relative h-screen'>
      <div className='absolute -z-10 inset-0'>
        <Image
          fill
          src={props.image}
          alt={props.imgAlt}
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-tr from-slate-800' />
      </div>
      <div className='flex pt-48 justify-center items-center'>
        <h1 className='text-white text-6xl'>{props.title}</h1>
      </div>
    </div>
  );
}

export default Hero;
