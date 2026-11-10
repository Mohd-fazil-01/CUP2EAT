import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Building2, Coffee, Hotel, Calendar, Truck, Users } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { siteConfig } from '../../data/navigation';

const targets = [
  { icon: Coffee, label: 'Cafes & Coffee Shops' },
  { icon: Building2, label: 'Restaurants' },
  { icon: Hotel, label: 'Hotels & Resorts' },
  { icon: Calendar, label: 'Event Organizers' },
  { icon: Truck, label: 'Distributors' },
  { icon: Users, label: 'Corporate Events' },
];

const INITIAL_FORM = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  quantity: '',
  message: '',
};

/**
 * BulkOrders Section
 * B2B enquiry section with WhatsApp CTA and validated contact form.
 */
export default function BulkOrders() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Your name is required.';
    if (!form.email.trim()) {
      e.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    if (!form.quantity.trim()) e.quantity = 'Please enter an estimated quantity.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Note: No backend is connected. This simulates form submission state only.
    setStatus('success');
    setForm(INITIAL_FORM);
    setErrors({});
  };

  const whatsappUrl = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20CUP2EAT!%20I%27m%20interested%20in%20a%20bulk%20order.`
    : '#';

  const inputClass =
    'w-full bg-[#F7F3E9] border border-[#EAE2D2] rounded-xl px-4 py-3 text-sm text-[#103D2E] placeholder:text-[#103D2E]/40 focus:outline-none focus:border-[#103D2E] focus:ring-2 focus:ring-[#103D2E]/10 transition-all';

  return (
    <section id="bulk-orders" className="py-24 lg:py-32 bg-[#F7F3E9]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              label="Bulk Orders & B2B"
              heading="MAKE YOUR NEXT EVENT UNFORGETTABLE."
              subheading="Bring a unique edible beverage experience to your customers with CUP2EAT."
              align="left"
            />

            {/* Target grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {targets.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={t.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-2.5 bg-white rounded-2xl p-3.5 shadow-sm border border-[#EAE2D2]"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#103D2E] flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-[#D9A441]" />
                    </div>
                    <span className="text-xs font-medium text-[#103D2E]/80">{t.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#1db954] transition-colors shadow-lg shadow-[#25D366]/30 group"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                Enquire via WhatsApp
              </a>
              {!siteConfig.whatsappNumber && (
                <p className="text-xs text-[#103D2E]/40 mt-2 italic">
                  WhatsApp number not yet configured — update in navigation.js
                </p>
              )}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-[#103D2E]/8 border border-[#EAE2D2]"
          >
            <h3 className="font-serif text-xl font-bold text-[#103D2E] mb-6">Send an Enquiry</h3>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#103D2E] flex items-center justify-center">
                  <span className="text-[#D9A441] text-2xl">✓</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#103D2E]">Enquiry Received!</h4>
                  <p className="text-sm text-[#103D2E]/60 mt-1">
                    Thank you for your interest. We will be in touch soon.
                  </p>
                  <p className="text-xs text-[#103D2E]/30 mt-3 italic">
                    Note: This is a demo form — no data has been submitted to a server.
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs text-[#103D2E] underline underline-offset-2 mt-2 hover:text-[#D9A441] transition-colors"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Your Name *" error={errors.name}>
                    <input
                      type="text"
                      name="name"
                      id="b2b-name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      aria-required="true"
                    />
                  </Field>
                  <Field label="Business Name" error={errors.businessName}>
                    <input
                      type="text"
                      name="businessName"
                      id="b2b-business"
                      placeholder="Your Café"
                      value={form.businessName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Email Address *" error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      id="b2b-email"
                      placeholder="hello@yourbusiness.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      aria-required="true"
                    />
                  </Field>
                  <Field label="Phone Number *" error={errors.phone}>
                    <input
                      type="tel"
                      name="phone"
                      id="b2b-phone"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      aria-required="true"
                    />
                  </Field>
                </div>
                <Field label="Estimated Quantity *" error={errors.quantity}>
                  <input
                    type="text"
                    name="quantity"
                    id="b2b-quantity"
                    placeholder="e.g. 500 cups per month"
                    value={form.quantity}
                    onChange={handleChange}
                    className={inputClass}
                    aria-required="true"
                  />
                </Field>
                <Field label="Message" error={errors.message}>
                  <textarea
                    name="message"
                    id="b2b-message"
                    rows={4}
                    placeholder="Tell us about your event or business requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <p className="text-xs text-[#103D2E]/30 italic">
                  * This form is a frontend demo. No data is sent to a server until a backend is connected.
                </p>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#103D2E] text-[#F7F3E9] font-semibold py-3.5 rounded-full hover:bg-[#D9A441] hover:text-[#092B22] transition-all duration-300 shadow-lg"
                >
                  Submit Enquiry
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[#103D2E]/70 uppercase tracking-wider">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
