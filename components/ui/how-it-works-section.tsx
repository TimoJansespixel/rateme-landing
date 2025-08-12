"use client"

import React from "react";
import Image from "next/image";
import { User, Star, TrendingUp, Check } from 'lucide-react';

const steps = [
  { 
    title: 'Create Your Profile', 
    description: 'Upload photos that show the real you and set up your profile',
    content: 'Start by uploading 3-5 of your best photos. Make sure they\'re clear, well-lit, and show your personality. This is your chance to make a great first impression!',
    icon: User
  },
  { 
    title: 'Get Rated by Peers', 
    description: 'Rate others and receive honest ratings from real people',
    content: 'Your photos will be rated by real people in your area. Our algorithm ensures fair and honest feedback from genuine users, not bots.',
    icon: Star
  },
  { 
    title: 'See Your League', 
    description: 'Discover your score, see your rank, and connect with your league.',
    content: 'Find out your rating and see who\'s in your league. Compare yourself to others and understand where you stand in your area.',
    icon: TrendingUp
  },
  { 
    title: 'Weekly Updates', 
    description: 'Improve your looks and upload new photos every week to stay current',
    content: 'Keep your profile fresh by uploading new photos weekly. This helps you get more accurate ratings and stay competitive in your league.',
    icon: Check
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-rateme-works" className="py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            How RateMe Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in just 4 simple steps and discover your true rating
          </p>
        </div>

        {/* Stepper Menu (Static) */}
        <div className="max-w-4xl mx-auto">
          {/* Stepper Navigation */}
          <nav className="group/stepper-nav inline-flex w-full flex-row">
            {steps.map((step, index) => (
              <div key={index} className="group/step flex items-center justify-center flex-1 relative">
                <div className="flex items-center gap-1.5 cursor-default">
                  <div className="relative flex items-center overflow-hidden justify-center size-6 shrink-0 border-background rounded-full text-xs" style={{ backgroundColor: '#5d18eb', color: 'white' }}>
                    <div className="absolute">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <h3 className="text-sm font-medium leading-none">{step.title}</h3>
                    <div className="text-sm text-muted-foreground">{step.description}</div>
                  </div>
                </div>
                {steps.length > index + 1 && (
                  <div className="m-0.5 rounded-full bg-muted h-0.5 flex-1 mx-2.5"></div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to discover your true rating?
          </p>
          <button 
            className="px-8 py-3 rounded-lg font-semibold transition-colors" 
            style={{ backgroundColor: '#5d18eb', color: 'white' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Get early access
          </button>
        </div>

        {/* Mobile-only full-width screenshot under CTA */}
        <div className="how-works-screenshot">
          <Image
            src="/assets/images/Screens.RateMe.Mobile%20.png"
            alt="RateMe app screenshots"
            width={1200}
            height={2000}
            className="how-works-screenshot__img"
            priority
          />
        </div>
      </div>
    </section>
  );
} 