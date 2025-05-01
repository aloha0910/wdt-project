import Link from "next/link";
import { Printer, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Printer className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Dream Labels</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering industries with smart labeling solutions since 2020. Quality barcode labels, printers, and ribbons.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-primary transition-colors">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wider uppercase">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/labels" className="text-sm hover:text-primary transition-colors">
                  Barcode Labels
                </Link>
              </li>
              <li>
                <Link href="/products/printers" className="text-sm hover:text-primary transition-colors">
                  Barcode Printers
                </Link>
              </li>
              <li>
                <Link href="/products/ribbons" className="text-sm hover:text-primary transition-colors">
                  Thermal Transfer Ribbons
                </Link>
              </li>
              <li>
                <Link href="/products/stickers" className="text-sm hover:text-primary transition-colors">
                  Custom Stickers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wider uppercase">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-sm">123 Business Park, Delhi, India 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">info@dreamlabels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Dream Labels Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;