import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/data';
import { FaGraduationCap, FaBriefcase, FaProjectDiagram, FaCode } from 'react-icons/fa';

const About: React.FC = () => {
  const stats = [
    { icon: <FaProjectDiagram />, value: '5+', label: 'Projects' },
    { icon: <FaBriefcase />, value: '3', label: 'Internships' },
    { icon: <FaGraduationCap />, value: '9.18', label: 'B.Tech CGPA' },
    { icon: <FaCode />, value: '9.90', label: 'Diploma CGPA' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-title text-center mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                {personalData.summary}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="glass p-6 rounded-xl text-center card-hover"
                  >
                    <div className="text-3xl text-primary mb-2">{stat.icon}</div>
                    <h4 className="stat-number">{stat.value}</h4>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="border-l-4 border-primary pl-4"
                >
                  <h4 className="text-xl font-semibold text-white">B.Tech, AI & Data Science</h4>
                  <p className="text-gray-400">Sarvajanik College of Engineering & Technology</p>
                  <p className="text-gray-500 text-sm">2025 – 2027 | CGPA: 9.18</p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="border-l-4 border-secondary pl-4"
                >
                  <h4 className="text-xl font-semibold text-white">Diploma in Computer Engineering</h4>
                  <p className="text-gray-400">Tapi Diploma Engineering College</p>
                  <p className="text-gray-500 text-sm">2021 – 2024 | CGPA: 9.90</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;