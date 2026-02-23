import { motion } from "framer-motion";
import { 
  MapPin, 
  Award, 
  ArrowRight, 
  Send,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";

// Placeholder image – replace with your own
import careerHero from "@/assets/Kevin.jpg"; // adjust path as needed

const Careers = () => {
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "Nairobi, Kenya (Hybrid)",
      type: "Full-time",
      department: "Engineering",
      description: "Build responsive, performant web applications using React and TypeScript.",
    },
    {
      id: 2,
      title: "Product Manager - Payments",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Product",
      description: "Lead the development of our payment gateway and API products.",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      location: "Remote (Africa)",
      type: "Full-time",
      department: "Infrastructure",
      description: "Manage and scale cloud infrastructure on AWS and Kubernetes.",
    },
    {
      id: 4,
      title: "UX/UI Designer",
      location: "Nairobi, Kenya",
      type: "Contract",
      department: "Design",
      description: "Design intuitive financial interfaces for mobile and web.",
    },
  ];

  // Benefits/Perks
  const perks = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Career Growth", desc: "Continuous learning and mentorship programs." },
    { icon: <Users className="w-6 h-6" />, title: "Diverse Culture", desc: "Work with a passionate, inclusive team." },
    { icon: <Award className="w-6 h-6" />, title: "Competitive Benefits", desc: "Health, pension, and performance bonuses." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Innovation Focus", desc: "Build products that impact millions." },
  ];

  return (
    <main className="pt-16 md:pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Shape the future of <span className="text-primary">finance</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                Join Finserve and help build the financial infrastructure that empowers 
                millions across Africa. We're looking for passionate innovators.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#openings" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition shadow-lg hover:shadow-xl">
                  View Openings
                </a>
                <a href="#culture" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition">
                  Learn About Us
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={careerHero} 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <Users />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Join</p>
                    <p className="text-2xl font-bold text-gray-900">50+</p>
                    <p className="text-xs text-gray-500">team members</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 bg-white" id="culture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why join Finserve?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're building more than just products – we're building a culture of innovation, 
              inclusion, and impact.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{perk.title}</h3>
                <p className="mt-2 text-gray-600">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50" id="openings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Open positions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to make a difference. We're always looking for talented individuals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{job.department}</p>
                  </div>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">{job.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  <button className="group inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
                    Apply Now <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No role? CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-primary/5 rounded-3xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Don't see your dream role?</h3>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              We're always on the lookout for passionate people. Send us your CV and we'll keep you in mind.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition shadow-lg">
              <Send className="w-4 h-4" />
              Send your CV
            </button>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">Ready to make an impact? Join us in building the future of finance.</p>
          <p className="mt-2 text-gray-400 text-sm">© 2026 Finserve. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
};

export default Careers;