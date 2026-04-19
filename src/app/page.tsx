'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroMotion from '@/components/HeroMotion';
import StatsSection from '@/components/StatsSection';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewMarquee from '@/components/ReviewMarquee';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroMotion />
        <StatsSection />
        <Services />
        <WhyChooseUs />
        <ReviewMarquee />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
