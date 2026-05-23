import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact me directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center mb-4">Contact</h2>
          <p className="text-center text-gray-400 mb-12">
            Open to cybersecurity analyst, information security, penetration testing, DFIR, and legal-aware security opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-2xl font-bold text-cyber-blue mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-cyber-cyan mt-1" size={20} />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:adinathgorakhdubile@gmail.com" className="text-white hover:text-cyber-blue transition-colors">
                        adinathgorakhdubile@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-cyber-cyan mt-1" size={20} />
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">Pune, Maharashtra (Open to Remote & Hybrid roles)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-cyber-blue/10 to-cyber-cyan/10 border-cyber-blue/30">
                <h4 className="text-lg font-semibold text-cyber-blue mb-2">Professional Scope</h4>
                <p className="text-gray-300">
                  Available for cybersecurity assessments, analyst support, and security-focused collaborations.
                  Engagements are conducted only with explicit authorization and ethical boundaries.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="card space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-900 border ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-900 border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-900 border ${
                      errors.subject ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors`}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 bg-gray-900 border ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors resize-none`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.message}
                    </p>
                  )}
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-lg flex items-center gap-2 ${
                      status.type === 'success'
                        ? 'bg-green-500/10 border border-green-500/50 text-green-500'
                        : 'bg-red-500/10 border border-red-500/50 text-red-500'
                    }`}
                  >
                    {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <p className="text-sm">{status.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cyber-button disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-t-transparent border-dark-navy rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
