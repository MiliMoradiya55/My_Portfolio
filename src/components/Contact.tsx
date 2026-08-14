import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { personalData } from '../data/data';
import emailjs from '@emailjs/browser';

// ✅ YOUR CORRECT CREDENTIALS
const EMAILJS_SERVICE_ID = 'service_salmq2f';
const EMAILJS_TEMPLATE_ID = 'template_uu6ki2q';
const EMAILJS_PUBLIC_KEY = '3CSHQV8NEchQcKRVg';  // ✅ Your actual Public Key

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: 'Portfolio Contact'
      };

      console.log('📧 Sending with params:', templateParams);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Success!', response);
      
      setStatus({
        type: 'success',
        message: '✅ Message sent successfully! I\'ll get back to you soon! 🎉'
      });
      
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 5000);

    } catch (error: any) {
      console.error('❌ Error:', error);
      
      let errorMessage = '❌ Failed to send message. ';
      
      if (error?.text?.includes('Public Key')) {
        errorMessage += 'Invalid Public Key. Please check your API key in EmailJS.';
      } else if (error?.text?.includes('403')) {
        errorMessage += 'Invalid API key or service ID.';
      } else {
        errorMessage += 'Please try again later.';
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a1a] to-[#12122a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-title text-center mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href={`mailto:${personalData.email}`} className="text-white hover:text-primary transition-colors">
                        {personalData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href={`tel:${personalData.phone}`} className="text-white hover:text-primary transition-colors">
                        {personalData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Surat, Gujarat, India</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-2xl text-gray-300 hover:text-primary transition-all"
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-2xl text-gray-300 hover:text-primary transition-all"
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass p-8 rounded-xl space-y-6"
            >
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {status.type === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  <span>{status.message}</span>
                </motion.div>
              )}

              {status.type === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg flex items-start gap-2"
                >
                  <FaTimesCircle className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{status.message}</span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold glow-hover transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message ✉️'
                )}
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                💡 Your message will be sent directly to my inbox. I'll respond within 24 hours!
              </p>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;