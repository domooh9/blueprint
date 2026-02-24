import { motion } from "framer-motion";
import { Star, Quote, Users, Award, ThumbsUp } from "lucide-react";

// Placeholder image – replace with actual team/client images
import testimonialBg from "@/assets/gettt.mp4"; // adjust path

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Alice Mwangi",
      role: "CEO, Mwangi Enterprises",
      content: "Finserve's payment gateway transformed our business. Transactions are seamless, and the support team is always available when we need them.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Brian Odhiambo",
      role: "CTO, TechSavvy Ltd",
      content: "The Jenga API is incredibly powerful. We integrated it in days, not months. Their documentation is clear and the sandbox environment made testing a breeze.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Catherine Wanjiku",
      role: "Founder, GreenLeaf Organics",
      content: "Equitel has helped us reach customers in rural areas. Our mobile money collections increased by 200% within three months of using the service.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "David Kimani",
      role: "Finance Director, United Motors",
      content: "Finserve's bulk SMS service keeps our customers informed and engaged. The delivery rates are excellent, and the analytics help us refine our campaigns.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 5,
      name: "Esther Akinyi",
      role: "Product Manager, FinTech Hub",
      content: "Working with Finserve has been a game changer. Their team understands the African market and provides solutions that truly meet local needs.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/90.jpg",
    },
    {
      id: 6,
      name: "Francis Njoroge",
      role: "Owner, Njoroge Stores",
      content: "The Finserve Mobile app is user‑friendly and reliable. My customers love the convenience, and I love the low transaction fees.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  // Stats for the top section (now above the hero)
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "10,000+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "Satisfaction Rate" },
    { icon: <ThumbsUp className="w-6 h-6" />, value: "50M+", label: "Transactions" },
  ];

  return (
    <main className="pt-16 md:pt-20 min-h-screen bg-white">
      {/* Stats Section - Now above the video hero */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] md:min-h-[400px] lg:min-h-[500px] flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/path/to/poster.jpg"
        >
          <source src={testimonialBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/70" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            What Our <span className="text-[#484747]">Customers</span> Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl text-white/90 max-w-2xl mx-auto"
          >
            Real stories from real businesses, see how Finserve is helping them succeed.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Client Testimonials
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Don’t just take our word for it – hear from some of our satisfied clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed flex-1">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;