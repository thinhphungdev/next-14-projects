import Hero from '@/components/Hero';
import heroImg from '@/../../public/performance.jpg';

function PerformancePage() {
  return (
    <Hero title='Performance Page' imgAlt='Performance page' image={heroImg} />
  );
}

export default PerformancePage;
