
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              Unveil
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/discover" className="text-sm font-medium hover:text-primary/80 transition-colors">
                Discover
              </Link>
              <Link to="/photographers" className="text-sm font-medium hover:text-primary/80 transition-colors">
                Photographers
              </Link>
              <Link to="/collections" className="text-sm font-medium hover:text-primary/80 transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary/80 transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search photos, photographers..."
                className="pl-8 h-9 w-[200px] lg:w-[300px] rounded-md border border-input bg-background px-3 py-1 text-sm"
              />
            </div>
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-background z-50 flex flex-col transition-transform duration-300 ease-in-out md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" className="text-2xl font-bold tracking-tight" onClick={() => setIsMenuOpen(false)}>
            Unveil
          </Link>
          <button onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search photos, photographers..."
              className="pl-8 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/discover" 
              className="text-lg font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Discover
            </Link>
            <Link 
              to="/photographers" 
              className="text-lg font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Photographers
            </Link>
            <Link 
              to="/collections" 
              className="text-lg font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </Link>
            <Link 
              to="/about" 
              className="text-lg font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
          <div className="mt-6 flex flex-col space-y-3">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
