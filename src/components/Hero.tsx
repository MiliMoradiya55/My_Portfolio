
// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, 
//   FaArrowRight, FaCode, FaBrain, FaChartLine, FaRocket 
// } from 'react-icons/fa';
// import { personalData } from '../data/data';
// import Particles from 'react-tsparticles';
// import { loadSlim } from "tsparticles-slim";
// import type { Engine } from "tsparticles-engine";
// import profilePic from '../assets/profile.jpg'; 

// const Hero: React.FC = () => {
//   const particlesInit = async (engine: Engine) => {
//     await loadSlim(engine);
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Particle Background */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           background: { color: { value: "transparent" } },
//           fpsLimit: 120,
//           interactivity: {
//             events: {
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//             },
//           },
//           particles: {
//             color: { value: ["#6C63FF", "#FF6584", "#FFD93D"] },
//             links: {
//               color: "#6C63FF",
//               distance: 150,
//               enable: true,
//               opacity: 0.2,
//               width: 1,
//             },
//             move: {
//               enable: true,
//               speed: 2,
//               direction: "none",
//               random: false,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.3,
//             },
//             size: {
//               value: { min: 1, max: 3 },
//             },
//           },
//           detectRetina: true,
//         }}
//         className="absolute inset-0"
//       />

//       {/* Floating Icons */}
//       <motion.div
//         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Infinity }}
//         className="absolute top-10 left-10 text-6xl opacity-20"
//       >
//         <FaCode />
//       </motion.div>
      
//       <motion.div
//         animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//         className="absolute bottom-20 right-10 text-6xl opacity-20"
//       >
//         <FaBrain />
//       </motion.div>
      
//       <motion.div
//         animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
//         transition={{ duration: 7, repeat: Infinity }}
//         className="absolute top-1/3 right-20 text-5xl opacity-15"
//       >
//         <FaChartLine />
//       </motion.div>

//       <motion.div
//         animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
//         transition={{ duration: 9, repeat: Infinity }}
//         className="absolute bottom-1/3 left-20 text-5xl opacity-15"
//       >
//         <FaRocket />
//       </motion.div>

//       {/* Floating Gradient Orbs */}
//       <motion.div
//         animate={{ y: [0, -60, 0], x: [0, 40, 0] }}
//         transition={{ duration: 12, repeat: Infinity }}
//         className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-15"
//       ></motion.div>
      
//       <motion.div
//         animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
//         transition={{ duration: 14, repeat: Infinity }}
//         className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full filter blur-3xl opacity-15"
//       ></motion.div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
//         <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center lg:text-left order-2 lg:order-1"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <span className="inline-block px-5 py-2 rounded-full glass-light text-sm text-primary font-medium mb-4 border border-primary/20">
//                 👋 Welcome to my portfolio
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 leading-tight"
//             >
//               <span className="gradient-text">{personalData.name}</span>
//             </motion.h1>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 font-medium"
//             >
//               AI & Data Science Undergraduate
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-gray-400 max-w-lg mx-auto lg:mx-0 mb-6 text-sm leading-relaxed line-clamp-4"
//             >
//               {personalData.summary}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-wrap justify-center lg:justify-start gap-3"
//             >
//               <motion.a
//                 whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(108,99,255,0.4)" }}
//                 whileTap={{ scale: 0.95 }}
//                 href="#projects"
//                 className="px-7 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold transition-all duration-300 flex items-center gap-2 group text-sm"
//               >
//                 <span>View My Work</span>
//                 <FaArrowRight className="group-hover:translate-x-1 transition-all" />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="#contact"
//                 className="px-7 py-2.5 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-sm"
//               >
//                 Contact Me
//               </motion.a>
//               <motion.a
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   href="/MILI_MORADIYA_CV.pdf"
//   download="Mili_Moradiya_Resume.pdf"
//   className="px-7 py-2.5 rounded-full glass-light text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2 font-medium text-sm"
// >
//   <FaDownload /> Resume
// </motion.a>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               className="flex justify-center lg:justify-start gap-4 mt-6"
//             >
//               <motion.a
//                 whileHover={{ scale: 1.2, y: -3 }}
//                 href={personalData.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg text-gray-300 hover:text-primary transition-all duration-300"
//               >
//                 <FaGithub />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.2, y: -3 }}
//                 href={personalData.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg text-gray-300 hover:text-primary transition-all duration-300"
//               >
//                 <FaLinkedin />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.2, y: -3 }}
//                 href={`mailto:${personalData.email}`}
//                 className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg text-gray-300 hover:text-primary transition-all duration-300"
//               >
//                 <FaEnvelope />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.2, y: -3 }}
//                 href={`tel:${personalData.phone}`}
//                 className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg text-gray-300 hover:text-primary transition-all duration-300"
//               >
//                 <FaPhone />
//               </motion.a>
//             </motion.div>

