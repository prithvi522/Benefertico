import CTASection from '../components/CTASection';
import Hero from '../components/Hero';
import Innovation from '../components/Innovation';

export default function HomePage() {
  return (
    <div>
      <Hero />
      {/* <AgricultureIntro /> */}
      <Innovation />
      {/* <Statistics /> */}
      <CTASection />
    </div>
  );
}
