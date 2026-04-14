import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <h3 className="font-serif text-2xl lg:text-4xl text-foreground mb-4">
          Speak with an <br /><em>Abuja Stylist</em>
        </h3>
        <p className="text-muted-foreground font-sans text-sm mb-8 leading-relaxed">
          Get personalized outfit recommendations, check availability, or schedule a styling session.
        </p>
        <a
          href="https://wa.me/2349099998808"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-primary-foreground px-8 py-4 text-xs tracking-[0.2em] font-sans font-medium hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={16} />
          CHAT ON WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default CTASection;
