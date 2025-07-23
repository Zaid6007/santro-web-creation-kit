import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-dark text-white">
      {/* Top Bar */}
      <div className="border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6 mb-2 md:mb-0">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <span>licenceproadvisory@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <span className="font-medium">For Assistance Call Us: +91 9513144363</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="LicencePro Advisory" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gold">LICENCEPRO</h1>
              <p className="text-xs text-gray-300">ADVISORY</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-gold transition-colors">Home</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#about" className="hover:text-gold transition-colors">About Us</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
            <Button className="bg-gold hover:bg-gold-dark text-dark font-semibold">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden text-gold">
            ☰
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;