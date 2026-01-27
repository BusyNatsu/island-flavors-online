import { MapPin, Star } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-store.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Emmanuel's Afro-Caribbean SuperStore interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/95 via-earth-brown/80 to-earth-brown/60" />
      </div>

      {/* Kente Pattern Overlay */}
      <div className="absolute inset-0 kente-pattern z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-2 rounded-full mb-6 animate-fade-in">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold">5.0 Rating on Google</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-cream mb-6 animate-slide-up leading-tight">
            Authentic African &<br />
            <span className="text-accent">Caribbean Flavours</span>
          </h1>

          <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl animate-slide-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Your one-stop destination for authentic African and Caribbean groceries in Wakefield. 
            From fresh tropical produce to traditional spices, we bring the taste of home to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 transition-opacity text-primary-foreground font-semibold text-lg px-8 py-6 shadow-warm"
            >
              Explore Our Products
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-cream/50 text-cream hover:bg-cream/10 font-semibold text-lg px-8 py-6 backdrop-blur-sm"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>

          {/* Location info */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-cream/70 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              17 Wood Street, Wakefield WF1 2EL, United Kingdom
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;
