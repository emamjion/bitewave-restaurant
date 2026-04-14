import { motion } from "framer-motion";
import PropTypes from "prop-types";

const PageBanner = ({ title, subtitle, bgImage }) => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>
        <p className="text-gray-200 max-w-xl mx-auto">{subtitle}</p>
      </motion.div>
    </div>
  );
};

PageBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string,
};

export default PageBanner;
