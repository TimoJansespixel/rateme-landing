"use client"

import { Star, Mail, ArrowRight, User, Share2, TrendingUp, BarChart3, Heart } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { TypingTitle } from "@/components/ui/typing-title";
import { TextShimmer } from "@/components/ui/text-shimmer";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const Hero7 = ({
  heading = "Rate. Get Rated. Discover Your League.",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  button = {
    text: "Get early access",
    url: "#",
  },
  reviews = {
    count: 200,
    avatars: [
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: Hero7Props) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Show images after a delay
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 1000);

    // Handle scroll events
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Detect mobile to disable box animations
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const detect = () => {
      const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
      setIsMobileView(isMobileUA || window.innerWidth <= 768);
    };
    detect();
    window.addEventListener('resize', detect);
    return () => window.removeEventListener('resize', detect);
  }, []);

  // Observe hero info boxes to add 'in-view' when visible (mobile and desktop)
  useEffect(() => {
    const boxes = Array.from(document.querySelectorAll('.hero-info-box, .hero-info-combined')) as HTMLElement[];
    if (boxes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    boxes.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Subscription failed');
      }
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      alert("We couldn't add your email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-rateme-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate scroll-based transforms with throttling
  const scrollProgress = Math.min(scrollY / 600, 1); // Normalize to 0-1 over 600px scroll
  const outsideTranslateX = Math.round(scrollProgress * 800); // Move outside images 800px outward (rounded for stability)
  const middleScale = 1 + (scrollProgress * 0.15); // Scale middle image up to 1.15x
  const verticalScroll = Math.round(scrollProgress * 150); // All images scroll down 150px (rounded for stability)
  const sideOpacity = Math.max(0, 1 - scrollProgress * 1.5); // Side images fade out when scrolled

  

  // Calculate text boxes animation (appear when phones are gone) – disabled on mobile
  const textBoxesProgress = Math.max(0, (scrollY - 500) / 200); // Start after 600px scroll, over 200px
  const textBoxesOpacity = isMobileView ? 1 : Math.min(textBoxesProgress, 1); // No fade on mobile
  const boxesWrapperMarginTop = isMobileView ? 0 : (verticalScroll - 670);
  const boxOpacityTransition = isMobileView ? undefined : 'opacity 0.2s ease-out';

  return (
    <div className="relative w-full">
      {/* Main content */}
      <section className={isMobileView ? "pt-28 pb-8" : "pt-20 pb-8"}>
        <div className="container text-center">
          <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
            {/* App Icon/Logo */}
            <div className="mx-auto mb-6 hero-top-icon-wrap" style={isMobileView ? { marginTop: '12px', marginBottom: '10px' } : undefined}>
              <Image 
                src="/assets/images/AppIconRateMe.png" 
                alt="RateMe Logo" 
                width={80}
                height={80}
                className="h-20 w-auto mx-auto rounded-3xl transition-transform duration-200 hover:scale-110 hero-top-icon"
                priority
              />
            </div>
            
            {/* Title: Typing on desktop, static on mobile */}
            {isMobileView ? (
              <TypingTitle
                text={heading}
                className="text-3xl font-extrabold lg:text-6xl animate-fade-in-up font-lexend"
                typingDisabled={true}
              />
            ) : (
              <TypingTitle
                text={heading}
                className="text-3xl font-extrabold lg:text-6xl animate-fade-in-up font-lexend"
                typingDisabled={false}
              />
            )}
            <p className="text-balance text-muted-foreground lg:text-lg animate-fade-in-up animation-delay-200 font-lexend hero-subtitle">
              <span className="rateme-inline"><img src="/assets/images/AppIconRateMe.png" alt="RateMe" className="inline w-5 h-5 -mt-1 -mr-0.5" /><span className="text-black font-black">RateMe</span></span> is the only app that reveals your true attractiveness score—voted by real people through head-to-head photo duels
            </p>
            
            {/* Animated Shiny Text Component (desktop only) */}
            {!isMobileView && (
              <div className="mx-auto mt-1 animate-fade-in-up animation-delay-300">
                <div 
                  className="group inline-flex items-center justify-center px-8 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:px-12 relative"
                  onClick={scrollToHowItWorks}
                >
                  <AnimatedShinyText className="text-base font-medium font-lexend">
                    ✨ See how it works
                  </AnimatedShinyText>
                  <ArrowRight className="absolute right-4 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>
            )}

            {/* Mobile Email Form */}
            <div className="mobile-email-form">
              <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Email for early access..."
                  className="mobile-email-input flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="mobile-email-button"
                  disabled={isLoading || !email}
                >
                  {isLoading ? '...' : 'Join'}
                </button>
              </form>
            </div>

            {/* Mobile-only: one-line wait count under email form */}
            {isMobileView && (
              <div className="flex flex-row items-center justify-center gap-2 mt-0 animate-fade-in-up" style={{ marginTop: '-6px' }}>
                <span className="text-base font-semibold font-lexend text-[#5d18eb] whitespace-nowrap">90+ people</span>
                <TextShimmer as="span" className="text-base font-medium font-lexend whitespace-nowrap" duration={1.5}>waiting...</TextShimmer>
              </div>
            )}

            {isMobileView && (
              <div className="mt-2 animate-fade-in-up">
                <div className="mobile-preview-wrap w-full max-w-md mx-auto">
                  <Image
                    src="/assets/images/Profile-portrait.png"
                    alt="App preview"
                    width={640}
                    height={1280}
                    className="mobile-preview-image h-auto w-full"
                  />
                </div>
              </div>
            )}
            
            {/* New Email Form */}
            <div className="mx-auto mt-2 max-w-md animate-fade-in-up animation-delay-400">
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex items-center gap-2 rounded-xl border bg-background/50 backdrop-blur-sm p-2 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-2 flex-1 px-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 placeholder:text-muted-foreground font-lexend"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isLoading || !email}
                    className="bg-[#5d18eb] text-white px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105 hover:bg-[#4c14c7] disabled:pointer-events-none flex-shrink-0"
                  >
                    {isLoading ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    ) : isSubmitted ? (
                      <div className="flex items-center gap-1">
                        <div className="h-4 w-4 rounded-full bg-green-500" />
                        <span className="text-xs">Sent!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <span className="text-xs">Get early access</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    )}
                  </button>
                </div>
              </form>
              
              {isSubmitted && (
                <p className="mt-3 text-sm text-green-600 animate-fade-in font-lexend">
                  Thanks! We'll notify you when it's ready.
                </p>
              )}
            </div>

            <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-4 sm:flex-row animate-fade-in-up animation-delay-600">
              <span className="mx-4 inline-flex items-center -space-x-4">
                {reviews.avatars.map((avatar, index) => (
                  <Avatar 
                    key={index} 
                    className="size-14 border animate-fade-in-up"
                    style={{ animationDelay: `${700 + index * 100}ms` }}
                  >
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                  </Avatar>
                ))}
              </span>
              <div className="animate-fade-in-up animation-delay-800">
                <p className="text-left font-semibold font-lexend text-[#5d18eb] text-base -ml-2">
                  90+ people
                </p>
                <TextShimmer className="text-left font-medium font-lexend -ml-6" duration={1.5}>
                  waiting...
                </TextShimmer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three images positioned directly against content */}
      {!isMobileView && (
        <section className="pb-16">
          <div className="container text-center">
            <div className="flex justify-center gap-8">
              {/* Images Container */}
              <div className={`flex gap-8 transition-all duration-1000 ease-out ${
                showImages ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>
                {/* Image 1 - left */}
                <div 
                  className="relative transform hover:scale-105"
                  style={{
                    transform: `translate3d(-${outsideTranslateX}px, ${32 + verticalScroll}px, 0)`,
                    transition: 'transform 0.1s linear',
                    willChange: 'transform',
                  }}
                >
                  <Image 
                    src="/assets/images/Home-portrait.png" 
                    alt="RateMe Home" 
                    width={320}
                    height={640}
                    className="w-80 h-auto object-contain"
                  />
                </div>

                {/* Image 2 - middle */}
                <div 
                  className="relative transform hover:scale-105"
                  style={{
                    transform: `translate3d(0, ${verticalScroll}px, 0) scale(${middleScale})`,
                    transition: 'transform 0.1s linear',
                    willChange: 'transform',
                  }}
                >
                  <Image 
                    src="/assets/images/Profile2-portrait.png" 
                    alt="RateMe Profile" 
                    width={320}
                    height={640}
                    className="w-80 h-auto object-contain"
                  />
                </div>

                {/* Image 3 - right */}
                <div 
                  className="relative transform hover:scale-105"
                  style={{
                    transform: `translate3d(${outsideTranslateX}px, ${32 + verticalScroll}px, 0)`,
                    transition: 'transform 0.1s linear',
                    willChange: 'transform',
                  }}
                >
                  <Image 
                    src="/assets/images/Explore-portrait.png" 
                    alt="RateMe Explore" 
                    width={320}
                    height={640}
                    className="w-80 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fading Text Boxes - desktop shows original four; mobile shows single combined */}
      <section className="pb-16">
        <div className="container text-center">
          {isMobileView ? (
            <div className="flex justify-center" style={{ marginTop: '-20px' }}>
              <div
                className="hero-info-combined w-[92%] sm:w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-6 md:px-8"
                style={{
                  backgroundColor: '#F3F4F6',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col items-start text-left">
                    <Star className="w-6 h-6 stroke-1 mb-2" />
                    <h3 className="text-lg tracking-tight">Real-time ratings</h3>
                    <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: "Get instant feedback as users from around the world vote in <span class=\"font-bold\" style=\"color: #5d18eb;\">real-time photo duels</span>. Watch your <span class=\"font-bold\" style=\"color: #5d18eb;\">attractiveness score</span> evolve live, moment by moment." }} />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <TrendingUp className="w-6 h-6 stroke-1 mb-2" />
                    <h3 className="text-lg tracking-tight">League system</h3>
                    <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: "RateMe places you in a <span class=\"font-bold\" style=\"color: #5d18eb;\">league</span> with people who match your level of <span class=\"font-bold\" style=\"color: #5d18eb;\">attractiveness</span> so you only see those in your range. It's the smartest way to discover who truly matches your looks." }} />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <Share2 className="w-6 h-6 stroke-1 mb-2" />
                    <h3 className="text-lg tracking-tight">Share with friends</h3>
                    <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: "Easily share your <span class=\"font-bold\" style=\"color: #5d18eb;\">attractiveness score</span> and profile with friends on popular social media platforms like <span class=\"font-bold\" style=\"color: #5d18eb;\">Instagram, TikTok, Snapchat, and Facebook</span>. Let others see where you stand!" }} />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <BarChart3 className="w-6 h-6 stroke-1 mb-2" />
                    <h3 className="text-lg tracking-tight">Detailed statistics</h3>
                    <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: "See exactly where you stand, who finds you <span class=\"font-bold\" style=\"color: #5d18eb;\">attractive</span>, how much you can <span class=\"font-bold\" style=\"color: #5d18eb;\">improve</span> and unlock deeper insights about your rating." }} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-96" style={{ marginTop: boxesWrapperMarginTop }}>
              {/* Left Side - Two boxes stacked vertically */}
              <div className="flex flex-col gap-6">
                {/* Left Top Box */}
                <div 
                  className="relative"
                  style={{ opacity: textBoxesOpacity, transition: boxOpacityTransition }}
                >
                  <div className="flex justify-between flex-col w-56 h-64" style={{
                    backgroundColor: '#F3F4F6',
                    borderRadius: '16px',
                    padding: '16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
                  }}>
                    <Star className="w-6 h-6 stroke-1" />
                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="text-lg tracking-tight">Real-time ratings</h3>
                      <p className="text-muted-foreground max-w-xs text-sm" dangerouslySetInnerHTML={{ __html: "Get instant feedback as users from around the world vote in <span class=\"font-bold\" style=\"color: #5d18eb;\">real-time photo duels</span>. Watch your <span class=\"font-bold\" style=\"color: #5d18eb;\">attractiveness score</span> evolve live, moment by moment." }} />
                    </div>
                  </div>
                </div>

                {/* Left Bottom Box */}
                <div 
                  className="relative"
                  style={{ opacity: textBoxesOpacity, transition: boxOpacityTransition }}
                >
                  <div className="flex justify-between flex-col w-56 h-64" style={{
                    backgroundColor: '#F3F4F6',
                    borderRadius: '16px',
                    padding: '16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
                  }}>
                    <TrendingUp className="w-6 h-6 stroke-1" />
                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="text-lg tracking-tight">League system</h3>
                      <p className="text-muted-foreground max-w-xs text-sm" dangerouslySetInnerHTML={{ __html: "RateMe places you in a <span class=\"font-bold\" style=\"color: #5d18eb;\">league</span> with people who match your level of <span class=\"font-bold\" style=\"color: #5d18eb;\">attractiveness</span> so you only see those in your range. It's the smartest way to discover who truly matches your looks." }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Two boxes stacked vertically */}
              <div className="flex flex-col gap-6">
                {/* Right Top Box */}
                <div 
                  className="relative"
                  style={{ opacity: textBoxesOpacity, transition: boxOpacityTransition }}
                >
                  <div className="flex justify-between flex-col w-56 h-64" style={{
                    backgroundColor: '#F3F4F6',
                    borderRadius: '16px',
                    padding: '16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
                  }}>
                    <Share2 className="w-6 h-6 stroke-1" />
                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="text-lg tracking-tight">Share with friends</h3>
                      <p className="text-muted-foreground max-w-xs text-sm" dangerouslySetInnerHTML={{ __html: "Easily share your <span class=\"font-bold\" style=\"color: #5d18eb;\">attractiveness score</span> and profile with friends on popular social media platforms like <span class=\"font-bold\" style=\"color: #5d18eb;\">Instagram, TikTok, Snapchat, and Facebook</span>. Let others see where you stand!" }} />
                    </div>
                  </div>
                </div>

                {/* Right Bottom Box */}
                <div 
                  className="relative"
                  style={{ opacity: textBoxesOpacity, transition: boxOpacityTransition }}
                >
                  <div className="flex justify-between flex-col w-56 h-64" style={{
                    backgroundColor: '#F3F4F6',
                    borderRadius: '16px',
                    padding: '16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
                  }}>
                    <BarChart3 className="w-6 h-6 stroke-1" />
                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="text-lg tracking-tight">Detailed statistics</h3>
                      <p className="text-muted-foreground max-w-xs text-sm" dangerouslySetInnerHTML={{ __html: "See exactly where you stand, who finds you <span class=\"font-bold\" style=\"color: #5d18eb;\">attractive</span>, how much you can <span class=\"font-bold\" style=\"color: #5d18eb;\">improve</span> and unlock deeper insights about your rating." }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Extra spacing to make page longer */}
      <div className="h-20"></div>
    </div>
  );
};

export { Hero7 }; 