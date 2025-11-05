import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const offers = [
  {
    title: "Festival Special",
    discount: "Up to 30% OFF",
    description: "On all silk sarees and traditional wear",
    badge: "Limited Time",
  },
  {
    title: "Wedding Season Offer",
    discount: "Buy 2 Get 1 Free",
    description: "On select wedding collection items",
    badge: "Trending",
  },
  {
    title: "Kids Special",
    discount: "Flat 25% OFF",
    description: "On all kids ethnic wear and accessories",
    badge: "New",
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-accent" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              Special Offers
            </h2>
            <Sparkles className="h-6 w-6 text-accent" />
          </div>
          <p className="font-inter text-lg opacity-90 max-w-2xl mx-auto">
            Don't miss out on our exclusive deals and festive offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {offers.map((offer, index) => (
            <Card
              key={offer.title}
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  {offer.badge}
                </Badge>
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  {offer.title}
                </h3>
                <p className="text-3xl font-bold text-accent mb-3">
                  {offer.discount}
                </p>
                <p className="font-inter text-sm opacity-90">
                  {offer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="shadow-gold"
            >
              Visit Store for More Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
