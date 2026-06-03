import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
      } else {
        console.error('Failed to send message');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-200/50 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Ready to Build Something <br className="hidden xl:block" />
            <span className="text-gray-900">Extraordinary Together?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Let's discuss your project. Our team is ready to bring your vision to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-2 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl border border-gray-200 h-full shadow-lg">
              <h3 className="text-2xl font-bold mb-8 font-heading text-gray-900">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Office Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      shah amanat housing society<br />
                      rahattarpool<br />
                      chattagram
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Phone & WhatsApp</h4>
                    <p className="text-gray-600 text-sm">
                      +8801862059959
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Email Us</h4>
                    <p className="text-gray-600 text-sm">
                      nextechzen01@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <a href="https://wa.me/+8801862059959" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366]/10 text-[#25D366] rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 font-medium border border-[#25D366]/20">
                  <MessageSquare size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-3"
          >
            <form className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-lg" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="+880 1..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-500 transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="Custom Web Development">Custom Web Development</option>
                    <option value="E-commerce Platform">E-commerce Platform</option>
                    <option value="SaaS Application">SaaS Application</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-500 transition-colors appearance-none"
                >
                  <option value="">Select budget range</option>
                  <option value="৳1,000 - ৳5,000">৳1,000 - ৳5,000</option>
                  <option value="৳5,000 - ৳15,000">৳5,000 - ৳15,000</option>
                  <option value="৳15,000 - ৳50,000">৳15,000 - ৳50,000</option>
                  <option value="৳50,000+">৳50,000+</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-sm text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm text-center">
                  Failed to send message. Please check your Chat ID configuration or try WhatsApp instead.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
