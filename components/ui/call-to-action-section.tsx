"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export function CallToActionSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const words = [
    {
      text: "Be",
      className: "text-[#5d18eb]",
    },
    {
      text: "one",
      className: "text-[#5d18eb]",
    },
    {
      text: "of",
      className: "text-[#5d18eb]",
    },
    {
      text: "the",
      className: "text-[#5d18eb]",
    },
    {
      text: "first",
      className: "text-[#5d18eb]",
    },
    {
      text: "to",
      className: "text-[#5d18eb]",
    },
    {
      text: "join!",
      className: "text-[#5d18eb]",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Subscription failed");
      }
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      alert("We couldn't add your email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-base mb-8">
              Be one of the first to experience the future of attraction scoring.
            </p>
            
            <div className="mb-12">
              <TypewriterEffectSmooth 
                words={words} 
                className="text-center"
                cursorClassName="bg-[#5d18eb]"
              />
            </div>

            <div className="mx-auto max-w-md animate-fade-in-up animation-delay-400">
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex items-center gap-2 rounded-xl border bg-background/50 backdrop-blur-sm p-2 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-2 flex-1 px-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
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
                        <span className="text-xs">Join Waitlist</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    )}
                  </button>
                </div>
              </form>
              
              {isSubmitted && (
                <p className="mt-3 text-sm text-green-600 animate-fade-in">
                  Thanks! We'll notify you when it's ready.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RateMe Logo */}
      <div className="pt-2 pb-8 flex justify-center bg-gradient-to-b from-gray-50 to-white">
        <img 
          src="/assets/images/Logo RateMe.png" 
          alt="RateMe Logo" 
          className="h-10 w-auto object-contain"
        />
      </div>
    </>
  );
} 