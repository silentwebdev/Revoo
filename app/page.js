// This page is server component

import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import CustomerBenefits from '../components/CustomerBenefits';
import CTASection from '../components/CTASection';

export const metadata = {
  title: 'REVOO Pakistan | Premium Electric Scooters',
  description:
    "Pakistan's most premium electric scooters. Discover REVOO — powerful, stylish, and eco-friendly rides for the modern commuter.",
};

export default function HomePage() {
  return (
    <div className="page-enter">
      <HeroSection />
      <div className="section-divider" />
      <StatsSection />
      <div className="section-divider" />
      <FeaturedProducts />
      <div className="section-divider" />
      <FeaturesSection />
      <div className="section-divider" />
      <WhyChooseUs />
      <div className="section-divider" />
      <CustomerBenefits />
      <CTASection />
    </div>
  );
}
