import Link from "next/link";
import Image from "next/image";
import { Printer, Tag, Scroll, Award, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-blue-950 dark:to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20 pattern-grid-md"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Industries with Smart Labeling Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl">
              Premium barcode labels, printers, and thermal transfer ribbons for businesses that demand quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of labeling and printing solutions designed to meet the diverse needs of modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Barcode Labels",
              icon: <Tag className="h-10 w-10 text-orange-500" />,
              description: "Self-adhesive paper and synthetic labels for all applications and environments."
            },
            {
              title: "Barcode Printers",
              icon: <Printer className="h-10 w-10 text-orange-500" />,
              description: "High-quality thermal and thermal transfer printers for efficient labeling."
            },
            {
              title: "Transfer Ribbons",
              icon: <Scroll className="h-10 w-10 text-orange-500" />,
              description: "Premium thermal transfer ribbons that ensure clear, durable prints."
            },
            {
              title: "Custom Solutions",
              icon: <Award className="h-10 w-10 text-orange-500" />,
              description: "Tailored labeling solutions designed specifically for your unique requirements."
            }
          ].map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link href={`/products/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="group flex items-center text-sm font-medium text-orange-500 hover:text-orange-600">
                  Learn more <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Dream Labels?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                With years of experience in the labeling industry, we offer exceptional quality, competitive pricing, and outstanding customer service.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Premium quality materials and advanced printing technology",
                  "Customized solutions for specific business requirements",
                  "Fast turnaround times and reliable delivery",
                  "Dedicated customer support and technical assistance"
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1 bg-orange-500 rounded-full p-1">
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              
              <Link href="/about">
                <Button variant="default">
                  About Our Company <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg" 
                alt="Manufacturing facility" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-blue-950 dark:to-indigo-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 pattern-dots-lg"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Labeling System?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Contact us today to discuss your specific requirements and get a customized quote for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get Your Free Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}