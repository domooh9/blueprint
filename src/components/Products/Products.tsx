import { motion } from "framer-motion";
import Equitel from "./Equitel/Equitel";
import JengaAPI from "./Jenga/JengaAPI";
import JengaPGW from "./Jenga/JengaPGW";
import FinserveMobile from "./FinserveMobile/FinserveMobile";
import Andreas from "@/assets/Andreas.jpg";

export const Products = () => {
  return (
    <main className="pt-16 md:pt-20 min-h-screen">

      {/* ================= HERO SECTION (REDUCED HEIGHT) ================= */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${Andreas})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 py-10 md:py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Products
              </h1>

              <p className="text-base md:text-lg lg:text-m text-primary leading-relaxed mb-5">
                Finserve builds scalable financial platforms and APIs that power
                payments, banking, and digital financial experiences for
                businesses and consumers.
              </p>

              <span className="inline-block text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-medium">
                Innovating Finance. Empowering Growth.
              </span>
            </motion.div>
          </div>
        </div>

        {/* Softer bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 " />
      </section>

      {/* ================= PRODUCT SECTIONS ================= */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Equitel />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <JengaAPI />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <JengaPGW />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FinserveMobile />
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Products;
