"use client"

import { Hero7Demo } from "@/components/blocks/modern-hero";
import { FeaturesSectionWithCardGradientDemo } from "@/components/blocks/feature-section-with-card-gradient";
import { HowItWorksSectionDemo } from "@/components/blocks/how-it-works-section";
import { ProblemsSectionDemo } from "@/components/blocks/problems-section";
import { FaqSectionDemo } from "@/components/blocks/faq-section";
import { CallToActionSectionDemo } from "@/components/blocks/call-to-action-section";

export default function MobilePage() {
  return (
    <main className="mobile-optimized">
      <Hero7Demo />
      <HowItWorksSectionDemo />
      <FeaturesSectionWithCardGradientDemo />
      <ProblemsSectionDemo />
      <FaqSectionDemo />
      <CallToActionSectionDemo />
    </main>
  );
} 