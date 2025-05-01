import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Users, 
  ThumbsUp, 
  Trophy, 
  Clock, 
  Truck, 
  Headphones, 
  Sparkles 
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">About Dream Labels Solution</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2020, Dream Labels Solution has quickly established itself as a trusted provider of high-quality 
              barcode labels, printers, and thermal transfer ribbons. Our mission is to empower businesses with reliable 
              labeling solutions that enhance efficiency and accuracy.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Based in Delhi, India, we serve clients across various industries including manufacturing, retail, 
              healthcare, logistics, and e-commerce. Our team of experts is dedicated to delivering exceptional 
              products and services tailored to meet the unique needs of each client.
            </p>
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Get in Touch
              </Button>
            </Link>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image 
              src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg" 
              alt="Dream Labels Solution team" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide our business and ensure we deliver the best possible experience to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Quality",
              description: "We are committed to providing products that meet the highest standards of excellence.",
              icon: <Trophy className="h-10 w-10 text-orange-500" />
            },
            {
              title: "Innovation",
              description: "We continuously explore new technologies and solutions to stay ahead of industry trends.",
              icon: <Sparkles className="h-10 w-10 text-orange-500" />
            },
            {
              title: "Reliability",
              description: "We deliver on our promises and ensure consistent performance of our products.",
              icon: <ThumbsUp className="h-10 w-10 text-orange-500" />
            },
            {
              title: "Customer Focus",
              description: "We prioritize our customers' needs and strive to exceed their expectations.",
              icon: <Users className="h-10 w-10 text-orange-500" />
            }
          ].map((value, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-20 bg-muted/30 py-16 px-8 rounded-2xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground">
            Discover the advantages that set Dream Labels Solution apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Industry Expertise",
              description: "Our team brings years of experience and deep knowledge of the labeling industry.",
              icon: <BarChart3 className="h-8 w-8 text-orange-500" />
            },
            {
              title: "Quick Turnaround",
              description: "We understand the importance of time and deliver our products promptly.",
              icon: <Clock className="h-8 w-8 text-orange-500" />
            },
            {
              title: "Nationwide Delivery",
              description: "We ship our products across India, ensuring they reach you safely and on time.",
              icon: <Truck className="h-8 w-8 text-orange-500" />
            },
            {
              title: "Custom Solutions",
              description: "We offer tailored solutions designed specifically for your unique requirements.",
              icon: <Sparkles className="h-8 w-8 text-orange-500" />
            },
            {
              title: "Quality Assurance",
              description: "All our products undergo rigorous testing to ensure superior quality.",
              icon: <Trophy className="h-8 w-8 text-orange-500" />
            },
            {
              title: "Dedicated Support",
              description: "Our customer support team is always ready to assist you with any queries.",
              icon: <Headphones className="h-8 w-8 text-orange-500" />
            }
          ].map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="mt-1 bg-white dark:bg-muted p-3 rounded-lg shadow-sm">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            The dedicated professionals behind Dream Labels Solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {[
            {
              name: "Mohd. Akram",
              position: "Founder & CEO",
              bio: "With over 10 years of experience in the labeling industry, Akram leads our team with a vision for innovation and excellence.",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            },
            {
              name: "Mohd. Aqib",
              position: "Technical Director",
              bio: "Aqib oversees our technical operations, ensuring that we deliver high-quality products that meet our customers' specific requirements.",
              image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg"
            }
          ].map((member, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-4">{member.position}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-blue-950 dark:to-indigo-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 pattern-dots-lg"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Contact Dream Labels Solution today to discuss your labeling needs and discover how we can help your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}