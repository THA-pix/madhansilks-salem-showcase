import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import womenImage from "@/assets/women-collection.jpg";
import menImage from "@/assets/men-collection.jpg";
import kidsImage from "@/assets/kids-collection.jpg";
import weddingImage from "@/assets/wedding-collection.jpg";

const collections = [
  {
    title: "Women's Collection",
    description: "Exquisite sarees, churidars, and traditional wear",
    image: womenImage,
    href: "/collections#women",
  },
  {
    title: "Men's Collection",
    description: "Elegant kurtas, shirts, and ethnic wear",
    image: menImage,
    href: "/collections#men",
  },
  {
    title: "Kids Collection",
    description: "Adorable traditional outfits for little ones",
    image: kidsImage,
    href: "/collections#kids",
  },
  {
    title: "Wedding Collection",
    description: "Bridal sarees and wedding special attire",
    image: weddingImage,
    href: "/collections#wedding",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-gradient-silk">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Collections
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of traditional and modern clothing for every member of your family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Card
              key={collection.title}
              className="group overflow-hidden border-0 shadow-elegant hover:shadow-gold transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-playfair text-2xl font-bold text-primary-foreground mb-2">
                      {collection.title}
                    </h3>
                    <p className="font-inter text-sm text-primary-foreground/90 mb-4">
                      {collection.description}
                    </p>
                    <Link to={collection.href}>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="gap-2 group-hover:gap-3 transition-all"
                      >
                        View Collection
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
