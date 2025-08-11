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
      try {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
        const isMobileDevice = mobileRegex.test(userAgent);
        
        // Also check screen width
        const isSmallScreen = window.innerWidth <= 768;
        
        setIsMobile(isMobileDevice || isSmallScreen);
        setIsLoading(false);
      } catch (error) {
        console.error('Error checking mobile:', error);
        // Fallback: assume mobile if there's an error
        setIsMobile(true);
        setIsLoading(false);
      }
    };

    // Add timeout fallback to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.warn('Loading timeout, forcing mobile view');
        setIsMobile(true);
        setIsLoading(false);
      }
    }, 3000); // 3 second timeout

    checkMobile();

    // Listen for window resize
    const handleResize = () => {
      try {
        const isSmallScreen = window.innerWidth <= 768;
        setIsMobile(isSmallScreen);
      } catch (error) {
        console.error('Error handling resize:', error);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#5d18eb] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
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
          <ProblemsSectionDemo />
        </>
      )}
      <FaqSectionDemo />
      <CallToActionSectionDemo />
    </main>
  );
} 