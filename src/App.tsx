import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickFacts from './components/QuickFacts';
import PainPoints from './components/PainPoints';
import WhyStudio from './components/WhyStudio';
import Location from './components/Location';
import Amenities from './components/Amenities';
import RentOrLive from './components/RentOrLive';
import PaymentPolicy from './components/PaymentPolicy';
import ImageGallery from './components/ImageGallery';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import LeadManager from './components/LeadManager';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Smooth scroll handler to target form
  const handleScrollToForm = () => {
    const element = document.getElementById('dang-ky');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col justify-between" id="landing-page-root">
      
      {/* 1. Header (Sticky navigation + logo + hotline) */}
      <Header 
        onOpenAdmin={() => setIsAdminOpen(true)} 
        onScrollToForm={handleScrollToForm} 
      />

      <main className="flex-grow">
        
        {/* 2. Hero Section (Elevated titles + metrics + blueprint visual) */}
        <Hero onScrollToForm={handleScrollToForm} />

        {/* 3. Quick Facts (Key indices - price, initial payment, size) */}
        <QuickFacts />

        {/* 4. Pain Points (Common anxieties solved by Studio 40m²) */}
        <PainPoints />

        {/* 5. Why Choose Studio (Low cost, VSIP lease demand, yield) */}
        <WhyStudio onScrollToForm={handleScrollToForm} />

        {/* 6. Location & Connectivity (Map vector + landmark milestones) */}
        <Location />

        {/* 7. Amenities (60+ resort features: 65m pool, 5-floor mall) */}
        <Amenities />

        {/* 8. Target Demographics (Mua ở thật vs Đầu tư cho thuê) */}
        <RentOrLive />

        {/* 9. Payment Policy (Vertical timeline payment milestones) */}
        <PaymentPolicy />

        {/* 10. Image Gallery (Structured photo placeholder grids) */}
        <ImageGallery />

        {/* 11. Lead Capture Form (Form inputs + success panels) */}
        <RegistrationForm />

        {/* 12. FAQs (Real-estate accordion questioning) */}
        <FAQ />

      </main>

      {/* 13. Footer (Disclaimers + Mr. Khải's contact details + Admin Portal trigger) */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* 14. Persistent Mobile Bottom Toolbar */}
      <StickyCTA onScrollToForm={handleScrollToForm} />

      {/* 15. Secure Broker Lead Portal (Triggered from header lock or footer link) */}
      {isAdminOpen && (
        <LeadManager onClose={() => setIsAdminOpen(false)} />
      )}

    </div>
  );
}
