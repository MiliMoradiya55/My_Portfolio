import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';
import { 
  FaPython, FaJava, FaJs, FaHtml5, FaCss3, FaDatabase, 
  FaGit, FaGithub, FaReact, FaAws
} from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiScikitlearn, SiTableau } from 'react-icons/si';

const Skills: React.FC = () => {
  const iconMap: Record<string, React.ReactElement> = {
    Python: <FaPython className="text-blue-400" />,
    JavaScript: <FaJs className="text-yellow-400" />,
    Java: <FaJava className="text-red-400" />,
    HTML: <FaHtml5 className="text-orange-400" />,
    CSS: <FaCss3 className="text-blue-500" />,
    SQL: <FaDatabase className="text-green-400" />,
    Git: <FaGit className="text-orange-500" />,
    GitHub: <FaGithub className="text-white" />,
    'React.js': <FaReact className="text-blue-400" />,
    TensorFlow: <SiTensorflow className="text-orange-400" />,
    PyTorch: <SiPytorch className="text-red-400" />,
    Pandas: <SiPandas className="text-cyan-400" />,
    NumPy: <SiNumpy className="text-blue-400" />,
    'Scikit-learn': <SiScikitlearn className="text-cyan-400" />,
    'Power BI': <SiTableau className="text-yellow-400" />,
  };

  const skillCategories = [
    { title: '💻 Programming Languages', items: skills.programming },
    { title: '🤖 AI & ML', items: skills.aiMl },
    { title: '📊 Data Analytics', items: skills.dataAnalytics },
    { title: '🗄️ Databases', items: skills.databases },
    { title: '⚛️ Frameworks', items: skills.frameworks },
    { title: '🛠️ Tools', items: skills.tools },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#12122a] to-[#0a0a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-title text-center mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl card-hover"
              >
                <h3 className="text-lg font-bold text-primary mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm text-gray-300"
                    >
                      {iconMap[skill] && <span className="text-lg">{iconMap[skill]}</span>}
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;