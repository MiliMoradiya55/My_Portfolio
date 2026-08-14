import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/data';
import { FaGithub, FaRocket } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a1a] to-[#12122a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-title text-center mb-4"></div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Here are some of my recent projects showcasing my skills in AI/ML, Data Analytics, and Full-Stack Development
          </p>

          {/* Project Count Badge */}
          <div className="flex justify-center mb-10">
            <span className="glass-light px-6 py-2 rounded-full text-sm text-gray-300">
              🚀 {projects.length} Projects Completed
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="relative glass p-6 rounded-xl card-hover overflow-hidden group"
              >
                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
                    ></motion.div>
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  {/* Project Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform">
                      <FaRocket />
                    </div>
                    <span className="px-3 py-1 rounded-full glass-light text-xs text-gray-300">
                      #{project.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 gradient-text line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 text-xs rounded-full glass-light text-gray-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-full glass-light text-gray-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Only GitHub Link - No Demo */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors text-sm"
                    >
                      <FaGithub /> View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {projects.length > 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold glow-hover transition-all"
              >
                {showAll ? 'Show Less Projects ⬆' : `Show All ${projects.length} Projects ⬇`}
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;