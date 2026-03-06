# Animation Code Examples & Reference

## Quick Reference

### Basic Animations

```tsx
// Simple fade-in
<div className="animate-fadeIn">
  Content appears smoothly
</div>

// Slide up entrance
<div className="animate-slideUp">
  Content slides up with fade
</div>

// Staggered items (RECOMMENDED FOR GRIDS)
{items.map((item, index) => (
  <div 
    className="animate-slideUp"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {item}
  </div>
))}
```

---

## Real-World Examples from Codebase

### 1. Homepage Hero Section
```tsx
// From src/pages/Index.tsx
<div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto animate-slideUp">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
    Shree KGK Vocational Education Institute
  </h1>
  {/* Hero content appears with slide-up effect */}
</div>
```

### 2. Staggered Highlights (4 items)
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
  {highlights.map((h, index) => (
    <div 
      key={h.text} 
      className="bg-primary-foreground/15 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all animate-slideUp" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h.icon className="w-6 h-6 text-accent mx-auto mb-2" />
      <span className="text-primary-foreground text-sm font-semibold">{h.text}</span>
    </div>
  ))}
</div>
```

**Visual Timeline:**
```
0ms: Item 1 starts
100ms: Item 1 at 50%, Item 2 starts
200ms: Item 1 done, Item 2 at 50%, Item 3 starts
300ms: Item 2 done, Item 3 at 50%, Item 4 starts
500ms: All items fully visible
```

### 3. Statistics Grid (4 numbers)
```tsx
<section className="bg-primary text-primary-foreground py-12 animate-slideUp">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={stat.label} 
          className="text-center animate-slideUp" 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
            {stat.number}
          </div>
          <div className="text-sm md:text-base opacity-90">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>
```

### 4. Two-Column Layout (Left/Right Slides)
```tsx
<div className="grid md:grid-cols-2 gap-8 items-center">
  {/* Left side slides in from right */}
  <div className="animate-slideLeft">
    <h3 className="font-display font-bold text-xl text-primary mb-4">
      Our Mission
    </h3>
    <p className="text-muted-foreground">Content here</p>
  </div>

  {/* Right side slides in from left */}
  <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 animate-slideRight">
    <h3 className="font-display font-bold text-2xl text-primary mb-6">
      Our Values
    </h3>
    {/* Values content */}
  </div>
