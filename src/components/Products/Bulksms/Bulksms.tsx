import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Send, 
  MessageCircle, 
  Users, 
  BarChart3, 
  CheckCircle, 
  Globe, 
  Clock,
  Shield,
  ChevronRight
} from "lucide-react";

const BulkSMS = () => {
  const features = [
    {
      icon: <Send className="w-6 h-6 text-[#F7931E]" />,
      title: "Bulk Messaging",
      description: "Send thousands of SMS instantly to your customers"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#F7931E]" />,
      title: "Two-Way SMS",
      description: "Enable conversations with automated responses"
    },
    {
      icon: <Users className="w-6 h-6 text-[#F7931E]" />,
      title: "Contact Management",
      description: "Organize contacts into groups for targeted campaigns"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#F7931E]" />,
      title: "Analytics",
      description: "Track delivery rates and campaign performance"
    }
  ];

  const benefits = [
    "98% open rate within 3 minutes",
    "No internet connection required",
    "Cost-effective marketing",
    "Personalized messaging",
    "Schedule campaigns",
    "Delivery reports"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "KES 2,500",
      sms: "1,000 SMS",
      features: ["Contact management", "Basic analytics", "Email support"]
    },
    {
      name: "Business",
      price: "KES 5,000",
      sms: "2,500 SMS",
      features: ["Everything in Starter", "Two-way SMS", "Priority support", "API access"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      sms: "10,000+ SMS",
      features: ["Everything in Business", "Dedicated account manager", "Custom integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#9a3820] to-[#F7931E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Bulk SMS Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Reach your customers instantly with reliable, cost-effective bulk messaging
            </p>
            <div className="flex flex-wrap gap-4">
         <a
  href="https://jenga-docs-bulksms.azurewebsites.net/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    size="lg" 
    className="bg-white text-[#9a3820] hover:bg-gray-100 text-lg px-8"
  >
    Get Started
    <ChevronRight className="ml-2 w-5 h-5" />
  </Button>
</a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "98%", label: "Open Rate" },
              { number: "10M+", label: "Messages Sent" },
              { number: "5,000+", label: "Happy Clients" },
              { number: "< 3min", label: "Avg Delivery" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#9a3820] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#9a3820] mb-4">
              Why Choose Our Bulk SMS?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you communicate effectively with your audience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#9a3820] mb-6">
                Why SMS Marketing Works
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#F7931E] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8 text-[#F7931E]" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Global Reach</h3>
                  <p className="text-gray-600">Send SMS to 200+ countries</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-[#F7931E]" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Schedule Messages</h3>
                  <p className="text-gray-600">Plan your campaigns in advance</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-[#F7931E]" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Secure & Reliable</h3>
                  <p className="text-gray-600">Enterprise-grade security</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#9a3820] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  index === 1 ? 'ring-2 ring-[#F7931E] scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <div className="bg-[#F7931E] text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#9a3820]">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="text-[#F7931E] font-semibold mb-6">{plan.sms} included</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#F7931E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      index === 1 
                        ? 'bg-[#F7931E] hover:bg-[#e07d0e]' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9a3820] to-[#F7931E] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Sending?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of businesses already using our Bulk SMS service
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#9a3820] hover:bg-gray-100 text-lg px-8"
              >
                Create Free Account
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BulkSMS;
