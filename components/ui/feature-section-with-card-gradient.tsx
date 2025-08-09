import React from "react";
import { useId } from "react";

export function FeaturesSectionWithCardGradient() {
  return (
    <div className="features-section py-8 lg:py-16 relative z-10" style={{ backgroundColor: '#ffffff' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature, idx) => (
          <div
            key={feature.title}
            className={`flex flex-col h-56 hero-info-box ${idx % 2 === 0 ? 'left' : 'right'}`}
            style={{
              backgroundColor: '#F3F4F6',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
            }}
            ref={(el) => {
              if (!el) return;
              if (typeof window === 'undefined') return;
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    el.classList.add('in-view');
                  } else {
                    el.classList.remove('in-view');
                  }
                });
              }, { 
                threshold: 0.1,
                rootMargin: '-50px 0px -50px 0px' // Only trigger when box is well into viewport
              });
              observer.observe(el);
            }}
          >
            <div className="text-foreground mb-4">
              {/* Icon placeholder - removed grid background */}
            </div>
            <div className="flex flex-col hero-box-text">
              <h3 className="text-lg tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground max-w-xs text-sm" dangerouslySetInnerHTML={{ __html: feature.description }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "1v1 Duels",
    description:
      "Get rated by <span class=\"font-bold\" style=\"color: #5d18eb;\">real people</span> through one on one photo duels. Your score is calculated using a precise <span class=\"font-bold\" style=\"color: #5d18eb;\">Elo system</span> that ensures fairness and accuracy, just like in chess.",
  },
  {
    title: "Anonymity and Safety",
    description:
      "Your personal rating is always <span class=\"font-bold\" style=\"color: #5d18eb;\">private</span> and never shown to others. You can choose to stay <span class=\"font-bold\" style=\"color: #5d18eb;\">anonymous</span> in your league through settings, but keep in mind this means you won't be able to connect with other users in your league.",
  },
  {
    title: "Instagram Integration",
    description:
      "See a few new people from your <span class=\"font-bold\" style=\"color: #5d18eb;\">league</span> each day, from your own and the opposite gender. Check out their <span class=\"font-bold\" style=\"color: #5d18eb;\">Instagram profiles</span> and follow or message them to expand your social circle beyond the app with people in your league.",
  },
  {
    title: "Weekly Profile Refresh",
    description:
      "Upload a new <span class=\"font-bold\" style=\"color: #5d18eb;\">profile photo</span> every week to keep your presence fresh and see how your <span class=\"font-bold\" style=\"color: #5d18eb;\">score evolves</span> over time.",
  },
  {
    title: "Side Profile Option",
    description:
      "Add a <span class=\"font-bold\" style=\"color: #5d18eb;\">side profile photo</span> along with your front view to allow for a more <span class=\"font-bold\" style=\"color: #5d18eb;\">precise and fair rating</span> from others.",
  },
  {
    title: "First With Real People",
    description:
      "While many apps rely on <span class=\"font-bold\" style=\"color: #5d18eb;\">AI</span> to rate attractiveness, RateMe stands out as the first app that delivers <span class=\"font-bold\" style=\"color: #5d18eb;\">genuine opinions from real people</span>. Because when it comes to how attractive you are, only <span class=\"font-bold\" style=\"color: #5d18eb;\">human judgment</span> truly matters.",
  },
  {
    title: "Attraction-Based Ratings",
    description:
      "Currently, men are rated by women and women by men. In the future, we plan to support ratings based on everyone's individual <span class=\"font-bold\" style=\"color: #5d18eb;\">attraction preferences and identities</span>. To make this happen, we need more users to join the community.",
  },
  {
    title: "Secure and Private",
    description:
      "Your data is <span class=\"font-bold\" style=\"color: #5d18eb;\">safe and confidential</span>. You can delete your information anytime. We take your <span class=\"font-bold\" style=\"color: #5d18eb;\">privacy</span> seriously and protect your information at all times.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
} 