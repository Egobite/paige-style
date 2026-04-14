import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lookbookImages = [
  {
    src: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/0b36c45ec_paigeclothing-20260413-0001.jpg",
    title: "Tailored Elegance",
  },
  {
    src: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/dff01c40c_paigeclothing-20260413-0006.jpg",
    title: "Bold Statement",
  },
  {
    src: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/d9df91216_paigeclothing-20260413-0002.jpg",
    title: "Power Magenta",
  },
  {
    src: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/86b453987_paigeclothing-20260413-0007.jpg",
    title: "Satin Dreams",
  },
  {
    src: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/43c93d376_paigeclothing-20260413-0008.jpg",
    title: "The Collection",
  },
  {
    src: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/f63855a79_images4.jpeg",
    title: "Heritage Green",
  },
  {
    src: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/1a1fcfe94_images6.jpeg",
    title: "Floral Organza",
  },
  {
    src: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/9966d245c_images5.jpeg",
    title: "Traditional Royale",
  },
];

const Lookbook = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/1a1fcfe94_images6.jpeg"
            alt="Lookbook"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-primary-foreground/80 text-xs tracking-[0.3em] font-sans mb-4">LOOKBOOK</p>
          <h1 className="font-serif text-4xl lg:text-6xl text-primary-foreground">
            The <em>Edit</em>
          </h1>
          <p className="text-primary-foreground/60 font-sans text-sm mt-4 max-w-md mx-auto">
            A visual journey through our latest curated collection.
          </p>
        </div>
      </section>

      {/* Lookbook grid */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {lookbookImages.map((img, i) => (
              <a
                href="#"
                key={i}
                className={`group relative overflow-hidden ${
                  i === 0 || i === 5 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    i === 0 || i === 5 ? "aspect-[16/9]" : "aspect-[3/4]"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-primary-foreground font-serif text-lg mb-1">{img.title}</p>
                    <span className="text-primary-foreground/80 text-xs tracking-[0.2em] font-sans">
                      SHOP THE LOOK
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lookbook;
