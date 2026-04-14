const BoutiqueSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/9966d245c_images5.jpeg"
              alt="Paigeclothing boutique"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-primary-foreground/90 px-4 py-3">
              <p className="text-xs tracking-[0.2em] font-sans text-foreground">EST. ABUJA</p>
              <p className="font-serif text-lg text-foreground">Wuye</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-gold text-xs tracking-[0.3em] font-sans mb-4">THE BOUTIQUE</p>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-tight mb-6">
              Where Fashion <br /><em>Meets Intention</em>
            </h2>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-10 max-w-lg">
              Located in the vibrant Wuye Ultra Modern Market, Paigeclothing is a go-to destination for fashion lovers seeking stylish, high-quality outfits for every occasion. We believe that style should be effortless—and luxury, everyday.
            </p>

            <div className="space-y-6">
              {[
                { title: "Curated Collections", desc: "Every piece is handpicked to ensure quality and style." },
                { title: "Personal Experience", desc: "One-on-one styling assistance for the perfect look." },
                { title: "Quick & Convenient", desc: "Fast service designed for your busy lifestyle." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-gold pl-4">
                  <h4 className="font-serif text-base text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground font-sans text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoutiqueSection;
