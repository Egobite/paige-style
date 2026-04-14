import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-4">
              Paige<em className="not-italic font-light">clothing</em>
            </h3>
            <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed">
              Curated fashion for the modern spirit.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs tracking-[0.2em] font-sans mb-4 text-primary-foreground/50">QUICK LINKS</p>
            <div className="space-y-2">
              {["Home", "Shop", "Sale", "Lookbook", "About Us"].map((link) => (
                <a key={link} href="#" className="block font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] font-sans mb-4 text-primary-foreground/50">GET IN TOUCH</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                <span className="font-sans text-sm text-primary-foreground/70">0909 999 8808</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5" />
                <span className="font-sans text-sm text-primary-foreground/70">
                  Wuye Ultra Modern Market,<br />Wuye, Abuja 900108, FCT
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-gold mt-0.5" />
                <span className="font-sans text-sm text-primary-foreground/70">
                  Mon – Sat: 9AM – 6PM<br />Sunday: Closed
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-[0.2em] font-sans mb-4 text-primary-foreground/50">SERVICES</p>
            <div className="space-y-2">
              {["Delivery Available", "In-Store Pickup", "Styling Assistance", "Free Parking"].map((s) => (
                <p key={s} className="font-sans text-sm text-primary-foreground/70">{s}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-primary-foreground/40">
            © 2026 Paigeclothing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Visa", "Mastercard", "NFC Payments"].map((p) => (
              <span key={p} className="font-sans text-xs text-primary-foreground/40">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
