import { Shield, Award, Users, Clock, CheckCircle, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const stats = [
    { icon: Users, number: "1000+", label: "Happy Customers" },
    { icon: Award, number: "99%", label: "Success Rate" },
    { icon: Clock, number: "24hrs", label: "Quick Processing" },
    { icon: Shield, number: "100%", label: "Legal Compliance" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To simplify RTO processes and provide hassle-free documentation services to every customer in Bangalore."
    },
    {
      icon: Shield,
      title: "Our Vision",
      description: "To become the most trusted RTO advisory service provider, known for transparency and excellence."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, transparency, customer satisfaction, and legal compliance drive everything we do."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/10 text-gold border-gold/20 mb-4">About LicencePro Advisory</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Trusted <span className="text-gold">RTO Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are dedicated to making RTO services accessible, transparent, and hassle-free for everyone in Bangalore
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-gold/20 text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-3xl font-bold text-gold mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Simplifying RTO Services for <span className="text-gold">Bangalore</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              LicencePro Advisory was founded with a simple mission: to eliminate the complexity and frustration 
              associated with RTO processes. We understand that dealing with government documentation can be 
              overwhelming, which is why we've dedicated ourselves to providing expert guidance and support 
              every step of the way.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experienced professionals ensures that all your RTO needs are handled with utmost 
              care, transparency, and efficiency. From driving licenses to vehicle registration, we make sure 
              every process is completed legally and on time.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span>Expert guidance from RTO professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span>100% legal and transparent processes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span>Doorstep assistance and minimal RTO visits</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span>No hidden charges or last-minute surprises</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl blur-2xl"></div>
              <img 
                src="/lovable-uploads/e3394be8-391e-4274-8d85-8642c9706e5a.png"
                alt="LicencePro Advisory"
                className="relative z-10 w-64 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-gold/20 text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;