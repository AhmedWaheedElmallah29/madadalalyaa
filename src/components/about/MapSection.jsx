import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone, faUser, faPaperPlane, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const MapSection = () => {
  const { isArabic } = useLanguage();

  const [contactInfo, setContactInfo] = useState({
    addressAr: "السعودية الرياض",
    addressEn: "Riyadh, Saudi Arabia",
    email: "info@madadalalyaa.com",
    phone: "+20 123 456 7890",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.7520046898446!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d1d1d1d1d1d%3A0x1d1d1d1d1d1d1d1d!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1234567890"
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        // const response = await fetch('/api/contact-info');
        // const data = await response.json();
        // setContactInfo(data);
      } catch (error) {
        console.error("Failed to fetch contact info", error);
      }
    };
    fetchContactInfo();
  }, []);

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
          <div className={isArabic ? "lg:order-2" : "lg:order-1"}>
            <div className="relative rounded-[22px] overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                title="Map"
                width="100%"
                height="390"
                loading="lazy"
                style={{ border: 0 }}
                src={contactInfo.mapUrl}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md text-sm font-bold text-gray-800 border border-gray-100 flex flex-col items-center">
                <FontAwesomeIcon icon={faLocationDot} className="text-[#289D61] text-lg mb-1" />
                {isArabic ? "مقر دار مداد العليا" : "Madad Al-Alya HQ"}
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#289D61] text-white">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{isArabic ? "العنوان" : "Address"}</div>
                  <div className="text-xs font-semibold text-gray-500">{isArabic ? contactInfo.addressAr : contactInfo.addressEn}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#289D61] text-white">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{isArabic ? "البريد الإلكتروني" : "Email"}</div>
                  <div className="text-xs font-semibold text-gray-500">{contactInfo.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#289D61] text-white">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{isArabic ? "رقم الهاتف" : "Phone"}</div>
                  <div className="text-xs font-semibold text-gray-500">{contactInfo.phone}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={isArabic ? "lg:order-1" : "lg:order-2"}>
            <div className="max-w-md">
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
                  {isArabic ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!"}
                </div>
              )}

              <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
                <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <span className="w-8 text-gray-400 flex justify-center"><FontAwesomeIcon icon={faUser} /></span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder={isArabic ? "الاسم بالكامل" : "Full name"}
                    className="w-full bg-transparent px-2 text-sm font-semibold outline-none placeholder:text-gray-400"
                  />
                </div>
                
                <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <span className="w-8 text-gray-400 flex justify-center"><FontAwesomeIcon icon={faEnvelope} /></span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={isArabic ? "البريد الإلكتروني" : "Email"}
                    className="w-full bg-transparent px-2 text-sm font-semibold outline-none placeholder:text-gray-400"
                  />
                </div>
                
                <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <span className="w-8 text-gray-400 flex justify-center"><FontAwesomeIcon icon={faPhone} /></span>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={isArabic ? "رقم الهاتف" : "Phone number"}
                    className="w-full bg-transparent px-2 text-sm font-semibold outline-none placeholder:text-gray-400"
                  />
                </div>
                
                <div className="flex items-start rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <span className="mt-2 w-8 text-gray-400 flex justify-center">
                    <FontAwesomeIcon icon={faCommentDots} />
                  </span>
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={isArabic ? "اكتب رسالتك هنا ......" : "Write your message here ..."}
                    className="w-full resize-none bg-transparent px-2 pt-1 text-sm font-semibold outline-none placeholder:text-gray-400"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition ${isSubmitting ? 'bg-gray-400' : 'bg-[#289D61] hover:bg-[#228553]'}`}
                >
                  {isSubmitting ? (isArabic ? "جاري الإرسال..." : "Sending...") : (isArabic ? "ارسال الرسالة" : "Send message")}
                  {!isSubmitting && <FontAwesomeIcon icon={faPaperPlane} className={isArabic ? "rotate-180" : ""} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
