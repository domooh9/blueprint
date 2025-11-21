import { MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Equity Centre, Hospital Road", "Upper Hill, Nairobi, Kenya", "P.O. Box 104443-00101"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@finserve.africa"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["0766000200"]
  }
];

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-muted"
      style={{ borderBottom: "0.5px solid rgb(235, 34, 64)" }} // <-- Thinner bottom border
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              We're here to help your business grow. Reach out to us today.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
