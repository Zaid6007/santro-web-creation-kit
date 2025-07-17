import { Shield, CheckCircle, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-dark via-dark-light to-dark-medium text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-gold text-8xl">◆</div>
        <div className="absolute top-40 right-20 text-gold text-6xl">◆</div>
        <div className="absolute bottom-20 left-1/4 text-gold text-4xl">◆</div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gold">
                <Shield className="h-6 w-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Trusted RTO Services</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Bangalore's
                <span className="block text-gold">FINEST RTO</span>
                <span className="block">ADVISORY</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your Trusted Partner for Hassle-Free RTO Services
              </p>
              <p className="text-lg text-gray-400">
                Fast & Legal Processing • No hidden charges • Expert Guidance • Transparent Pricing
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-dark font-semibold px-8">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                View Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <Card className="bg-dark-light border-gold/20 p-4 text-center">
                <CheckCircle className="h-8 w-8 text-gold mx-auto mb-2" />
                <p className="text-sm text-gray-300">Legal Processing</p>
              </Card>
              <Card className="bg-dark-light border-gold/20 p-4 text-center">
                <Clock className="h-8 w-8 text-gold mx-auto mb-2" />
                <p className="text-sm text-gray-300">Fast Service</p>
              </Card>
              <Card className="bg-dark-light border-gold/20 p-4 text-center">
                <Award className="h-8 w-8 text-gold mx-auto mb-2" />
                <p className="text-sm text-gray-300">Expert Guidance</p>
              </Card>
              <Card className="bg-dark-light border-gold/20 p-4 text-center">
                <Shield className="h-8 w-8 text-gold mx-auto mb-2" />
                <p className="text-sm text-gray-300">No Hidden Charges</p>
              </Card>
            </div>
          </div>

          {/* Right Content - Shield Logo */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl"></div>
              <img 
                src="/lovable-uploads/e3394be8-391e-4274-8d85-8642c9706e5a.png"
                alt="LicencePro Advisory Shield"
                className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;