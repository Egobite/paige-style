import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, MessageCircle, Instagram, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/dff01c40c_paigeclothing-20260413-0006.jpg"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-primary-foreground/80 text-xs tracking-[0.3em] font-sans mb-4">GET IN TOUCH</p>
          <h1 className="font-serif text-4xl lg:text-6xl text-primary-foreground">Contact Us</h1>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="text-gold text-xs tracking-[0.3em] font-sans mb-4">FIND US</p>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-10">
                Visit Our <em>Atelier</em>
              </h2>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-foreground mb-1">Address</h4>
                    <p className="font-sans text-sm text-muted-foreground">
                      Wuye Ultra Modern Market,<br />
                      Wuye, Abuja 900108, FCT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-foreground mb-1">Store Hours</h4>
                    <p className="font-sans text-sm text-muted-foreground">
                      Monday – Saturday: 9 AM – 6 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-foreground mb-1">Phone</h4>
                    <a href="tel:09099998808" className="font-sans text-sm text-gold hover:underline">
                      0909 999 8808
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-foreground mb-1">Email</h4>
                    <a href="mailto:hello@paigeclothing.com" className="font-sans text-sm text-gold hover:underline">
                      hello@paigeclothing.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social / WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/2349099998808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-primary-foreground px-6 py-4 text-xs tracking-[0.2em] font-sans font-medium hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={16} />
                  CHAT ON WHATSAPP
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 border border-border px-6 py-4 text-xs tracking-[0.2em] font-sans font-medium text-foreground hover:bg-charcoal hover:text-primary-foreground transition-colors"
                >
                  <Instagram size={16} />
                  FOLLOW ON INSTAGRAM
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-background p-8 lg:p-12 border border-border">
              <h3 className="font-serif text-2xl text-foreground mb-2">Send a Message</h3>
              <p className="font-sans text-sm text-muted-foreground mb-8">
                Have a question or want to schedule a styling session? Drop us a line.
              </p>
              <form className="space-y-5">
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] text-foreground mb-2">NAME</label>
                  <input
                    type="text"
                    className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] text-foreground mb-2">EMAIL</label>
                  <input
                    type="email"
                    className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] text-foreground mb-2">PHONE</label>
                  <input
                    type="tel"
                    className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="0909 999 8808"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] text-foreground mb-2">MESSAGE</label>
                  <textarea
                    rows={4}
                    className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold px-8 py-4 text-primary-foreground text-xs tracking-[0.2em] font-sans font-medium hover:bg-gold-light transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.2em] font-sans text-muted-foreground mb-4">AMENITIES</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Free Parking", "Street Parking", "On-site Parking", "Restroom Available"].map((amenity) => (
              <span key={amenity} className="bg-cream border border-border px-4 py-2 text-xs font-sans text-foreground">
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
