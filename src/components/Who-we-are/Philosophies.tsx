import { motion } from "framer-motion";
import { fadeInRight, staggerContainer, staggerItem } from "@/components/animations/variants";
import eye from "@/assets/icons/eye.png";
import dats from "@/assets/icons/dats.png";
import col from "@/assets/icons/col.png";
import Picturer from "@/assets/backgroundii.png";

const Philosophies = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div 
        className="container mx-auto px-4 sm:px-6 lg:px-12"
        style={{
          backgroundImage: `url(${Picturer})`,
          backgroundSize: "600px",
        }}
      >
        {/* Header */}
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-2xl lg:text-3xl font-bold"
            variants={fadeInRight}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#EB2240]">Our</span>
            <br />
            <span className="text-gray-800">Philosophies</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Guiding principles that drive our mission and vision
          </motion.p>
        </motion.div>

        {/* Three Philosophies */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Vision */}
          <motion.div 
            className="text-center"
            variants={staggerItem}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.div 
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-white border-2 border-[#EB2240] flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.15, rotate: 360 }}
              transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
            >
              <img 
                src={eye} 
                alt="Vision" 
                className="w-12 h-12 object-contain"
              />
            </motion.div>
            <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
              Vision<span className="text-[#EB2240]">.</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide innovative solutions that inspire growth.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div 
            className="text-center"
            variants={staggerItem}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.div 
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-white border-2 border-[#EB2240] flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.15, rotate: 360 }}
              transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
            >
              <img 
                src={dats} 
                alt="Mission" 
                className="w-12 h-12 object-contain"
              />
            </motion.div>
            <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
              Mission<span className="text-[#EB2240]">.</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To offer cutting-edge solutions that enrich lives and businesses, through collaboration and innovation.
            </p>
          </motion.div>

          {/* Corporate Mission */}
          <motion.div 
            className="text-center"
            variants={staggerItem}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.div 
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-white border-2 border-[#EB2240] flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.15, rotate: 360 }}
              transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
            >
              <img 
                src={col} 
                alt="Corporate Mission" 
                className="w-12 h-12 object-contain"
              />
            </motion.div>
            <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
              Corporate Mission<span className="text-[#EB2240]">.</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We exist to inspire and prosper lives and businesses by connecting today's potential with tomorrow's innovative opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophies;
