
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-unveil-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Unveil</h3>
            <p className="text-unveil-300 mb-6">
              Connecting photographers with community through beautiful imagery and engaging experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-unveil-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-unveil-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-unveil-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/discover" className="text-unveil-300 hover:text-white transition-colors">
                  Discover Photography
                </Link>
              </li>
              <li>
                <Link to="/photographers" className="text-unveil-300 hover:text-white transition-colors">
                  Find Photographers
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-unveil-300 hover:text-white transition-colors">
                  Curated Collections
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-unveil-300 hover:text-white transition-colors">
                  Photography Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-unveil-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-unveil-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-unveil-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-unveil-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-unveil-300 mb-4">
              Stay updated with the latest photography trends and features.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-unveil-900 border-unveil-700 focus:border-white" 
              />
              <Button variant="secondary" className="bg-white text-unveil-950 hover:bg-unveil-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-unveil-800 mt-10 pt-6 text-center text-unveil-400">
          <p>&copy; {new Date().getFullYear()} Unveil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
