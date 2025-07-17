import { AlertTriangle, Car, Clock, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import trafficSigns from "@/assets/traffic-signs.jpg";
import steeringWheel from "@/assets/steering-wheel.jpg";

const DrivingTips = () => {
  const drivingTips = [
    {
      icon: AlertTriangle,
      title: "Traffic Signs",
      description: "Always observe and follow traffic signs for safe driving",
      color: "text-red-400"
    },
    {
      icon: Car,
      title: "Vehicle Check",
      description: "Regular maintenance ensures your vehicle stays roadworthy",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      title: "Speed Limits",
      description: "Maintain appropriate speed according to road conditions",
      color: "text-green-400"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Always wear seatbelts and follow safety protocols",
      color: "text-gold"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/10 text-gold border-gold/20 mb-4">Driving Tips & Safety</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Essential <span className="text-gold">Driving Knowledge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the fundamentals of safe driving with our expert guidance and comprehensive training
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Traffic Signs */}
          <div className="space-y-6">
            <Card className="border-gold/20 overflow-hidden">
              <div className="relative">
                <img 
                  src={trafficSigns} 
                  alt="Indian Traffic Signs" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Traffic Signs Mastery</h3>
                  <p className="text-gray-200">Learn all essential Indian traffic signs and their meanings</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Steering Wheel */}
          <div className="space-y-6">
            <Card className="border-gold/20 overflow-hidden">
              <div className="relative">
                <img 
                  src={steeringWheel} 
                  alt="Professional Driving Position" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Proper Driving Position</h3>
                  <p className="text-gray-200">Master the correct posture and vehicle control techniques</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Driving Tips Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {drivingTips.map((tip, index) => (
            <Card key={index} className="border-gold/20 text-center p-6 hover:shadow-lg transition-all duration-300 hover:border-gold/50">
              <CardContent className="p-0">
                <div className={`${tip.color} mb-4`}>
                  <tip.icon className="h-12 w-12 mx-auto" />
                </div>
                <h4 className="text-lg font-bold mb-3">{tip.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Tips Section */}
        <div className="mt-16 bg-dark rounded-2xl p-8 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full"
                 style={{
                   backgroundImage: `url(${trafficSigns})`,
                   backgroundSize: '200px 200px',
                   backgroundRepeat: 'repeat'
                 }}>
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="text-gold">Quick</span> Safety Reminders
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Always Use Indicators</h4>
                  <p className="text-gray-300 text-sm">Signal your intentions clearly to other drivers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Maintain Safe Distance</h4>
                  <p className="text-gray-300 text-sm">Keep adequate space between vehicles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Check Blind Spots</h4>
                  <p className="text-gray-300 text-sm">Always check mirrors before changing lanes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingTips;