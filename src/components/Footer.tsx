import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Madhan Silks</h3>
            <p className="font-inter text-sm opacity-90 mb-4">
              Your Tradition, Our Passion. Discover exquisite silk sarees and traditional wear in Salem since decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-accent transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 font-inter text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Main Street, Salem, Tamil Nadu - 636001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@madhansilks.com" className="hover:text-accent transition-colors">
                  info@madhansilks.com
                </a>
              </li>
            </ul>
          </div>

          {/* Timing */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Shop Timings</h4>
            <div className="flex items-start gap-2 font-inter text-sm">
              <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
              <div>
                <p>Monday - Saturday</p>
                <p className="opacity-90">9:00 AM - 9:00 PM</p>
                <p className="mt-2">Sunday</p>
                <p className="opacity-90">10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="font-inter text-sm opacity-90">
            © 2025 Madhan Silks, Salem. All rights reserved. | Designed with elegance and tradition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
