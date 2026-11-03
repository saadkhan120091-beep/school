import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SCHOOL_DATA } from '../config/schoolData';
import {
  ContactFormInput,
  ContactFormErrors,
  validateContactForm,
} from '../utils/validation';
import { schoolService, SubmittedInquiry } from '../services/schoolService';

export const ContactSection: React.FC = () => {
  const { contact, schoolName } = SCHOOL_DATA;

  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedInquiries, setSubmittedInquiries] = useState<SubmittedInquiry[]>(() =>
    schoolService.getSessionInquiries()
  );
  const [lastSubmitted, setLastSubmitted] = useState<SubmittedInquiry | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const saved = schoolService.submitInquiry(formData);
    setSubmittedInquiries(schoolService.getSessionInquiries());
    setLastSubmitted(saved);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setErrors({});
  };

  const contactDetails = [
    {
      id: 'address',
      label: 'Address',
      value: contact.address,
      icon: MapPin,
    },
    {
      id: 'phone',
      label: 'Phone',
      value: contact.phone,
      icon: Phone,
    },
    {
      id: 'email',
      label: 'Email',
      value: contact.email,
      icon: Mail,
    },
    {
      id: 'office-hours',
      label: 'Office Hours',
      value: contact.officeHours,
      icon: Clock,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 bg-[#FFFFFF]"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-[#8B1518] mb-2">
            {contact.sectionLabel} · <span className="text-[#27272A]">{schoolName}</span>
          </p>
          <h2
            id="contact-heading"
            className="font-display text-4xl font-bold text-[#18181B] tracking-tight leading-snug"
          >
            {contact.heading}
          </h2>
          <p className="mt-2 text-base font-medium text-[#27272A] leading-relaxed">
            Reach out to {schoolName} at {contact.address} or submit an inquiry using the form below.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Information Cards */}
          <div className="col-span-5 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {contactDetails.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-[#FAF5F2] border-2 border-[#E5D5D0] p-5 flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#8B1518] text-[#FFFFFF] flex items-center justify-center shrink-0 shadow-xs">
                      <IconComponent className="w-5 h-5 text-[#FBBF24]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#8B1518]">
                        {item.label}
                      </p>
                      <p className="font-display text-lg font-bold text-[#18181B] mt-0.5 leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Session Submitted Inquiries Log */}
            {submittedInquiries.length > 0 && (
              <div className="rounded-2xl bg-[#FAF5F2] text-[#18181B] p-6 border-2 border-[#8B1518]/30 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-base font-bold text-[#8B1518]">
                    Recorded Inquiries ({submittedInquiries.length})
                  </h3>
                  <span className="text-xs font-bold text-[#27272A]">
                    Frontend Stage
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs">
                  {submittedInquiries.map((inq) => (
                    <li
                      key={inq.id}
                      className="rounded-xl bg-[#FFFFFF] p-3.5 border border-[#E5D5D0]"
                    >
                      <div className="flex items-center justify-between font-bold text-[#18181B]">
                        <span>{inq.name}</span>
                        <span className="text-[#8B1518]">{inq.id}</span>
                      </div>
                      <p className="text-[#27272A] font-medium mt-1 leading-relaxed">{inq.message}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Contact Form UI Styled After Reference Enquiry Card */}
          <div className="col-span-7">
            <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#E5D5D0] overflow-hidden shadow-xs">
              <div className="bg-[#7A1215] text-[#FFFFFF] px-8 py-5 border-b border-[#560B0E]">
                <h3 className="font-display text-2xl font-bold text-[#FFFFFF]">
                  Send Us a Message
                </h3>
                <p className="text-sm font-medium text-[#FCE7E7] mt-1">
                  Fill out your name, phone, email, and message below.
                </p>
              </div>

              <div className="p-8">
                {lastSubmitted && (
                  <div
                    role="status"
                    className="mb-6 rounded-xl bg-[#FDF2F2] text-[#18181B] p-4 border-2 border-[#8B1518] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8B1518] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-sm leading-relaxed">
                      <p className="font-bold text-[#8B1518]">
                        Inquiry Recorded ({lastSubmitted.id})
                      </p>
                      <p className="text-[#18181B] font-medium mt-0.5">
                        Thank you, <strong>{lastSubmitted.name}</strong>. Your message has been formatted in our frontend inquiry queue and is ready for future Firebase integration.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold text-[#18181B] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className="w-full rounded-lg border-2 border-[#D6C2BC] bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#18181B] placeholder:text-[#52525B] transition-colors duration-200 focus:border-[#8B1518] focus:outline-none focus:ring-2 focus:ring-[#8B1518]/30"
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="mt-1 text-xs font-bold text-[#8B1518]">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-bold text-[#18181B] mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., +92 300 0000000"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                        className="w-full rounded-lg border-2 border-[#D6C2BC] bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#18181B] placeholder:text-[#52525B] transition-colors duration-200 focus:border-[#8B1518] focus:outline-none focus:ring-2 focus:ring-[#8B1518]/30"
                      />
                      {errors.phone && (
                        <p id="contact-phone-error" className="mt-1 text-xs font-bold text-[#8B1518]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-[#18181B] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className="w-full rounded-lg border-2 border-[#D6C2BC] bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#18181B] placeholder:text-[#52525B] transition-colors duration-200 focus:border-[#8B1518] focus:outline-none focus:ring-2 focus:ring-[#8B1518]/30"
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1 text-xs font-bold text-[#8B1518]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-[#18181B] mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your question regarding admissions or school information..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className="w-full rounded-lg border-2 border-[#D6C2BC] bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#18181B] placeholder:text-[#52525B] transition-colors duration-200 focus:border-[#8B1518] focus:outline-none focus:ring-2 focus:ring-[#8B1518]/30"
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1 text-xs font-bold text-[#8B1518]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-1 flex items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-bold text-[#FFFFFF] bg-[#8B1518] rounded-lg hover:bg-[#560B0E] active:scale-[0.99] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518]"
                    >
                      <Send className="w-4 h-4 text-[#FBBF24]" aria-hidden="true" />
                      <span>Submit Message</span>
                    </button>
                    <span className="text-xs font-semibold text-[#3F3F46]">
                      Prepared for Firebase backend integration
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
