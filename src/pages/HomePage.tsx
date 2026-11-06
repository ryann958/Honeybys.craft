import { useEffect } from 'react';
import { business } from '../data/business';
import { setPageMetadata } from '../lib/seo';
import BrandIntroductionSection from '../components/home/BrandIntroductionSection';
import FeaturedGallerySection from '../components/home/FeaturedGallerySection';
import FeaturedServicesSection from '../components/home/FeaturedServicesSection';
import FaqSection from '../components/home/FaqSection';
import FinalCtaSection from '../components/home/FinalCtaSection';
import HeroSection from '../components/home/HeroSection';
import ProcessSection from '../components/home/ProcessSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import '../styles/home.css';

const homeTitle = `Boneka Custom dari Ide Personal | ${business.brandName}`;
const homeDescription = `${business.brandName} menghadirkan layanan custom boneka dari ide, karakter, atau referensi personal. Mulai dengan membahas konsep yang Anda bayangkan.`;

export default function HomePage() {
  useEffect(() => {
    setPageMetadata({ title: homeTitle, description: homeDescription });
  }, []);

  return (
    <div className="home-page">
      <HeroSection />
      <BrandIntroductionSection />
      <FeaturedServicesSection />
      <FeaturedGallerySection />
      <ProcessSection />
      <WhyChooseSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}