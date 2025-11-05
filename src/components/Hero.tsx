import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-silk.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury silk sarees at Madhan Silks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Elegance Woven in{" "}
            <span className="text-primary">Tradition</span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover exquisite silk sarees, traditional wear, and modern outfits for every occasion. 
            Your destination for timeless elegance in Salem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/collections">
              <Button size="lg" className="gap-2 shadow-elegant">
                Explore Collections
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2">
                Visit Our Store
              </Button>
            </Link>
          </div>
          
          {/* Decorative element */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-gold" />
            <p className="font-playfair text-sm text-muted-foreground italic">
              Your Tradition, Our Passion – Madhan Silks, Salem
            </p>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default Hero;
