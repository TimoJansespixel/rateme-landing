"use client"

import { Hero7Demo } from "@/components/blocks/modern-hero";
import { FeaturesSectionWithCardGradientDemo } from "@/components/blocks/feature-section-with-card-gradient";
import { HowItWorksSectionDemo } from "@/components/blocks/how-it-works-section";
import { ProblemsSectionDemo } from "@/components/blocks/problems-section";
import { FaqSectionDemo } from "@/components/blocks/faq-section";
import { CallToActionSectionDemo } from "@/components/blocks/call-to-action-section";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user agent indicates mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      const isMobileDevice = mobileRegex.test(userAgent);
      
      // Also check screen width
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(isMobileDevice || isSmallScreen);
      setIsLoading(false);
    };

    checkMobile();

    // Listen for window resize
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isSmallScreen);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#5d18eb]"></div>
      </div>
    );
  }

  return (
    <main className={isMobile ? "mobile-optimized" : ""}>
      <Hero7Demo />
      {isMobile ? (
        <>
          <HowItWorksSectionDemo />
          <FeaturesSectionWithCardGradientDemo />
        </>
      ) : (
        <>
          <FeaturesSectionWithCardGradientDemo />
          <HowItWorksSectionDemo />
        </>
      )}
      <ProblemsSectionDemo />
      <FaqSectionDemo />
      <CallToActionSectionDemo />
    </main>
  );
} 