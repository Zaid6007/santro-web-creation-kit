import { Car, FileText, Shield, Award, CheckCircle, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import trafficSigns from "@/assets/traffic-signs.jpg";
import drivingLesson from "@/assets/driving-lesson.jpg";
import rtoDocuments from "@/assets/rto-documents.jpg";
import steeringWheel from "@/assets/steering-wheel.jpg";

const Services = () => {
  const serviceCategories = [
    {
      icon: Car,
      title: "Driving Licence (DL) Services",
      color: "text-gold",
      services: [
        "New Driving Licence (Learner's & Permanent)",
        "Driving Licence Renewal",
        "Duplicate DL (Lost/Damaged)",
        "International Driving Permit (IDP)"
      ]
    },
    {
      icon: FileText,
      title: "Vehicle Registration & RC Services",
      color: "text-blue-400",
      services: [
        "New Vehicle Registration",
        "RC Renewal & Transfer of Ownership",
        "Duplicate RC (Lost/Damaged)",
        "Hypothecation Removal (NOC for Loans)"
      ]
    },
    {
      icon: Shield,
      title: "Fitness Certificates",
      color: "text-green-400",
      services: [
        "Vehicle Fitness Certificate Renewal",
        "PUC (Pollution Under Control) Certificate"
      ]
    },
    {
      icon: Award,
      title: "Other RTO & Legal Services",
      color: "text-purple-400",
      services: [
        "Change of Address in RC/DL",
        "Name Correction in Documents",
        "Smart Card Driving Licence & RC",
        "RTO Agent Support for Complex Cases"
      ]
    }
  ];

  const whyChooseUs = [
    "Fast & Legal Processing – No hidden charges",
    "Doorstep Assistance – Minimal visits to RTO",
    "Expert Guidance – Avoid rejections & delays",
    "Transparent Pricing – No last-minute surprises"
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/10 text-gold border-gold/20 mb-4">Our Services</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gold">RTO Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From driving licenses to vehicle registration, we handle all your RTO needs with expertise and efficiency
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="border-2 hover:border-gold/30 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-dark ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-dark rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background Images */}
          <div className="absolute inset-0 opacity-5">
            <img 
              src={trafficSigns} 
              alt="Traffic Signs" 
              className="absolute top-0 left-0 w-40 h-40 object-cover"
            />
            <img 
              src={steeringWheel} 
              alt="Steering Wheel" 
              className="absolute bottom-0 right-0 w-32 h-32 object-cover rounded-full"
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose <span className="text-gold">LicencePro Advisory?</span>
              </h3>
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                    <span className="text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-gold/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                <Users className="h-16 w-16 text-gold mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gold mb-2">1000+</h4>
                <p className="text-gray-300">Happy Customers Served</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Gallery Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="border-gold/20 overflow-hidden">
            <div className="relative">
              <img 
                src={drivingLesson} 
                alt="Professional Driving Lessons" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Expert Training</h4>
                <p className="text-sm">Professional driving instruction</p>
              </div>
            </div>
          </Card>

          <Card className="border-gold/20 overflow-hidden">
            <div className="relative">
              <img 
                src={rtoDocuments} 
                alt="RTO Documentation Services" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Legal Documentation</h4>
                <p className="text-sm">All RTO paperwork handled</p>
              </div>
            </div>
          </Card>

          <Card className="border-gold/20 overflow-hidden">
            <div className="relative">
              <img 
                src={trafficSigns} 
                alt="Traffic Rules & Signs" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Traffic Rules</h4>
                <p className="text-sm">Complete road safety knowledge</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;