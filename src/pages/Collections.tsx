import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import womenImage from "@/assets/women-collection.jpg";
import menImage from "@/assets/men-collection.jpg";
import kidsImage from "@/assets/kids-collection.jpg";
import weddingImage from "@/assets/wedding-collection.jpg";

const collections = [
  {
    id: "women",
    title: "Women's Collection",
    description: "Discover our exquisite range of silk sarees, designer churidars, elegant salwar kameez, and contemporary ethnic wear. Each piece is carefully curated to bring out the beauty and grace of traditional Indian fashion.",
    image: womenImage,
    items: [
      "Pure Silk Sarees",
      "Kanchipuram Sarees",
      "Designer Churidars",
      "Salwar Kameez",
      "Party Wear Sarees",
      "Cotton Sarees",
    ],
  },
  {
    id: "men",
    title: "Men's Collection",
    description: "Explore our sophisticated collection of kurtas, formal shirts, sherwanis, and ethnic wear that perfectly blends tradition with contemporary style for every occasion.",
    image: menImage,
    items: [
      "Designer Kurtas",
      "Wedding Sherwanis",
      "Formal Shirts",
      "Traditional Dhotis",
      "Ethnic Jackets",
      "Party Wear",
    ],
  },
  {
    id: "kids",
    title: "Kids Collection",
    description: "Adorable and comfortable traditional wear for your little ones. From pattu pavadai to kids kurtas, we have everything to make your children look absolutely charming.",
    image: kidsImage,
    items: [
      "Pattu Pavadai",
      "Kids Kurtas",
      "Lehenga Choli",
      "Boys Ethnic Sets",
      "Birthday Specials",
      "Festival Wear",
    ],
  },
  {
    id: "wedding",
    title: "Wedding Collection",
    description: "Make your special day unforgettable with our premium bridal collection. Stunning bridal sarees, wedding sherwanis, and exclusive designer wear for the entire wedding party.",
    image: weddingImage,
    items: [
      "Bridal Silk Sarees",
      "Groom Sherwanis",
      "Bridesmaid Outfits",
      "Reception Wear",
      "Designer Lehengas",
      "Heavy Embroidery Work",
    ],
  },
];

const Collections = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-silk">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Collections
          </h1>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of traditional and modern clothing. Each collection is thoughtfully curated to bring you the finest quality and latest designs.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto space-y-20">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              id={collection.id}
              className={`grid md:grid-cols-2 gap-8 items-center animate-slide-up ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Card className="overflow-hidden border-0 shadow-elegant">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </Card>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
                  {collection.title}
                </h2>
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  {collection.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {collection.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 font-inter text-sm"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Collections;
