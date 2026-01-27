import tropicalImage from "@/assets/products-tropical.jpg";
import spicesImage from "@/assets/products-spices.jpg";
import staplesImage from "@/assets/products-staples.jpg";

const categories = [
  {
    title: "Fresh Tropical Produce",
    description: "Plantains, yams, cassava, scotch bonnet peppers, mangoes, passion fruit, breadfruit and more",
    image: tropicalImage,
    items: ["Plantains", "Yams", "Cassava", "Scotch Bonnet", "Mangoes", "Breadfruit"],
  },
  {
    title: "Spices & Seasonings",
    description: "Authentic jerk seasoning, curry powder, palm oil, shea butter, and traditional African spices",
    image: spicesImage,
    items: ["Jerk Seasoning", "Curry Powder", "Palm Oil", "Allspice", "Shea Butter", "Hot Sauces"],
  },
  {
    title: "Staples & Pantry",
    description: "Rice, yam flour, garri, cassava flour, canned ackee, coconut products, and household essentials",
    image: staplesImage,
    items: ["Rice", "Yam Flour", "Garri", "Canned Ackee", "Coconut Milk", "Cassava Flour"],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Everything You Need for <span className="text-gradient">Authentic Cooking</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From fresh produce to traditional staples, we stock a wide variety of authentic 
            African and Caribbean products to help you create the dishes you love.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-2xl font-bold text-cream">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg mb-6">
            Can't find what you're looking for? We're always happy to help source specific products.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contact us for special orders
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
