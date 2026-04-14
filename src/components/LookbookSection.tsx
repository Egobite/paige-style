const lookbookImages = [
  "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/0b36c45ec_paigeclothing-20260413-0001.jpg",
  "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/dff01c40c_paigeclothing-20260413-0006.jpg",
  "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/d9df91216_paigeclothing-20260413-0002.jpg",
  "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/86b453987_paigeclothing-20260413-0007.jpg",
  "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/43c93d376_paigeclothing-20260413-0008.jpg",
  "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/f63855a79_images4.jpeg",
];

const LookbookSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] font-sans mb-4">LOOKBOOK</p>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground">
              The <em>Edit</em>
            </h2>
          </div>
          <a href="#" className="text-foreground text-xs tracking-[0.2em] font-sans hover:opacity-70 transition-opacity">
            VIEW ALL →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {lookbookImages.map((img, i) => (
            <a href="#" key={i} className="group relative overflow-hidden">
              <img
                src={img}
                alt={`Lookbook ${i + 1}`}
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center pb-6">
                <span className="text-primary-foreground text-xs tracking-[0.2em] font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  SHOP THE LOOK
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
