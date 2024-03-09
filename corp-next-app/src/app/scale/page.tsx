import scaleImage from '@/../../public/scale.jpg';
import Hero from '@/components/Hero';

export default function ScalePage() {
  return (
    <>
      <Hero image={scaleImage} imgAlt='scale page' title='Scale Page' />
    </>
  );
}
