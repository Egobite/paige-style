import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Fast service and amazing outfits! Paigeclothing never disappoints.",
    name: "Amara O.",
    role: "Verified Customer",
  },
  {
    quote: "Best boutique in Abuja! The styling advice was spot on.",
    name: "Chidi N.",
    role: "Verified Customer",
  },
  {
    quote: "I love the curated collections. Every visit feels special.",
    name: "Fatima K.",
    role: "Verified Customer",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-[0.3em] font-sans mb-4">TESTIMONIALS</p>
          <h2 className="font-serif text-3xl lg:text-5xl text-foreground">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-cream p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-serif text-base text-foreground italic mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="font-sans text-sm text-foreground font-medium">{t.name}</p>
                <p className="font-sans text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick visit badge */}
        <div className="mt-12 flex justify-center">
          <div className="bg-charcoal text-primary-foreground px-6 py-3 flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span className="text-xs tracking-[0.2em] font-sans font-medium">QUICK VISIT FRIENDLY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
