import { AnimatedShinyTextDemo } from "@/components/blocks/animated-shiny-text";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export default function AnimatedShinyDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Animated Shiny Text Demo
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A beautiful animated text component with shimmer effect
          </p>
        </div>
        
        <AnimatedShinyTextDemo />
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8">
            Usage Examples
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Example 1 */}
            <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Basic Usage</h3>
              <AnimatedShinyText className="text-sm">
                ✨ Simple animated text
              </AnimatedShinyText>
            </div>
            
            {/* Example 2 */}
            <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Custom Width</h3>
              <AnimatedShinyText className="text-sm" shimmerWidth={150}>
                🎨 Custom shimmer width
              </AnimatedShinyText>
            </div>
            
            {/* Example 3 */}
            <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Longer Text</h3>
              <AnimatedShinyText className="text-sm">
                🌟 This is a longer animated text example with more content
              </AnimatedShinyText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 