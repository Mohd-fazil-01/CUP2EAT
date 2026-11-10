import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { siteConfig } from '../../data/navigation';
import { brandConfig } from '../../data/brandConfig';

/**
 * BulkOrders.jsx
 * Contact & Business Enquiry section with direct link to official phone 9818192575 & WhatsApp
 */

export default function BulkOrders() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    quantity: '396 Cups (1 Wholesale Box)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FFF3D8] text-[#073D2D]">
      <Container>
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <SectionHeading
            label="Get In Touch"
            heading="READY TO SERVE CUP2EAT AT YOUR VENUE?"
            subheading="Connect directly with our sales team for wholesale orders, cafe partnerships, event catering, or sample boxes."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Quick Contact Information & Direct Action Buttons (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-[#073D2D] text-[#FFF3D8] p-8 sm:p-10 rounded-3xl shadow-xl">
            <div>
              <span className="text-xs font-black tracking-widest text-[#F5C342] uppercase">
                Direct Contact Line
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#FFF3D8] mt-2 mb-4">
                Let's Talk Edible Cups!
              </h3>
              <p className="text-sm text-[#FFF3D8]/75 leading-relaxed">
                Whether you run a high-volume chai point, specialty cafe, luxury resort, or wedding catering business, we provide customized bulk quantities.
              </p>
            </div>

            {/* Official Details */}
            <div className="flex flex-col gap-5 border-y border-[#F5C342]/20 py-6">
              <a
                href={`tel:${siteConfig.displayPhone}`}
                className="flex items-center gap-4 hover:text-[#F5C342] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5C342] text-[#092C20] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs text-[#FFF3D8]/60 uppercase tracking-wider block">Official Call Line</span>
                  <span className="font-mono text-lg font-bold text-[#FFF3D8] group-hover:text-[#F5C342]">{siteConfig.phone}</span>
                </div>
              </a>

              <a
                href={brandConfig.wholesale.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-[#25D366] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <span className="text-xs text-[#FFF3D8]/60 uppercase tracking-wider block">Instant WhatsApp Chat</span>
                  <span className="font-mono text-lg font-bold text-[#FFF3D8] group-hover:text-[#25D366]">Chat: 9818192575</span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5C342]/20 border border-[#F5C342]/40 text-[#F5C342] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-[#FFF3D8]/60 uppercase tracking-wider block">Delivery Coverage</span>
                  <span className="text-sm font-semibold text-[#FFF3D8]">Dispatch Across All States in India 🇮🇳</span>
                </div>
              </div>
            </div>

            {/* Wholesale highlights */}
            <div className="bg-[#092C20] p-4 rounded-2xl border border-[#F5C342]/25">
              <span className="text-xs font-bold text-[#F5C342] uppercase tracking-wider block mb-1">
                ⭐ Wholesale Deal Reminder:
              </span>
              <p className="text-xs text-[#FFF3D8]/80">
                ₹3,999/- for 396 Cups includes free pan-India shipping &amp; FSSAI verified batch warranty.
              </p>
            </div>
          </div>

          {/* RIGHT: Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-2 border-[#B98246]/20 shadow-xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#4CAF50] text-white flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#073D2D] mb-2">Thank You for Your Enquiry!</h3>
                <p className="text-sm text-[#073D2D]/70 max-w-md mb-6">
                  Our wholesale representative will call or WhatsApp you within 24 hours at <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#073D2D] text-[#FFF3D8] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#F5C342] hover:text-[#092C20] transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#073D2D] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FFF3D8]/40 border border-[#B98246]/40 rounded-xl px-4 py-3 text-sm text-[#073D2D] focus:outline-none focus:border-[#F5C342] focus:ring-2 focus:ring-[#F5C342]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#073D2D] mb-2">
                      Café / Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chai &amp; Bites Café"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full bg-[#FFF3D8]/40 border border-[#B98246]/40 rounded-xl px-4 py-3 text-sm text-[#073D2D] focus:outline-none focus:border-[#F5C342] focus:ring-2 focus:ring-[#F5C342]/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#073D2D] mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FFF3D8]/40 border border-[#B98246]/40 rounded-xl px-4 py-3 text-sm text-[#073D2D] focus:outline-none focus:border-[#F5C342] focus:ring-2 focus:ring-[#F5C342]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#073D2D] mb-2">
                      Estimated Order Quantity
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-[#FFF3D8]/40 border border-[#B98246]/40 rounded-xl px-4 py-3 text-sm text-[#073D2D] focus:outline-none focus:border-[#F5C342] focus:ring-2 focus:ring-[#F5C342]/30 transition-all"
                    >
                      <option>396 Cups (1 Wholesale Box - ₹3,999)</option>
                      <option>792 Cups (2 Wholesale Boxes)</option>
                      <option>1,500+ Cups (Event / Festival Batch)</option>
                      <option>Sample Tasting Box</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#073D2D] mb-2">
                    Message / Preferred Flavours
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements (e.g. mix of Chocolate and Elaichi cups)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FFF3D8]/40 border border-[#B98246]/40 rounded-xl px-4 py-3 text-sm text-[#073D2D] focus:outline-none focus:border-[#F5C342] focus:ring-2 focus:ring-[#F5C342]/30 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#073D2D] text-[#FFF3D8] font-black text-sm uppercase tracking-widest py-4 rounded-full hover:bg-[#F5C342] hover:text-[#092C20] transition-all duration-300 shadow-xl shadow-[#073D2D]/20 mt-2"
                >
                  Submit Wholesale Enquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </Container>
    </section>
  );
}
