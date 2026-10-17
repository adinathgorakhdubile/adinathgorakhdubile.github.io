import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Linkedin, 
  Github, 
  ShieldCheck, 
  FileCheck2,
  Briefcase,
  Copy,
  Check
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrScope: 'fulltime-hiring',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'adinathdubile@zohomail.in';
  const linkedinUrl = 'https://www.linkedin.com/in/adinath-dubile';
  const githubUrl = 'https://github.com/adinathgorakhdubile';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name or organization.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid contact email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please include details of your inquiry or requirements.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
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
      // Simulate submission & create mailto fallback
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      const mailtoSubject = encodeURIComponent(`[${formData.roleOrScope}] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(
        `From: ${formData.name} (${formData.email})\nRole/Engagement: ${formData.roleOrScope}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:${contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setStatus({
        type: 'success',
        message: 'Thank you! Your email client has been prepared. You can also reach out directly at adinathdubile@zohomail.in.',
      });
      setFormData({ name: '', email: '', roleOrScope: 'fulltime-hiring', subject: '', message: '' });
      setErrors({});
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not launch email handler. Please email directly at adinathdubile@zohomail.in.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 px-4 sm:px-6 relative bg-obsidian-surface/40 border-t border-slate-800/80"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-cyber-blue font-semibold mb-2">
            Initiate Communication
          </p>
          <h2 id="contact-heading" className="section-title">
            Contact &amp; Engagement
          </h2>
          <p className="section-subtitle">
            Open to full-time cybersecurity positions and authorized freelance engagements across Penetration Testing (VAPT),
            GRC framework alignment, and Information Security analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Primary Contact Card */}
            <div className="card border-slate-800 bg-slate-900/60 p-6 space-y-4">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <ShieldCheck size={18} className="text-cyber-blue" />
                Verified Contact Channels
              </h3>

              {/* Live Email Box with Copy */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm font-semibold text-white hover:text-cyber-blue transition-colors truncate"
                  >
                    {contactEmail}
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check size={16} className="text-cyber-green" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              {/* Location Badge */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 block">Location &amp; Availability</span>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <MapPin size={16} className="text-cyber-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Maharashtra, India</p>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      Available for Remote Worldwide • Hybrid / On-Site across Maharashtra &amp; India
                    </p>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyber-blue/50 flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn Profile of Adinath Dubile"
                >
                  <Linkedin size={18} className="text-cyber-blue shrink-0" />
                  <span className="truncate">LinkedIn Profile</span>
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyber-blue/50 flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-all"
                  aria-label="GitHub Profile of Adinath Gorakh Dubile"
                >
                  <Github size={18} className="text-cyber-cyan shrink-0" />
                  <span className="truncate">GitHub Repos</span>
                </a>
              </div>
            </div>

            {/* Engagement Scopes */}
            <div className="card border-slate-800/80 bg-slate-950/70 p-5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                <Briefcase size={14} className="text-cyber-green" />
                Active Hiring &amp; Engagement Tracks
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-cyber-green shrink-0 mt-0.5" />
                  <span><strong>Full-Time Roles:</strong> VAPT Engineer, InfoSec Analyst, GRC Associate, SOC Triage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-cyber-green shrink-0 mt-0.5" />
                  <span><strong>Freelance VAPT:</strong> Web application &amp; API security testing with developer remediation debriefs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-cyber-green shrink-0 mt-0.5" />
                  <span><strong>GRC Advisory:</strong> ISO 27001 control gap assessments, NIST CSF mapping, and risk registers.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="card border-slate-800 bg-slate-900/60 p-6 space-y-4">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono mb-2">
                Send a Message or Engagement Scoping Inquiry
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name or Organization *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                      errors.name ? 'border-red-500' : 'border-slate-800'
                    } rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-blue transition-colors`}
                    placeholder="e.g. Jane Doe / Cyber Tech Corp"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Work or Contact Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                      errors.email ? 'border-red-500' : 'border-slate-800'
                    } rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-blue transition-colors`}
                    placeholder="e.g. j.doe@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="roleOrScope" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Inquiry Intent *
                  </label>
                  <select
                    id="roleOrScope"
                    name="roleOrScope"
                    value={formData.roleOrScope}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyber-blue transition-colors"
                  >
                    <option value="fulltime-hiring">Full-Time Hiring / Recruiter Outreach</option>
                    <option value="freelance-vapt">Freelance Web / API VAPT Engagement</option>
                    <option value="grc-compliance">GRC / ISO 27001 / Risk Assessment</option>
                    <option value="academic-research">Academic Collaboration / Forensics</option>
                    <option value="general-inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                      errors.subject ? 'border-red-500' : 'border-slate-800'
                    } rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-blue transition-colors`}
                    placeholder="e.g. VAPT Opportunity / Scoping Discussion"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle size={12} /> {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message / Scope Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                    errors.message ? 'border-red-500' : 'border-slate-800'
                  } rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-blue transition-colors resize-none`}
                  placeholder="Share details regarding the role, target scope, timeline, or objectives..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {status.message && (
                <div
                  className={`p-3 rounded-lg flex items-center gap-2 text-xs ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  <p>{status.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cyber-button py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Preparing Email...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message to adinathdubile@zohomail.in</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
