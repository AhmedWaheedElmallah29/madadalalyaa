import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone, faUser, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactInfoSection = () => {
  const { isArabic } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form submitted successfully:", formData);
      setSubmitSuccess(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 py-8 md:px-6">
      <div className="mx-auto w-full max-w-[1280px] rounded-[26px] bg-white px-6 py-8 shadow-[0_12px_30px_rgba(0,0,0,0.04)] md:px-10 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-medium text-gray-800 md:text-4xl">
              {isArabic ? "تواصل معنا" : "Contact us"}
            </h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-gray-500 md:text-base">
              {isArabic
                ? "نسعد بالإجابة على استفساراتكم ومساعدتكم. يرجى ملء النموذج أدناه وسنتواصل معكم في أقرب وقت ممكن."
                : "We are happy to answer your questions and help. Please fill out the form below and we will contact you as soon as possible."}
            </p>

            {submitSuccess && (
              <div className="mt-4 rounded-md bg-green-50 p-3 text-sm text-green-600">
                {isArabic ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً." : "Your message has been sent successfully! We will contact you soon."}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="fullName" className="text-sm font-semibold text-gray-700">{isArabic ? "الاسم الكامل" : "Full Name"}</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm font-medium text-gray-700 outline-none transition focus:border-[#289D61] focus:bg-white"
                      placeholder={isArabic ? "أدخل اسمك" : "Enter your name"}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">{isArabic ? "البريد الإلكتروني" : "Email Address"}</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3.5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm font-medium text-gray-700 outline-none transition focus:border-[#289D61] focus:bg-white"
                      placeholder={isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700">{isArabic ? "رقم الهاتف" : "Phone Number"}</label>
                <div className="relative">
                  <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm font-medium text-gray-700 outline-none transition focus:border-[#289D61] focus:bg-white"
                    placeholder={isArabic ? "أدخل رقم هاتفك" : "Enter your phone number"}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">{isArabic ? "الرسالة" : "Message"}</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm font-medium text-gray-700 outline-none transition focus:border-[#289D61] focus:bg-white"
                    placeholder={isArabic ? "اكتب رسالتك هنا..." : "Write your message here..."}
                  />
                  <div className="pointer-events-none absolute bottom-3 right-3 text-gray-400">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-md bg-[#289D61] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#228553] disabled:opacity-60"
              >
                {isSubmitting ? "جاري الإرسال..." : isArabic ? "إرسال الرسالة" : "Send Message"}
              </button>
            </form>
          </div>

          <div className="rounded-[26px] overflow-hidden border border-gray-200 shadow-sm h-full min-h-[400px]">
            <iframe
              title="Map"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.7520046898446!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
