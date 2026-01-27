import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-brown text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-2xl">E</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold">Emmanuel's</span>
                <span className="block text-sm text-cream/70 -mt-1">Afro-Caribbean SuperStore</span>
              </div>
            </div>
            <p className="text-cream/80 leading-relaxed max-w-md mb-6">
              Your premier destination for authentic African and Caribbean groceries in Wakefield. 
              We bring the taste of home to you with quality products and friendly service.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent fill-accent" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="ml-2 text-cream/80">5.0 on Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-cream/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-cream/80">
                  17 Wood Street<br />
                  Wakefield WF1 2EL<br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+447379001242" className="text-cream/80 hover:text-accent transition-colors">
                  +44 7379 001242
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-cream/80">
                  Mon-Sat: 8:30 AM - 6:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm">
              © {currentYear} Emmanuel's Afro-Caribbean SuperStore. All rights reserved.
            </p>
            <a
              href="https://maps.app.goo.gl/BKjLMcp6rET94xz8A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-accent text-sm transition-colors flex items-center gap-2"
            >
              Find us on Google Maps
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
