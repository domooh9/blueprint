import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-white border-t border-primary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let’s talk about how Finserve can support your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              We’re here to help.
            </h3>

            <p className="text-muted-foreground text-base leading-relaxed">
              Whether you're looking for API integrations, payment gateway setup,
              partnership opportunities, or general inquiries — our team is
              ready to assist. Reach out and we’ll respond shortly.
            </p>

            <div className="mt-8">
              <a
                href="mailto:support@finserve.africa"
                className="inline-block px-8 py-3 bg-primary text-white rounded-xl
                hover:bg-primary/90 transition font-medium shadow-md hover:shadow-lg"
              >
                Email Our Support Team
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Response time: Typically within 1 business day.
            </p>
          </div>

          {/* RIGHT SIDE — NEW BEAUTIFUL CONTAINERS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Item Template */}
            {[
              {
                icon: MapPin,
                title: "Office Location",
                text: (
                  <>
                    Equity Centre, Hospital Road<br />
                    Upper Hill, Nairobi, Kenya<br />
                    P.O. Box 104443-00101
                  </>
                )
              },
              {
                icon: Mail,
                title: "Email",
                text: <>support@finserve.africa</>
              },
              {
                icon: Phone,
                title: "Phone",
                text: <>0766 000 200</>
              },
              {
                icon: Clock,
                title: "Business Hours",
                text: (
                  <>
                    Mon–Fri: 8:00 AM – 5:00 PM<br />
                    Sat: 9:00 AM – 1:00 PM<br />
                    Sunday: Closed
                  </>
                )
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white 
                p-6 shadow-sm hover:shadow-md transition-shadow 
                transform hover:-translate-y-1 duration-200"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 
                flex items-center justify-center mb-4 shadow-inner">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Text */}
                <h4 className="font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}

          </div>
        </div>

        {/* FOOTNOTE */}
        <div className="text-center mt-20">
          <p className="text-sm text-muted-foreground">
            For partnership inquiries or enterprise integrations, contact our team at{" "}
            <span className="text-primary font-medium">
              partnerships@finserve.africa
            </span>.
          </p>
        </div>
      </div>
    </section>
  );
};
