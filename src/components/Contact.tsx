import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import Picture4 from "@/assets/Picture4.png";

export const Contact = () => {
  const primaryColor = "#ec2240"; // Finserve Red
  const darkGray = "#f5f5f5";
  const lightGray = "#f5f5f5";
  const backgroundColor = "#f5f5f5"; // Section background
  const finserveGrey = "#595A5C"; // Container background

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      text: (
        <>
          Equity Centre, Hospital Road<br />
          Upper Hill, Nairobi, Kenya<br />
          P.O. Box 104443-00101
        </>
      ),
      actionText: "Get Directions",
      actionLink: "#"
    },
    {
      icon: Mail,
      title: "Email Support",
      text: <>support@finserve.africa</>,
      actionText: "Send Email",
      actionLink: "mailto:support@finserve.africa"
    },
    {
      icon: Phone,
      title: "Phone Support",
      text: <>+254 766 000 200</>,
      actionText: "Call Now",
      actionLink: "tel:+254766000200"
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
      ),
      actionText: "Schedule Call",
      actionLink: "#"
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-20"
      style={{ backgroundColor }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact our team to discuss how Finserve can accelerate your digital transformation journey.
          </p>
        </div>

        {/* Main Content Container */}
        <div
          className="shadow-lg p-8 md:p-12"
          style={{ backgroundColor: finserveGrey }}
        >
          {/* Introduction */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: darkGray }}>
              Converging <span style={{ color: primaryColor }}>Support</span> and{" "}
              <span style={{ color: primaryColor }}>Communication</span>
            </h2>
            <p className="text-lg text-white leading-relaxed">
              We believe in transparent, accessible communication that empowers your business decisions.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-10">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: darkGray }}>
                    Our Integrated Support Platform
                  </h3>
                  <p className="text-white mb-4">
                    Our integrated support platform is a full support ecosystem delivered through multiple channels.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.slice(0, 2).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 text-white rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ background: primaryColor }}
                      >
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1" style={{ color: darkGray }}>
                          {item.title}
                        </h4>
                        <p className="text-sm text-white-600 mb-2">{item.text}</p>
                        <a
                          href={item.actionLink}
                          className="inline-flex items-center text-xs font-medium hover:underline"
                          style={{ color: primaryColor }}
                        >
                          {item.actionText}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative lg:w-[28rem] lg:flex-shrink-0 mx-auto lg:mx-0">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <div className="relative z-10">
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: `linear-gradient(90deg, transparent, ${primaryColor}, transparent)` }}
                  />

                  <img
                    src={Picture4}
                    alt="Finserve Office"
                    className="w-full h-72 lg:h-96 object-cover"
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: `linear-gradient(90deg, transparent, ${primaryColor}, transparent)` }}
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: darkGray }}>
                    Immediate Assistance
                  </h3>
                  <p className="text-white mb-4">
                    We're here to help you navigate the complexities of modern finance.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.slice(2).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ background: primaryColor }}
                      >
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1" style={{ color: darkGray }}>
                          {item.title}
                        </h4>
                        <p className="text-sm text-white mb-2">{item.text}</p>
                        <a
                          href={item.actionLink}
                          className="inline-flex items-center text-xs font-medium hover:underline"
                          style={{ color: primaryColor }}
                        >
                          {item.actionText}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8" />
        </div>
      </div>
    </section>
  );
};