//             {/* Stats Bar */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="flex justify-center lg:justify-start gap-8 mt-6 pt-5 border-t border-white/5"
//             >
//               <div>
//                 <p className="text-2xl font-bold gradient-text">5+</p>
//                 <p className="text-xs text-gray-400 mt-0.5">Projects</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold gradient-text">3</p>
//                 <p className="text-xs text-gray-400 mt-0.5">Internships</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold gradient-text">9.18</p>
//                 <p className="text-xs text-gray-400 mt-0.5">B.Tech CGPA</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold gradient-text">9.90</p>
//                 <p className="text-xs text-gray-400 mt-0.5">Diploma CGPA</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - LARGER Profile Photo */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, scale: 0.9 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="order-1 lg:order-2 flex justify-center items-center"
//           >
//             <div className="relative">
//               {/* Larger Photo with Gradient Border */}
//               <div className="rounded-full p-1.5 bg-gradient-to-r from-primary via-secondary to-primary shadow-2xl shadow-primary/30">
//                 <div className="rounded-full overflow-hidden">
//                   <img
//                     src="/profile.jpg"
//                     alt={personalData.name}
//                     className="w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-white/10"
//                     onError={(e) => {
//                       e.currentTarget.src = `https://ui-avatars.com/api/?name=${personalData.name.replace(' ', '+')}&size=400&background=6C63FF&color=fff&bold=true`;
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Glow Effect */}
//               <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10 animate-pulse"></div>
              
//               {/* Decorative Dots */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"
//               ></motion.div>
//               <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-secondary shadow-lg shadow-secondary/50"
//               ></motion.div>
//               <motion.div
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 3.5, repeat: Infinity }}
//                 className="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"
//               ></motion.div>
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ duration: 4.5, repeat: Infinity }}
//                 className="absolute top-1/3 -left-6 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
//               ></motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
//       >
//         <div className="flex flex-col items-center gap-1">
//           <span className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll</span>
//           <div className="w-5 h-8 rounded-full border-2 border-primary/20 flex justify-center bg-white/5">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-1 h-2.5 bg-gradient-to-b from-primary to-secondary rounded-full mt-1.5"
//             ></motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, 
  FaArrowRight, FaCode, FaBrain, FaChartLine, FaRocket 
} from 'react-icons/fa';
import { personalData } from '../data/data';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import profilePic from '../assets/profile.jpg'; 

const Hero: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          particles: {
            color: { value: ["#6C63FF", "#FF6584", "#FFD93D"] },
            links: {
              color: "#6C63FF",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 text-6xl opacity-20"
      >
        <FaCode />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-6xl opacity-20"
      >
        <FaBrain />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/3 right-20 text-5xl opacity-15"
      >
        <FaChartLine />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-1/3 left-20 text-5xl opacity-15"
      >
        <FaRocket />
      </motion.div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{ y: [0, -60, 0], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-15"
      ></motion.div>
      
      <motion.div
        animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full filter blur-3xl opacity-15"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-5 py-2 rounded-full glass-light text-sm text-primary font-medium mb-4 border border-primary/20">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 leading-tight"
            >
              <span className="gradient-text">{personalData.name}</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 font-medium"
            >
              AI & Data Science Undergraduate
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-lg mx-auto lg:mx-0 mb-6 text-sm leading-relaxed line-clamp-4"
            >
              {personalData.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(108,99,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-7 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold transition-all duration-300 flex items-center gap-2 group text-sm"
              >
                <span>View My Work</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-all" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-7 py-2.5 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-sm"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/MILI_MORADIYA_CV.pdf"
                download="Mili_Moradiya_Resume.pdf"
                className="px-7 py-2.5 rounded-full glass-light text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2 font-medium text-sm"
              >
                <FaDownload /> Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-4 mt-6"
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg text-gray-300 hover:text-primary transition-all duration-300"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg text-gray-300 hover:text-primary transition-all duration-300"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href={`mailto:${personalData.email}`}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg text-gray-300 hover:text-primary transition-all duration-300"
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href={`tel:${personalData.phone}`}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg text-gray-300 hover:text-primary transition-all duration-300"
              >
                <FaPhone />
              </motion.a>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-8 mt-6 pt-5 border-t border-white/5"
            >
              <div>
                <p className="text-2xl font-bold gradient-text">5+</p>
                <p className="text-xs text-gray-400 mt-0.5">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">3</p>
                <p className="text-xs text-gray-400 mt-0.5">Internships</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">9.18</p>
                <p className="text-xs text-gray-400 mt-0.5">B.Tech CGPA</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">9.90</p>
                <p className="text-xs text-gray-400 mt-0.5">Diploma CGPA</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - LARGER Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative">
              {/* Larger Photo with Gradient Border */}
              <div className="rounded-full p-1.5 bg-gradient-to-r from-primary via-secondary to-primary shadow-2xl shadow-primary/30">
                <div className="rounded-full overflow-hidden">
                  <img
                    src={profilePic}
                    alt={personalData.name}
                    className="w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-white/10"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${personalData.name.replace(' ', '+')}&size=400&background=6C63FF&color=fff&bold=true`;
                    }}
                  />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10 animate-pulse"></div>
              
              {/* Decorative Dots */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-secondary shadow-lg shadow-secondary/50"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute top-1/3 -left-6 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-primary/20 flex justify-center bg-white/5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2.5 bg-gradient-to-b from-primary to-secondary rounded-full mt-1.5"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;