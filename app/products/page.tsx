import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Sample product data - in a real application, this would come from a database
const products = {
  labels: [
    {
      id: 1,
      name: "Thermal Paper Labels",
      description: "Direct thermal labels ideal for shipping, barcode printing, and retail applications.",
      image: "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg",
      category: "labels",
    },
    {
      id: 2,
      name: "Polyester Labels",
      description: "Durable synthetic labels resistant to chemicals, heat, and outdoor conditions.",
      image: "https://images.pexels.com/photos/5025643/pexels-photo-5025643.jpeg",
      category: "labels",
    },
    {
      id: 3,
      name: "Asset Tags",
      description: "Permanent asset labels with serialization for inventory management and tracking.",
      image: "https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg",
      category: "labels",
    },
  ],
  printers: [
    {
      id: 4,
      name: "Desktop Barcode Printer",
      description: "Compact thermal printer for small to medium volume label printing needs.",
      image: "https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg",
      category: "printers",
    },
    {
      id: 5,
      name: "Industrial Label Printer",
      description: "Heavy-duty printer for high-volume manufacturing and warehouse environments.",
      image: "https://images.pexels.com/photos/8145921/pexels-photo-8145921.jpeg",
      category: "printers",
    },
    {
      id: 6,
      name: "Mobile Barcode Printer",
      description: "Portable printer for on-the-go printing in field service and retail applications.",
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg",
      category: "printers",
    },
  ],
  ribbons: [
    {
      id: 7,
      name: "Wax Ribbons",
      description: "Standard thermal transfer ribbons for paper labels in normal environments.",
      image: "https://images.pexels.com/photos/6385069/pexels-photo-6385069.jpeg",
      category: "ribbons",
    },
    {
      id: 8,
      name: "Wax/Resin Ribbons",
      description: "Mid-range ribbons for semi-gloss and coated paper labels.",
      image: "https://images.pexels.com/photos/6858599/pexels-photo-6858599.jpeg",
      category: "ribbons",
    },
    {
      id: 9,
      name: "Resin Ribbons",
      description: "Premium ribbons for synthetic labels requiring chemical and scratch resistance.",
      image: "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg",
      category: "ribbons",
    },
  ],
  custom: [
    {
      id: 10,
      name: "Custom Printed Labels",
      description: "Fully customized labels with your branding, colors, and specific requirements.",
      image: "https://images.pexels.com/photos/5816302/pexels-photo-5816302.jpeg",
      category: "custom",
    },
    {
      id: 11,
      name: "Sequential Numbering",
      description: "Labels with sequential barcodes or numbering for inventory control.",
      image: "https://images.pexels.com/photos/5816303/pexels-photo-5816303.jpeg",
      category: "custom",
    },
    {
      id: 12,
      name: "RFID Tags",
      description: "Advanced RFID-enabled labels for contactless tracking and identification.",
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg",
      category: "custom",
    },
  ],
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Products & Services</h1>
        <p className="text-lg text-muted-foreground">
          Explore our comprehensive range of high-quality labeling solutions designed to meet your business needs.
        </p>
      </div>

      <Tabs defaultValue="labels" className="w-full mb-16">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-lg">
            <TabsTrigger value="labels">Labels</TabsTrigger>
            <TabsTrigger value="printers">Printers</TabsTrigger>
            <TabsTrigger value="ribbons">Ribbons</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
        </div>

        {Object.entries(products).map(([category, items]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((product) => (
                <Card key={product.id} className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                    <Link href={`/products/${product.category}/${product.id}`}>
                      <Button variant="outline">View Details</Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Request Quote
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Custom Solutions Section */}
      <div className="mt-16 bg-muted/30 rounded-xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
            <p className="text-lg mb-6">
              We specialize in creating tailored labeling solutions to meet your specific business requirements.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-orange-500 rounded-full p-1">
                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>Custom sizes, shapes, and materials for unique applications</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-orange-500 rounded-full p-1">
                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>Pre-printed label designs with your branding</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-orange-500 rounded-full p-1">
                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>Variable data printing services for serial numbers and barcodes</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-orange-500 rounded-full p-1">
                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>Specialized materials for extreme environments</p>
              </li>
            </ul>
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Discuss Your Requirements
              </Button>
            </Link>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image 
              src="https://images.pexels.com/photos/4482881/pexels-photo-4482881.jpeg" 
              alt="Custom labeling solutions" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}