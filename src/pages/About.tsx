import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Store } from "lucide-react";
import shopImage from "@/assets/shop-interior.jpg";

const values = [
  {
    icon: Heart,
    title: "Tradition & Quality",
    description: "We honor traditional craftsmanship while maintaining the highest quality standards in every piece.",
  },
  {
    icon: Award,
    title: "Authenticity",
    description: "Every product is carefully sourced and verified to ensure genuine silk and authentic designs.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We provide personalized service and expert guidance.",
  },
  {
    icon: Store,
    title: "Local Heritage",
    description: "Proudly serving Salem for years, we're part of the community's fabric and tradition.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-silk">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Madhan Silks
          </h1>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Your Tradition, Our Passion – A legacy of elegance in Salem
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Card className="overflow-hidden border-0 shadow-elegant">
                <img
                  src={shopImage}
                  alt="Madhan Silks store interior"
                  className="w-full h-[500px] object-cover"
                />
              </Card>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                <p>
                  Madhan Silks has been a cornerstone of traditional fashion in Salem for decades. What started as a small family business has grown into one of the most trusted names for authentic silk sarees and ethnic wear in Tamil Nadu.
                </p>
                <p>
                  Our journey began with a simple mission: to bring the finest quality silk and traditional wear to the people of Salem. Through years of dedication, we've built lasting relationships with master weavers and craftsmen across India, ensuring that every piece in our collection tells a story of heritage and excellence.
                </p>
                <p>
                  Today, we continue to honor our roots while embracing contemporary designs. Whether you're looking for a traditional Kanchipuram saree for a wedding or modern ethnic wear for everyday elegance, Madhan Silks is your destination for authentic, beautiful, and affordable clothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-0 shadow-elegant animate-slide-up">
              <CardContent className="p-8">
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  To preserve and promote traditional Indian textile artistry while providing our customers with the highest quality ethnic wear at fair prices. We strive to make every purchase a delightful experience through personalized service and expert guidance.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant animate-slide-up" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-8">
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  To become South India's most beloved destination for traditional and contemporary ethnic wear, known for our authenticity, quality, and customer care. We envision a future where every family finds their perfect outfit for life's special moments at Madhan Silks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="border-0 shadow-elegant text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
