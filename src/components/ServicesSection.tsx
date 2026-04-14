import { Truck, MapPin, Sparkles, CreditCard } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Delivery",
    desc: "We deliver across Abuja and beyond with care and speed.",
  },
  {
    icon: MapPin,
    title: "In-Store Pickup",
    desc: "Order online and pick up at our Wuye location.",
  },
  {
    icon: Sparkles,
    title: "Styling Assistance",
    desc: "Get personalized outfit recommendations from our stylists.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    desc: "Visa, Mastercard, debit cards, and NFC mobile payments.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-[0.3em] font-sans mb-4">OUR SERVICES</p>
          <h2 className="font-serif text-3xl lg:text-5xl text-foreground">The Paige Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-background p-8 text-center border border-border">
              <service.icon className="mx-auto mb-4 text-gold" size={28} strokeWidth={1.5} />
              <h3 className="font-serif text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
