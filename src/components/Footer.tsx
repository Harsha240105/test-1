import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-card/30 backdrop-blur-sm">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ShoeCart
            </h3>
            <p className="text-sm text-muted-foreground">
              Step into style with our premium collection of footwear.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/men" className="text-muted-foreground hover:text-accent transition-colors">Men</Link></li>
              <li><Link to="/women" className="text-muted-foreground hover:text-accent transition-colors">Women</Link></li>
              <li><Link to="/kids" className="text-muted-foreground hover:text-accent transition-colors">Kids</Link></li>
              <li><Link to="/sale" className="text-muted-foreground hover:text-accent transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ShoeCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