</div>
```

### 5. Course Cards with Stagger (9 items)
```tsx
{/* From src/pages/Courses.tsx */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {courseSummaries.map((c, index) => (
    <Link
      key={c.slug}
      to={`/courses/${c.slug}`}
      className="bg-card rounded-xl p-6 shadow-sm card-hover border border-border group block hover:shadow-md transition-shadow animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="rounded-xl overflow-hidden mb-4 border border-border/60">
        <img
          src={c.image}
          alt={`${c.name} course`}
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <h3 className="font-display font-bold text-lg text-primary mb-2">{c.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{c.desc}</p>
    </Link>
  ))}
</div>
```

**Timeline for 9 items:**
- Item 1: Starts at 0ms
- Item 2: Starts at 100ms
- Item 3: Starts at 200ms
- ...
- Item 9: Starts at 800ms
- All complete by: 1300ms total

### 6. "Why Choose Us" Grid (6 items, 0.08s stagger)
```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {whyUs.map((item, index) => (
    <div 
      key={item.text} 
      className="bg-card rounded-xl p-6 card-hover shadow-sm border border-border hover:border-accent/40 transition-all animate-slideUp" 
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <item.icon className="w-10 h-10 text-accent mb-4" />
      <h3 className="font-semibold text-primary text-lg mb-2">{item.text}</h3>
    </div>
  ))}
</div>
```

**Faster stagger (0.08s instead of 0.1s):**
- Creates quicker cascading effect
- Total wave: 6 items × 80ms = 480ms
- All complete by: 980ms

### 7. Testimonials with Stagger (3 items)
```tsx
<div className="grid md:grid-cols-3 gap-6">
  {testimonials.map((testimonial, index) => (
    <div 
      key={testimonial.name} 
      className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all animate-slideUp" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl">{testimonial.image}</div>
        <div>
          <h4 className="font-semibold text-primary">{testimonial.name}</h4>
          <p className="text-xs text-accent font-medium">{testimonial.course}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground italic">{testimonial.text}</p>
    </div>
  ))}
</div>
```

---

## Component Examples

### PageLoader Component
```tsx
// src/components/PageLoader.tsx
const PageLoader = ({ text = "Loading..." }: { text?: string } = {}) => (
  <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
    <div className="text-center">
      {/* Spinner with rotating border */}
      <div className="relative w-16 h-16 mx-auto mb-4">
        <div className="absolute inset-0 border-4 border-navy-light rounded-full opacity-20" />
        <div className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full animate-spin" />
      </div>
      
      {/* Pulsing dots with staggered animation */}
      <div className="flex justify-center gap-1 mb-4">
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div 
          className="w-2 h-2 bg-accent rounded-full animate-pulse" 
          style={{ animationDelay: "0.1s" }} 
        />
        <div 
          className="w-2 h-2 bg-accent rounded-full animate-pulse" 
          style={{ animationDelay: "0.2s" }} 
        />
      </div>
      
      <p className="text-primary font-semibold">{text}</p>
    </div>
  </div>
);
```

### SkeletonCard Component
```tsx
// src/components/SkeletonCard.tsx
const SkeletonCard = () => (
  <div className="bg-card rounded-xl p-6 border border-border">
    <div className="w-12 h-12 rounded-lg bg-navy-light mb-4 animate-pulse" />
    <div className="h-6 bg-navy-light rounded mb-3 w-3/4 animate-pulse" />
    <div className="space-y-2">
      <div className="h-4 bg-navy-light rounded w-full animate-pulse" />
      <div className="h-4 bg-navy-light rounded w-5/6 animate-pulse" />
      <div className="h-4 bg-navy-light rounded w-4/5 animate-pulse" />
    </div>
  </div>
);
```

### SkeletonGallery Component
```tsx
// src/components/SkeletonGallery.tsx
const SkeletonGallery = () => (
  <div className="space-y-4">
    {/* Main image placeholder */}
    <div className="w-full aspect-video bg-navy-light animate-pulse rounded-lg" />
    
    {/* Thumbnail strip */}
    <div className="flex gap-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-24 h-20 bg-navy-light animate-pulse rounded-md"
        />
      ))}
    </div>
  </div>
);
```

### Layout Component (Page Wrapper)
```tsx
// src/components/Layout.tsx
const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    {/* All page content fades in */}
    <main className="flex-1 animate-fadeIn">{children}</main>
    <Footer />
  </div>
);
```

### PageBanner Component
```tsx
// src/components/PageBanner.tsx
const PageBanner = ({ title, subtitle }: PageBannerProps) => (
  {/* Banner slides down on entry */}
  <section className="bg-primary text-primary-foreground py-16 px-4 text-center animate-slideDown">
    <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">{title}</h1>
    {subtitle && <p className="text-lg opacity-80 max-w-xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
  </section>
);
```

---

## CSS Animations Defined in index.css

```css
@layer utilities {
  /* Fade In - Simple opacity */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in;
  }

  /* Slide Up - Bottom to top with fade */
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-slideUp {
    animation: slideUp 0.5s ease-out;
  }

  /* Slide Down - Top to bottom */
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-slideDown {
    animation: slideDown 0.5s ease-out;
  }

  /* Slide Left - Right to left */
  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .animate-slideLeft {
    animation: slideLeft 0.5s ease-out;
  }

  /* Slide Right - Left to right */
  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .animate-slideRight {
    animation: slideRight 0.5s ease-out;
  }

  /* Pulse Glow - Expanding shadow */
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7);
    }
    50% {
      box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
    }
  }
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }

  /* Shimmer - Light sweep */
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  .animate-shimmer {
    background: linear-gradient(
      90deg,
      var(--navy-light) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      var(--navy-light) 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
  }
}
```

---

## Common Patterns

### Pattern 1: Section with Title & Staggered Items
```tsx
<section className="section-padding bg-background animate-fadeIn">
  <div className="max-w-6xl mx-auto">
    {/* Title slides up first */}
    <div className="text-center mb-12 animate-slideUp">
      <h2 className="section-title">Section Title</h2>
      <div className="gold-divider" />
    </div>
    
    {/* Items cascade in */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div 
          key={item.id}
          className="bg-card rounded-xl p-6 animate-slideUp"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {item.content}
        </div>
      ))}
    </div>
  </div>
</section>
```

### Pattern 2: Split Column Layout
```tsx
<section className="animate-fadeIn">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    {/* Left: slides in from right */}
    <div className="animate-slideLeft">
      Content
    </div>
    
    {/* Right: slides in from left */}
    <div className="animate-slideRight">
      Content
    </div>
  </div>
</section>
```

### Pattern 3: Conditional Loading State
```tsx
{isLoading ? (
  <SkeletonCard />
) : (
  <div className="animate-slideUp">
    Actual content
  </div>
)}
```

---

## Customization Examples

### Slower Stagger (150ms between items)
```tsx
style={{ animationDelay: `${index * 0.15}s` }}
```

### Different Easing Function
Edit in `index.css`:
```css
.animate-slideUp {
  animation: slideUp 0.5s ease-in-out; /* Changed from ease-out */
}
```

### Longer Duration
```css
.animate-slideUp {
  animation: slideUp 0.8s ease-out; /* Changed from 0.5s */
}
```

### Add to Specific Class
```tsx
<div className="animate-slideUp hover:animate-none">
  Stops animating on hover
</div>
```

---

This document covers all animation implementations with code examples and best practices.
