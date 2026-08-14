import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 text-center border-t border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">Mili Moradiya</span>. Built with ❤️ using React, TypeScript & Tailwind
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;