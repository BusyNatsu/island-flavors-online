import { Star, Quote } from "lucide-react";
import { useMemo } from "react";

const allReviews = [
  {
    name: "Toluwalase Akinjoko",
    rating: 5,
    text: "I'm really happy with my order! The delivery was on time and the prices were very reasonable. Everything came just as expected, great quality and good service. I'll definitely be ordering again!",
    date: "3 months ago",
  },
  {
    name: "Ajewole Josephine",
    rating: 5,
    text: "Afro Goods is the real deal. They offer exceptional service, great prices and their delivery is top-notch. Don't look too far, patronise them NOW!",
    date: "3 months ago",
  },
  {
    name: "Benjamin Olayemi",
    rating: 5,
    text: "Glad I found this place in Bradford. The best African store in this town for real and reasonable prices!",
    date: "3 months ago",
  },
  {
    name: "Ezekiel Koleade",
    rating: 5,
    text: "Very friendly and well accommodating. Goods are very affordable.",
    date: "a month ago",
  },
  {
    name: "Moyomola Ogunmola",
    rating: 5,
    text: "Shopping experience went smoothly and home delivery of goods bought came in fresh and well packed",
    date: "3 months ago",
  },
  {
    name: "Kenneth Alizor",
    rating: 5,
    text: "Wow product came in fresh and delivery was timely. Giving you a 100%",
    date: "3 months ago",
  },
];

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Reviews = () => {
  // Randomize reviews on each page load
  const reviews = useMemo(() => shuffleArray(allReviews), []);

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
