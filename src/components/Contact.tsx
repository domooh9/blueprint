import { MapPin, Mail, Phone, Clock, ArrowRight, MessageSquare, Sparkles, ChevronRight, Globe, Shield, Zap, Building, Users, Target } from "lucide-react";

export const Contact = () => {
  const primaryColor = "#ec2240"; // Finserve Red
  const darkGray = "#595a5c"; // Finserve Dark Gray
  const white = "#ffffff"; // White

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
      subIcon: Building,
      actionText: "Get Directions",
      actionLink: "#",
      gradient: `from-[#595a5c] to-[#404143]`
    },
    {
      icon: Mail,
      title: "Email Support",
      text: <>support@finserve.africa</>,
      subIcon: Shield,
      actionText: "Send Email",
      actionLink: "mailto:support@finserve.africa",
      gradient: `from-[#ec2240] to-[#d61e3a]`
    },
    {
      icon: Phone,
      title: "Phone Support",
      text: <>+254 766 000 200</>,
      subIcon: Users,
      actionText: "Call Now",
      actionLink: "tel:+254766000200",
      gradient: `from-[#ec2240] via-[#e0203d] to-[#d41c37]`
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
      subIcon: Target,
      actionText: "Schedule Call",
      actionLink: "#",
      gradient: `from-[#595a5c] via-[#4d4e50] to-[#404143]`
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-white overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${white} 0%, #f9f9f9 100%)` }}
    >
      {/* Background Elements with Official Colors */}
      <div className="absolute inset-0">
        {/* Geometric Pattern with Finserve Colors */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke={darkGray} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gradient Orbs - Using Official Colors */}
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: `radial-gradient(circle at center, ${primaryColor} 0%, transparent 70%)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ background: `radial-gradient(circle at center, ${darkGray} 0%, transparent 70%)` }}
        />

        {/* Diagonal Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            ${darkGray}10 2px,
            ${darkGray}10 4px
          )`,
          backgroundSize: '60px 60px'
        }} />

        {/* Floating Dots */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: Math.random() * 8 + 2 + 'px',
                height: Math.random() * 8 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                background: Math.random() > 0.5 ? primaryColor : darkGray,
                opacity: Math.random() * 0.3 + 0.1,
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          {/* Badge */}
          <div 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-8 border"
            style={{ 
              background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}05 100%)`,
              borderColor: `${primaryColor}30`
            }}
          >
            <MessageSquare className="w-5 h-5 mr-3" style={{ color: primaryColor }} />
            <span className="font-semibold tracking-wide" style={{ color: primaryColor }}>
              Contact Our Team
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: darkGray }}>
            Get In <span style={{ color: primaryColor }}>Touch</span>
          </h1>
          
          {/* Divider */}
          <div className="w-24 h-1.5 mx-auto mb-8 rounded-full" style={{ background: `linear-gradient(90deg, ${primaryColor} 0%, ${darkGray} 100%)` }}></div>
          
          {/* Subheading */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how <span style={{ color: primaryColor, fontWeight: '600' }}>Finserve</span> can accelerate your digital transformation journey with tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Panel */}
          <div className="relative group">
            {/* Card Background Glow */}
            <div 
              className="absolute -inset-4 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at center, ${primaryColor}20 0%, transparent 70%)` }}
            />
            
            <div className="relative bg-white rounded-3xl p-10 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
              {/* Card Header */}
              <div className="flex items-center mb-10">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}90 100%)` }}
                >
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold" style={{ color: darkGray }}>Expert Support</h3>
                  <p className="text-gray-500 mt-1">Always Here For You</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Our team of fintech specialists provides comprehensive support for API integrations, payment solutions, and digital transformation strategies.
              </p>

              {/* Stats */}
              <div className="space-y-6 mb-12">
                {[
                  { label: "Instant Response", value: "Under 1 hour", bgColor: "#ec2240" },
                  { label: "Expert Availability", value: "24/7 Priority", bgColor: "#595a5c" },
                  { label: "Satisfaction Rate", value: "98.7%", bgColor: "#ec2240" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all group/stat">
                    <span className="font-medium" style={{ color: darkGray }}>{stat.label}</span>
                    <span 
                      className="font-bold text-xl px-4 py-2 rounded-lg"
                      style={{ 
                        color: idx === 1 ? white : darkGray,
                        background: stat.bgColor === "#ec2240" 
                          ? `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}90 100%)`
                          : `linear-gradient(135deg, ${darkGray} 0%, #4a4b4d 100%)`
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Primary CTA Button */}
              <a
                href="mailto:support@finserve.africa"
                className="group/btn relative inline-flex items-center justify-center w-full px-8 py-5 rounded-2xl text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}90 100%)`
                }}
              >
                {/* Shimmer Effect */}
                <div 
                  className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"
                  style={{ background: `linear-gradient(90deg, transparent, ${white}30, transparent)` }}
                />
                <Mail className="w-6 h-6 mr-4 relative z-10" />
                <span className="relative z-10">Email Our Support Team</span>
                <ArrowRight className="w-5 h-5 ml-4 relative z-10 transform group-hover/btn:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Hover Glow */}
                <div 
                  className={`absolute -inset-1 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.gradient.includes('#ec2240') 
                    ? `bg-gradient-to-br from-[#ec2240]20 to-transparent` 
                    : `bg-gradient-to-br from-[#595a5c]20 to-transparent`
                  }`}
                />
                
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full overflow-hidden">
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div 
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ${item.gradient}`}
                    >
                      <item.icon className="h-9 w-9 text-white" />
                    </div>
                    {/* Sub Icon */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center">
                      <item.subIcon className="h-5 w-5" style={{ color: primaryColor }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold mb-4" style={{ color: darkGray }}>{item.title}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{item.text}</p>
                  
                  {/* Action Button */}
                  <a
                    href={item.actionLink}
                    className="group/action inline-flex items-center px-6 py-3 rounded-xl border transition-all duration-300"
                    style={{ 
                      borderColor: item.gradient.includes('#ec2240') ? `${primaryColor}40` : `${darkGray}40`,
                      background: item.gradient.includes('#ec2240') 
                        ? `${primaryColor}10` 
                        : `${darkGray}10`
                    }}
                  >
                    <span 
                      className="font-medium"
                      style={{ color: item.gradient.includes('#ec2240') ? primaryColor : darkGray }}
                    >
                      {item.actionText}
                    </span>
                    <ChevronRight 
                      className="w-4 h-4 ml-3 transition-transform group-hover/action:translate-x-2"
                      style={{ color: item.gradient.includes('#ec2240') ? primaryColor : darkGray }}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Banner */}
        <div className="mt-32 relative group">
          {/* Banner Glow */}
          <div 
            className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at center, ${primaryColor}15 0%, transparent 70%)` }}
          />
          
          <div className="relative bg-white rounded-3xl p-12 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  ${primaryColor},
                  ${primaryColor} 1px,
                  transparent 1px,
                  transparent 10px
                )`,
              }}></div>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-4xl font-bold mb-6" style={{ color: darkGray }}>
                For <span style={{ color: primaryColor }}>Partnership</span> Inquiries
              </h3>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Connect with our dedicated team for enterprise integrations and strategic partnership opportunities.
              </p>
              
              <div 
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl border mx-auto group/email"
                style={{ 
                  background: `linear-gradient(135deg, ${white} 0%, ${darkGray}05 100%)`,
                  borderColor: `${primaryColor}30`
                }}
              >
                <Mail className="w-6 h-6 mr-4" style={{ color: primaryColor }} />
                <a 
                  href="mailto:partnerships@finserve.africa"
                  className="text-2xl font-bold group-hover/email:underline transition-all"
                  style={{ color: primaryColor }}
                >
                  partnerships@finserve.africa
                </a>
                <div 
                  className="ml-6 px-4 py-2 rounded-xl border"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}05 100%)`,
                    borderColor: `${primaryColor}30`
                  }}
                >
                  <span className="font-semibold" style={{ color: primaryColor }}>Priority Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultimate CTA Section */}
        <div className="mt-40 relative">
          {/* CTA Glow */}
          <div 
            className="absolute -inset-4 rounded-3xl blur-2xl"
            style={{ background: `radial-gradient(circle at center, ${primaryColor}20 0%, transparent 70%)` }}
          />
          
          <div className="relative rounded-3xl p-16 border overflow-hidden text-center"
            style={{ 
              background: `linear-gradient(135deg, ${white} 0%, ${darkGray}03 100%)`,
              borderColor: `${primaryColor}30`
            }}
          >
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-8" style={{ color: darkGray }}>
                Ready to <span style={{ color: primaryColor }}>Transform</span> Your Business?
              </h2>
              <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Schedule a personalized consultation with our fintech experts to explore innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="#"
                  className="group/cta px-12 py-5 text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 flex items-center justify-center min-w-[220px]"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}90 100%)`
                  }}
                >
                  <Zap className="w-6 h-6 mr-3 group-hover/cta:rotate-12 transition-transform" />
                  Book a Strategy Call
                </a>
                <a
                  href="#"
                  className="px-12 py-5 rounded-2xl font-bold text-xl border-2 hover:shadow-lg transition-all duration-500 flex items-center justify-center min-w-[220px]"
                  style={{ 
                    borderColor: darkGray,
                    color: darkGray,
                    background: 'transparent'
                  }}
                >
                  <span>View Case Studies</span>
                  <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
              
              <p className="text-gray-500 mt-10 text-lg">
                Join 500+ enterprises already transforming with <span style={{ color: primaryColor, fontWeight: '600' }}>Finserve</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};