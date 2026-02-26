import { motion } from "framer-motion";
import { scaleIn, staggerContainer } from "@/components/animations/variants";
import Picturer from "@/assets/Picturer.png";
import jobseeker from "@/assets/icons/job--seeker.png";
import puzzle from "@/assets/icons/puzzle.png";
import startup from "@/assets/icons/startup.png";
import investment from "@/assets/icons/llion.png";
import gestures from "@/assets/icons/startupp.png";

const CoreValues = () => {
  return (
    <section>
      {/* Gray Header Bar */}
      <motion.div 
        className="bg-[#474747] py-6 px-4 sm:px-6 lg:px-12 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-white text-2xl lg:text-3xl font-semibold"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-primary">Our </span>
          Core Values
        </motion.h2>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="text-white font-bold text-lg">Finserve</span>
        </motion.div>
      </motion.div>

      {/* Values Grid - Gray Background */}
      <div 
        className="bg-[#474747] py-16 lg:py-24"
        style={{
          backgroundImage: `url(${Picturer})`,
          backgroundSize: "600px",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            
            {/* Open Minded */}
            <motion.div 
              className="text-center"
              variants={scaleIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              <motion.h3 
                className="text-lg font-semibold italic text-[#EB2240] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Open minded
              </motion.h3>
              <motion.div 
                className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden"
                whileHover={{ 
                  scale: 1.08, 
                  borderColor: "#c91d36",
                  boxShadow: "0 10px 40px rgba(235, 34, 64, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <img 
                    src={jobseeker} 
                    alt="Open Minded" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <p className="text-white leading-relaxed px-2">
                Being open minded to possibilities. To unlearn and relearn how technology works and how our customers interact with us
              </p>
            </motion.div>

            {/* Collaboration */}
            <motion.div 
              className="text-center"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              <motion.h3 
                className="text-lg font-semibold italic text-[#EB2240] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Collaboration
              </motion.h3>
              <motion.div 
                className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden"
                whileHover={{ 
                  scale: 1.08, 
                  borderColor: "#c91d36",
                  boxShadow: "0 10px 40px rgba(235, 34, 64, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                  <img 
                    src={puzzle} 
                    alt="Collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <p className="text-white leading-relaxed px-2">
                Being open to partnerships externally and internally believing in the collective genius of the team
              </p>
            </motion.div>

            {/* Agile */}
            <motion.div 
              className="text-center"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              <motion.h3 
                className="text-lg font-semibold italic text-[#EB2240] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Agile
              </motion.h3>
              <motion.div 
                className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden"
                whileHover={{ 
                  scale: 1.08, 
                  borderColor: "#c91d36",
                  boxShadow: "0 10px 40px rgba(235, 34, 64, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                  <img 
                    src={startup} 
                    alt="Agile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <p className="text-white leading-relaxed px-2">
                Reducing the friction between thought and action, getting things done
              </p>
            </motion.div>

            {/* Daring */}
            <motion.div 
              className="text-center"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              <motion.h3 
                className="text-lg font-semibold italic text-[#EB2240] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Daring
              </motion.h3>
              <motion.div 
                className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden"
                whileHover={{ 
                  scale: 1.08, 
                  borderColor: "#c91d36",
                  boxShadow: "0 10px 40px rgba(235, 34, 64, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                  <img 
                    src={investment} 
                    alt="Daring" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <p className="text-white leading-relaxed px-2">
                Appreciating that disruption is uncomfortable, especially for ourselves
              </p>
            </motion.div>

            {/* Trust */}
            <motion.div 
              className="text-center"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              <motion.h3 
                className="text-lg font-semibold italic text-[#EB2240] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Trust
              </motion.h3>
              <motion.div 
                className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden"
                whileHover={{ 
                  scale: 1.08, 
                  borderColor: "#c91d36",
                  boxShadow: "0 10px 40px rgba(235, 34, 64, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                  <img 
                    src={gestures} 
                    alt="Trust" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <p className="text-white leading-relaxed px-2">
                Most of all appreciating that trust is the most precious gem we own and cannot compromise on
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
