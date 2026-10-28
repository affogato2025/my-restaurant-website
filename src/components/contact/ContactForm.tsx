import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, User, MessageSquare, Check, AlertCircle, ArrowRight, Users, PartyPopper, ChevronDown, Download, HelpCircle } from 'lucide-react';
import { logAnalyticsEvent } from '@/utils/loyaltyAndAnalytics';
import { siteConfig } from '@/config/site';

type ContactField = 'name' | 'email' | 'phone' | 'message';
type FieldErrors = Partial<Record<ContactField, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    event_type: 'general',
    subscribe_newsletter: false
  });
  // Dropdown options for Event Type
  const eventOptions = [
    { value: 'general', label: 'General Inquiry', icon: HelpCircle },
    { value: 'private', label: 'Private/Corporate Event', icon: Users },
    { value: 'festival', label: 'Festival Catering', icon: PartyPopper },
    { value: 'catering', label: 'Tray Ordering', icon: Download },
  ];
  const selectedEvent = eventOptions.find(opt => opt.value === formData.event_type) || eventOptions[0];
  const SelectedEventIcon = selectedEvent.icon;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name in fieldErrors) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): FieldErrors => {
    const errors: FieldErrors = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) errors.phone = 'Please enter your phone number.';
    if (!formData.message.trim()) errors.message = 'Please tell us how we can help.';
    return errors;
  };

  const recordContactFormSubmission = () => {
    void logAnalyticsEvent('contact_form_submitted', {});
    if (typeof window !== 'undefined') {
      const analyticsWindow = window as Window & {
        umami?: { track?: (eventName: string) => void };
      };
      analyticsWindow.umami?.track?.('contact_form_submitted');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstInvalidField = Object.keys(errors)[0] as ContactField;
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const payload = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        event_type: formData.event_type,
        message: formData.message.trim(),
        subscribe_newsletter: formData.subscribe_newsletter ? 'yes' : 'no',
      });

      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error(`Netlify Forms returned ${response.status}`);
      }

      recordContactFormSubmission();
      setSubmitStatus({
        type: 'success',
        message: formData.subscribe_newsletter
          ? 'Message received. We will also include you in future restaurant updates.'
          : 'Message received. We will get back to you as soon as possible.'
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        event_type: 'general',
        subscribe_newsletter: false
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: `Your message could not be sent. Please try again or email ${siteConfig.emailContact}.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-3xl mx-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-your-orange/5 via-your-black to-transparent rounded-2xl"></div>
      
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
        className="relative space-y-8 bg-your-ivory/95 p-8 md:p-10 rounded-2xl shadow-xl border border-your-cream/15"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden" aria-hidden="true">
          <label>Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
        </p>
        <div className="space-y-2 text-center mb-8">
          <h3 className="text-2xl font-display font-bold text-your-cream">Get in Touch</h3>
          <p className="text-your-cream/70">Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative group"
          >
            <label htmlFor="name" className="block text-sm font-medium text-your-cream/80 mb-1">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-your-wine-light/80 group-focus-within:text-your-wine-light transition-colors z-10" size={20} />
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-your-cream/25 focus:border-your-wine-light focus:ring-2 focus:ring-your-wine-light/25 transition-all bg-your-black"
              />
            </div>
            {fieldErrors.name && <p id="name-error" className="mt-2 text-sm text-red-300">{fieldErrors.name}</p>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative group"
          >
            <label htmlFor="email" className="block text-sm font-medium text-your-cream/80 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-your-wine-light/80 group-focus-within:text-your-wine-light transition-colors z-10" size={20} />
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-your-cream/25 focus:border-your-wine-light focus:ring-2 focus:ring-your-wine-light/25 transition-all bg-your-black"
              />
            </div>
            {fieldErrors.email && <p id="email-error" className="mt-2 text-sm text-red-300">{fieldErrors.email}</p>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative group"
          >
            <label htmlFor="phone" className="block text-sm font-medium text-your-cream/80 mb-1">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-your-wine-light/80 group-focus-within:text-your-wine-light transition-colors z-10" size={20} />
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                required
                aria-invalid={Boolean(fieldErrors.phone)}
                aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-your-cream/25 focus:border-your-wine-light focus:ring-2 focus:ring-your-wine-light/25 transition-all bg-your-black"
              />
            </div>
            {fieldErrors.phone && <p id="phone-error" className="mt-2 text-sm text-red-300">{fieldErrors.phone}</p>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="relative group"
          >
            <label htmlFor="event_type" className="block text-sm font-medium text-your-cream/80 mb-1">Event Type</label>
            <div className="relative">
              <SelectedEventIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-your-wine-light/80 group-focus-within:text-your-wine-light transition-colors z-10" size={20} />
              <select
                id="event_type"
                name="event_type"
                value={formData.event_type}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-your-cream/25 focus:border-your-wine-light focus:ring-2 focus:ring-your-wine-light/25 transition-all bg-your-black appearance-none cursor-pointer"
              >
                {eventOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-your-cream/50 pointer-events-none" size={20} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="relative group"
        >
          <label htmlFor="message" className="block text-sm font-medium text-your-cream/80 mb-1">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-your-wine-light/80 group-focus-within:text-your-wine-light transition-colors" size={20} />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
              rows={4}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? 'message-error' : undefined}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-your-cream/25 focus:border-your-wine-light focus:ring-2 focus:ring-your-wine-light/25 transition-all bg-your-black resize-none"
            />
          </div>
          {fieldErrors.message && <p id="message-error" className="mt-2 text-sm text-red-300">{fieldErrors.message}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center space-x-2"
        >
          <input
            type="checkbox"
            id="subscribe_newsletter"
            name="subscribe_newsletter"
            checked={formData.subscribe_newsletter}
            onChange={(e) => setFormData(prev => ({ ...prev, subscribe_newsletter: e.target.checked }))}
            className="h-5 w-5 rounded border-your-cream/30 text-your-wine-light focus:ring-your-wine-light"
          />
          <label htmlFor="subscribe_newsletter" className="text-sm text-your-cream">
            Subscribe to our newsletter for exclusive promotions and special offers.
          </label>
        </motion.div>

        <AnimatePresence>
          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-4 rounded-lg flex items-center gap-3 ${
                submitStatus.type === 'success' 
                  ? 'bg-your-black text-your-cream border border-your-orange/30'
                  : 'bg-your-orange text-white border border-your-wine-light/40'
              }`}
              role={submitStatus.type === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {submitStatus.type === 'success' ? (
                <Check className="w-5 h-5 text-your-wine-light" />
              ) : (
                <AlertCircle className="w-5 h-5 text-white" />
              )}
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full bg-your-orange hover:bg-your-orange/90 text-white px-8 py-4 rounded-full 
            font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5
            disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-your-orange to-your-orange/80 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm; 
