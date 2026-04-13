import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4">
      {/* 🔹 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          Contact <span className="text-accent">Us</span>
        </h2>
        <p className="text-gray-600">
          Have questions about your order or want to collaborate? We’d love to
          hear from you!
        </p>
      </motion.div>

      {/* 🔹 Main Section */}
      <div className="container mx-auto grid md:grid-cols-2 gap-10">
        {/* 🔸 Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Phone */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaPhoneAlt className="text-accent text-xl" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+880 1727087717</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaEnvelope className="text-accent text-xl" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">support@bitewave.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-accent text-xl" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>
        </motion.div>

        {/* 🔸 Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* 🔹 Bottom Map Section (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto mt-16"
      >
        <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
