import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import PageLoader from "@/components/PageLoader";
import SkeletonCard from "@/components/SkeletonCard";
import SkeletonGallery from "@/components/SkeletonGallery";

const AnimationShowcase = () => (
  <Layout>
    <PageBanner title="Animation Showcase" subtitle="Professional Loading & Transition Animations" />

    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Page Transitions */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-2">Page Transitions</h2>
          <p className="text-muted-foreground mb-8">All pages now have smooth fade-in animations when they load</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border animate-slideUp">
              <h3 className="font-semibold text-primary mb-3">Fade In Animation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Main content fades in smoothly (500ms) when page loads
              </p>
              <div className="bg-navy-light rounded-lg h-32 flex items-center justify-center">
                <p className="text-primary font-semibold">Content fades in</p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border animate-slideUp" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-semibold text-primary mb-3">Slide Down Animation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Page banners slide down from top with fade effect
              </p>
              <div className="bg-primary/20 rounded-lg h-32 flex items-center justify-center">
                <p className="text-primary font-semibold">Banners slide down</p>
              </div>
            </div>
          </div>
        </div>

        {/* Staggered Animations */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-2">Staggered Item Animations</h2>
          <p className="text-muted-foreground mb-8">Course cards and grid items have sequential slide-up animations</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border animate-slideUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-full h-24 bg-navy-light rounded-lg mb-4 animate-pulse" />
                <div className="h-4 bg-navy-light rounded w-3/4 mb-2 animate-pulse" />
                <div className="h-3 bg-navy-light rounded w-1/2 animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Skeleton Loaders */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-2">Skeleton Loading States</h2>
          <p className="text-muted-foreground mb-8">Pulse animations show content is loading</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-primary mb-4">Card Skeleton</h3>
              <SkeletonCard />
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-4">Gallery Skeleton</h3>
              <SkeletonGallery />
            </div>
          </div>
        </div>

        {/* Page Loader */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-2">Page Loader Animation</h2>
          <p className="text-muted-foreground mb-8">Full-page loading spinner overlay</p>
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="relative h-64 bg-navy-light/20 rounded-lg flex items-center justify-center border-2 border-dashed border-navy-light">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 border-4 border-navy-light rounded-full opacity-20" />
                  <div className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full animate-spin" />
                </div>
                <div className="flex justify-center gap-1 mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                </div>
                <p className="text-primary font-semibold">Loading...</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              This loader appears on page transitions (can be triggered on slow connections)
            </p>
          </div>
        </div>

        {/* Custom Animations */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-2">Custom CSS Animations</h2>
          <p className="text-muted-foreground mb-8">Additional animations available in the design system</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-primary mb-4">Slide Left</h3>
              <div className="bg-accent/20 rounded-lg h-20 flex items-center justify-center animate-slideLeft">
                <p className="text-primary font-semibold">Content slides left</p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-primary mb-4">Slide Right</h3>
              <div className="bg-accent/20 rounded-lg h-20 flex items-center justify-center animate-slideRight">
                <p className="text-primary font-semibold">Content slides right</p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-primary mb-4">Pulse Glow</h3>
              <div className="bg-accent/20 rounded-lg h-20 flex items-center justify-center animate-pulse-glow">
                <p className="text-primary font-semibold">Glowing pulse</p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-primary mb-4">Shimmer</h3>
              <div className="rounded-lg h-20 flex items-center justify-center animate-shimmer">
                <p className="text-primary font-semibold">Shimmer effect</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Summary */}
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 animate-slideUp">
          <h3 className="font-display font-bold text-lg text-primary mb-4">Animations Implemented</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>Page Transitions:</strong> Fade-in on all pages (500ms)</li>
            <li>✓ <strong>Banner Animations:</strong> Slide down effect on page banners</li>
            <li>✓ <strong>Staggered Content:</strong> Sequential slide-up for grid items (0.1s delay)</li>
            <li>✓ <strong>Skeleton Loaders:</strong> Pulse animations for loading states</li>
            <li>✓ <strong>Course Cards:</strong> Staggered entrance animations on Courses page</li>
            <li>✓ <strong>Homepage Sections:</strong> Fade-in and slide animations for all sections</li>
            <li>✓ <strong>Modal Loaders:</strong> Spinning loader with pulsing dots</li>
            <li>✓ <strong>Directional Slides:</strong> Left, Right, Up, Down animations available</li>
            <li>✓ <strong>Special Effects:</strong> Pulse glow and shimmer animations</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default AnimationShowcase;
