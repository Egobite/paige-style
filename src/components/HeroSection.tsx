import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 lg:pb-32 lg:items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/1a1fcfe94_images6.jpeg"
          alt="Fashion editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-20 max-w-3xl">
        <p className="text-primary-foreground/80 text-xs tracking-[0.3em] font-sans mb-6">
          EFFORTLESS STYLE · EVERYDAY LUXURY
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6">
          Style That <br />
          <em>Speaks</em> Before <br />
          You Do
        </h1>
        <p className="text-primary-foreground/70 font-sans text-sm lg:text-base max-w-md mb-8 leading-relaxed">
          Discover curated fashion pieces crafted for the modern spirit, in the heart of Abuja.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-primary-foreground text-xs tracking-[0.2em] font-sans font-medium hover:bg-gold-light transition-colors"
          >
            SHOP NOW <ArrowRight size={14} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 border border-primary-foreground/50 px-8 py-4 text-primary-foreground text-xs tracking-[0.2em] font-sans font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            VISIT STORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
