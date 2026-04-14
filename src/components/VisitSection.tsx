import { MapPin, Clock, Phone, Car, ParkingMeter } from "lucide-react";

const VisitSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <p className="text-gold text-xs tracking-[0.3em] font-sans mb-4">FIND US</p>
          <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-10">
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
          </div>

          {/* Amenities */}
          <div className="mb-10">
            <p className="text-xs tracking-[0.2em] font-sans text-muted-foreground mb-3">AMENITIES</p>
            <div className="flex flex-wrap gap-3">
              {["Free Parking", "Street Parking", "On-site Parking", "Restroom Available"].map((amenity) => (
                <span key={amenity} className="bg-background border border-border px-4 py-2 text-xs font-sans text-foreground">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
