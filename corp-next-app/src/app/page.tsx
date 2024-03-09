import homeImg from '@/../../public/home.jpg';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <>
      <Hero image={homeImg} imgAlt='car factory' title='Home Page' />
    </>
  );
}
