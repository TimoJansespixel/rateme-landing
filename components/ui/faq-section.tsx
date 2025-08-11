"use client"

import React from "react";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

const faqData = [
  {
    id: 1,
    question: "How does RateMe work?",
    answer: "RateMe connects you with real people who provide honest ratings of your photos. Upload your best pictures, get rated by genuine users, and see where you stand in your league.",
    icon: "📱",
    iconPosition: "right" as const,
  },
  {
    id: 2,
    question: "Is my privacy protected?",
    answer: "Absolutely! Your personal information is never shared. Only your photos are rated anonymously, and we use advanced security measures to protect your data.",
    icon: "🔒",
    iconPosition: "left" as const,
  },
  {
    id: 3,
    question: "How accurate are the ratings?",
    answer: "Our ratings come from real people, not AI. The algorithm ensures fair and honest feedback from genuine users.",
    icon: "⭐",
    iconPosition: "right" as const,
  },
  {
    id: 4,
    question: "What is the league system?",
    answer: "The league system shows you where you rank compared to others. It helps you understand your attractiveness level and see who's in your league.",
    icon: "🏆",
    iconPosition: "left" as const,
  },
  {
    id: 5,
    question: "How often should I update my photos?",
    answer: "You can upload new photos every week, but we recommend updating whenever you want a fresh and accurate rating.",
    icon: "📸",
    iconPosition: "right" as const,
  },
  {
    id: 6,
    question: "Can I delete my account?",
    answer: "Yes, you can delete your account at any time. All your data will be permanently removed from our servers within 30 days.",
    icon: "🗑️",
    iconPosition: "left" as const,
  },
  {
    id: 7,
    question: "How many photos can I upload?",
    answer: "You have to upload 2 photos: a clear front view and a side profile. We recommend using recent photos to get the most accurate ratings.",
    icon: "🖼️",
    iconPosition: "right" as const,
  },
  {
    id: 8,
    question: "Are the ratings anonymous?",
    answer: "Yes, all ratings are completely anonymous. Raters never see your personal information, and you never see who rated you.",
    icon: "👤",
    iconPosition: "left" as const,
  },
  {
    id: 9,
    question: "What if I get a low rating?",
    answer: "Do not worry. Ratings are just feedback to help you improve. Focus on looking better first, then upload new photos to see your progress.",
    icon: "💪",
    iconPosition: "right" as const,
  },
  {
    id: 10,
    question: "Can I see who rated me?",
    answer: "No, all ratings are anonymous to protect privacy. You'll only see your overall rating and league position, not individual rater information.",
    icon: "🔍",
    iconPosition: "left" as const,
  },
  {
    id: 11,
    question: "How do you prevent fake ratings?",
    answer: "We use advanced algorithms including the Elo system and verification systems to ensure all ratings come from real people. Suspicious users are automatically detected and removed",
    icon: "🤖",
    iconPosition: "right" as const,
  },
  {
    id: 12,
    question: "Is RateMe available worldwide?",
    answer: "RateMe will be available worldwide on the App Store and Play Store.",
    icon: "🌍",
    iconPosition: "left" as const,
  },
];

export function FaqSection() {
  return (
    <section className="faq-section py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about <span className="rateme-inline"><img src="/assets/images/AppIconRateMe.png" alt="RateMe" className="inline w-5 h-5 -mt-1 -mr-0.5" /><span className="text-black font-black">RateMe</span></span> and how it works
          </p>
        </div>

        {/* Content with Phone - Much Closer */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            {/* FAQ Accordion */}
            <div className="w-1/2 mobile-faq">
              <FaqAccordion 
                data={faqData}
                className="w-full"
                questionClassName="faq-desktop-question"
                answerClassName="faq-desktop-answer"
                timestamp="Updated daily"
              />
            </div>

            {/* Phone Picture - Desktop only, positioned */}
            <div className="absolute left-[55%] top-0 w-2/5 justify-start pl-4 hidden md:flex">
              <div className="animate-fly-in-right">
                <img 
                  src="/assets/images/Home-portrait.png" 
                  alt="RateMe App on Phone" 
                  className="w-80 h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
} 