import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const businessHours = [
    { day: "Monday - Friday", hours: "8:30 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:30 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Visit Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Find <span className="text-gradient">Afro Goods</span> Store
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We're located in Bradford, easily accessible and with a warm welcome waiting for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-elevated h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.5!2d-1.7519!3d53.7676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be1f1e3dc6c69%3A0x0!2sBradford%20BD4%207NB!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Afro Goods Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Afro Goods<br />
                    Bradford BD4 7NB<br />
                    United Kingdom
                  </p>
                  <a
                    href="https://maps.app.goo.gl/wuKMRX8apwWhvYyu9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold mt-3 hover:underline"
                  >
                    Get Directions <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Phone</h3>
                  <a
                    href="tel:+447950642994"
                    className="text-xl text-primary font-semibold hover:underline"
                  >
                    +44 7950 642994
                  </a>
                  <p className="text-muted-foreground mt-1">
                    Call us for inquiries or special orders
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Opening Hours</h3>
                  <div className="space-y-2">
                    {businessHours.map((item) => (
                      <div key={item.day} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-semibold text-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="w-full bg-gradient-hero hover:opacity-90 transition-opacity text-primary-foreground font-semibold text-lg py-6 shadow-warm"
              asChild
            >
              <a href="tel:+447950642994">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
