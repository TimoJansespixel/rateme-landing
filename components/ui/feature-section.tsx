"use client"

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Shield, TrendingUp, Heart, Zap } from "lucide-react";

interface FeatureSectionProps {
  title?: string;
  subtitle?: string;
  features?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: string;
  }>;
}

const FeatureSection = ({ 
  title = "Why Choose RateMe?",
  subtitle = "Join thousands of users who are discovering their true rating",
  features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Real-time Ratings",
      description: "Get instant feedback from real people in your area",
      badge: "Popular"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "League System",
      description: "See who's in your league and compare rankings"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Your data stays private and secure with us"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Weekly Updates",
      description: "Upload new photos every week to stay current"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Honest Feedback",
      description: "Get genuine ratings from real people, not bots"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "See your rating and league position immediately"
    }
  ]
}: FeatureSectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Badge */}
              {feature.badge && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                  {feature.badge}
                </Badge>
              )}
              
              <div className="flex justify-between flex-col h-64" style={{
                backgroundColor: '#F3F4F6',
                borderRadius: '16px',
                padding: '16px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
              }}>
                {/* Icon */}
                <div className="text-foreground">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="text-lg tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground max-w-xs text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="px-8 py-3 text-lg">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export { FeatureSection }; 