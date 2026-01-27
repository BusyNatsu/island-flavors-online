import { Store, Heart, Users, Truck } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Authentic Selection",
    description: "Wide variety of genuine African and Caribbean products from trusted suppliers",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Serving the Wakefield community with care and dedication for over years",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "A family business built on passion for bringing authentic flavours to you",
  },
  {
    icon: Truck,
    title: "Fresh Arrivals",
    description: "Regular deliveries ensuring the freshest produce and products",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Bringing the Taste of <span className="text-gradient">Home</span> to Wakefield
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Emmanuel's Afro-Caribbean SuperStore is your premier destination for authentic African 
            and Caribbean groceries. We stock your favourite products from Ghana, Jamaica, Nigeria, 
            and other countries, making it easy to cook the traditional dishes you love.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5.0", label: "Google Rating" },
            { value: "1000+", label: "Products" },
            { value: "20+", label: "Years Experience" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
