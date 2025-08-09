"use client"

import React, { useState } from "react";
import { XCard } from "@/components/ui/x-gradient-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const problemsData = [
  {
    authorName: "Height Enthusiast",
    authorHandle: "TruthAboutHeight",
    authorImage: "/assets/images/profileIcon_snooabfdd028-59f5-4ca3-bbf5-33e3ff23bf72-headshot.webp",
    content: [
      "I've noticed that it gets mentioned a lot that we men have no idea how attractive we are and usually underestimate it. Is there a trick to figuring it out?",
      "Asking people how attractive you are doesn't work, of course, because people in person love to lie about appearance (and it's an awkward question), and the internet tends to be overly harsh when asked."
    ],
    isVerified: false,
    timestamp: "1 week ago",
    reply: {
      authorName: "UDT User",
      authorHandle: "UDT22",
      authorImage: "/assets/images/profileIcon_snoocee394f4-7d65-407a-95ff-fd171f5fbf6f-headshot-f.webp",
      content: "Me too. My goal is to not offend anyone. I shower, brush my teeth, comb my hair, use deodorant and wear clean clothes etc.",
      isVerified: false,
      timestamp: "6 days ago",
    },
  },
  {
    authorName: "Pixel Explorer",
    authorHandle: "CuriousPixel87",
    authorImage: "/assets/images/profileIcon_snoobbc736ff-3598-4ffc-834c-d7a24f318089-headshot.webp",
    content: [
      "Has anyone been rated facially by AI on the internet before? I am not referring to the pretty scale website. I am referring the website: ***attractivenesstest.com***",
      "I have taken a picture of myself and my rating was 7.2/10. 6 is considered the average btw in the range of 1-10. If you want to try it out and get a more accurate score, you have to do a full frontal face pic of only yourself. A score of 7 and above is considered \"attractive\" btw."
    ],
    isVerified: false,
    timestamp: "3 days ago",
    reply: {
      authorName: "Orbit Observer",
      authorHandle: "NeutralOrbit42",
      authorImage: "/assets/images/profileIcon_snoo6b8f7529-01fb-47c3-97e9-03d880f68d01-headshot.webp",
      content: "The system rated Odell a 7 and Tyson Beckford a 6, yall gotta stop with these systems. They don't mean anything. Most will likely get between 6-7.",
      isVerified: false,
      timestamp: "1 day ago",
    },
  },
  {
    authorName: "Fashion Enthusiast",
    authorHandle: "BennoFerragamo",
    authorImage: "/assets/images/avatar_default_3.png",
    content: [
      "Its often said that you mostly should pursue people who are within your league and not waste time trying to pursue people who are \"out of your league\".",
      "But how do you actually determine what league you yourself are actually in?"
    ],
    isVerified: false,
    timestamp: "5 days ago",
    reply: {
      authorName: "Rain Lover",
      authorHandle: "Natural-Rain-9144",
      authorImage: "/assets/images/avatar_default_4.png",
      content: "Mmm idk",
      isVerified: false,
      timestamp: "4 days ago",
    },
  },
];

export function ProblemsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  React.useEffect(() => {
    const detect = () => {
      const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
      setIsMobileView(isMobileUA || window.innerWidth <= 768);
    };
    detect();
    window.addEventListener('resize', detect);
    return () => window.removeEventListener('resize', detect);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % problemsData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + problemsData.length) % problemsData.length);
  };

  return (
    <section className="py-6 bg-gradient-to-b from-muted/10 to-background problems-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold tracking-tight mb-2">
            We Listen to Your Problems
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's what people are saying about their dating confidence and attractiveness concerns
          </p>
        </div>

        {/* Card Carousel */}
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-black transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextCard}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-black transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Stacked Cards */}
          <div className="relative problem-cards h-[320px] md:h-[400px] flex items-center justify-center">
            {problemsData.map((problem, index) => {
              const isActive = index === currentIndex;
              const isNext = index === (currentIndex + 1) % problemsData.length;
              const isPrev = index === (currentIndex - 1 + problemsData.length) % problemsData.length;
              
              let transform = "";
              let zIndex = 0;
              let opacity = 0;

              if (isActive) {
                transform = "translateX(0) rotate(0deg) scale(1)";
                zIndex = 30;
                opacity = 1;
              } else if (isNext) {
                transform = "translateX(60px) rotate(2deg) scale(0.95)";
                zIndex = 20;
                opacity = 0.7;
              } else if (isPrev) {
                transform = "translateX(-60px) rotate(-2deg) scale(0.95)";
                zIndex = 20;
                opacity = 0.7;
              } else {
                transform = "translateX(120px) rotate(4deg) scale(0.9)";
                zIndex = 10;
                opacity = 0.4;
              }

              // Mobile: determine left/right animation class
              const mobileAnimationClass = index % 2 === 0 ? 'problem-box-left' : 'problem-box-right';

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-out ${mobileAnimationClass}`}
                  style={{
                    transform,
                    zIndex,
                    opacity,
                  }}
                  ref={(el) => {
                    if (!el) return;
                    if (typeof window === 'undefined') return;
                    const isMobile = window.innerWidth <= 768 || /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent);
                    if (!isMobile) return;
                    const observer = new IntersectionObserver((entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                          el.classList.add('in-view');
                        }
                      });
                    }, { threshold: 0.15 });
                    observer.observe(el);
                  }}
                >
                  <div className="pointer-events-none animated-inner">
                    <XCard
                      link=""
                      authorName={problem.authorName}
                      authorHandle={problem.authorHandle}
                      authorImage={problem.authorImage}
                      content={problem.content}
                      isVerified={problem.isVerified}
                      timestamp={problem.timestamp}
                      reply={problem.reply}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 