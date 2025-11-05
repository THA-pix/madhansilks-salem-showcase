import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Salem",
    review: "Absolutely beautiful sarees! The quality of silk is exceptional and the staff is very helpful. Best place in Salem for traditional wear.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Erode",
    review: "Bought my wedding sherwani from Madhan Silks. The collection was stunning and the price was reasonable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Meena Devi",
    location: "Namakkal",
    review: "Love their kids collection! My daughter looked adorable in the pattu pavadai we bought. Great quality and beautiful designs.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with Madhan Silks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-0 shadow-elegant animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="font-inter text-sm text-foreground mb-4 leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-playfair font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-inter text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
