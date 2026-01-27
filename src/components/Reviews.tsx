import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah O.",
    rating: 5,
    text: "Amazing store! Finally found authentic Nigerian ingredients in Wakefield. The staff are so friendly and helpful. It feels like home!",
    date: "2 weeks ago",
  },
  {
    name: "Marcus J.",
    rating: 5,
    text: "Best Afro-Caribbean store in the area. Great selection of Jamaican products, fresh produce, and the prices are very reasonable.",
    date: "1 month ago",
  },
  {
    name: "Priscilla A.",
    rating: 5,
    text: "I drive from Leeds just to shop here! The quality of the products is excellent and they always have what I need for my cooking.",
    date: "3 weeks ago",
  },
  {
    name: "David K.",
    rating: 5,
    text: "Wonderful family-run business. They really care about their customers and the community. Highly recommend!",
    date: "1 month ago",
  },
  {
    name: "Grace M.",
    rating: 5,
    text: "The fresh plantains and yams here are the best! And they have hard-to-find items that I couldn't get anywhere else.",
    date: "2 months ago",
  },
  {
    name: "Emmanuel T.",
    rating: 5,
    text: "Perfect store for all your African and Caribbean needs. Great spices, fresh produce, and authentic products.",
    date: "1 month ago",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Customer Reviews</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">on Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {review.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/BKjLMcp6rET94xz8A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-card hover:shadow-elevated transition-all font-semibold text-foreground"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
