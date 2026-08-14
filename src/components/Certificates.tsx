import React from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/data';
import { FaCertificate } from 'react-icons/fa';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Certificates <span className="gradient-text">& Achievements</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl flex items-center gap-4 hover:glow transition-all duration-300"
              >
                <div className="text-4xl text-primary">
                  <FaCertificate />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{cert.name}</h4>
                  <p className="text-gray-400 text-sm">{cert.platform}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;