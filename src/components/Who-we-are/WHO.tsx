import { ChevronDown, ChevronUp } from "lucide-react";
import whoB from "@/assets/imageC.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInLeft, staggerContainer } from "@/components/animations/variants";
import WhyUs from "./WhyUs";
import Philosophies from "./Philosophies";
import CoreValues from "./CoreValues";

const WHO = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section - About Finserve with Image */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center pt-20 md:pt-24 lg:pt-28"
        style={{ backgroundImage: `url(${whoB})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60 lg:from-white/90 lg:via-white/75 lg:to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              variants={fadeInLeft}
            >
              Building Africa's Digital <br className="hidden sm:block" />
              Financial Future
            </motion.h1>

            {/* Lead paragraph */}
            <motion.p
              className="text-lg sm:text-base text-gray-800 leading-relaxed mb-6"
              variants={fadeInLeft}
            >
              <span className="text-[#EB2240] font-semibold">
                Finserve Africa Ltd
              </span>{" "}
              is a wholly owned subsidiary of Equity Group Holdings Plc, specializing
              in innovative fintech solutions for individuals and businesses across
              Africa.
            </motion.p>

            {/* Supporting copy */}
            <motion.p
              className="text-gray-700 leading-relaxed mb-4"
              variants={fadeInLeft}
              transition={{ delay: 0.15 }}
            >
              Incorporated in 2008, Finserve was established to digitize Equity Group's
              operations and deliver unparalleled convenience, choice, and control to
              customers within a rapidly evolving digital ecosystem.
            </motion.p>

            {/* Expanded content */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <motion.p
                  className="text-gray-700 leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Driven by data, insights, and innovation, we build scalable technology
                  solutions that simplify financial services and empower businesses of all
                  sizes, from startups to multinational corporations. Over the years, Finserve has employed a data-driven culture to build products that contribute to the ease of doing business. We have worked with a wide range of clients across a variety of industries, from small startups to multinational corporations. Our focus on innovation, quality, and customer satisfaction has earned us a reputation as a trusted partner in the technology industry.
                </motion.p>
              </motion.div>
            )}

            {/* Read More Button */}
            <motion.button
              onClick={toggleReadMore}
              className="inline-flex items-center gap-2 text-[#EB2240] font-semibold hover:text-[#c91d36] transition-colors duration-200 mt-4"
              variants={fadeInLeft}
              transition={{ delay: 0.45 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? (
                <>
                  Read Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown className="w-6 h-6" />
                </>
              )}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs />

      {/* Our Philosophies Section */}
      <Philosophies />

      {/* Core Values Section */}
      <CoreValues />
    </div>
  );
};

export default WHO;
