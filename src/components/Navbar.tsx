import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
              <span className="text-success-foreground font-bold text-sm">CM</span>
            </div>
            <span className="text-primary-foreground font-bold text-xl">CRI MATCH</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/explorer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Explorer
            </Link>
            <Link to="/posts" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Posts
            </Link>
            <Link to="/profils" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Mon Profil
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              Connexion
            </Button>
            <Button variant="success" size="sm">
              Inscription
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;