import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // التأكد من إدخال البيانات
    if (!name || !email || !phone || !message) {
      alert("من فضلك املأ جميع البيانات.");
      return;
    }

    // التحقق من الإيميل
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("من فضلك أدخل بريد إلكتروني صحيح.");
      return;
    }

    // نجاح الإرسال
    alert("تم إرسال رسالتك بنجاح ❤️");

    // تفريغ الفورم
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <main className="w-[90%] max-w-[1100px] mx-auto my-[30px] bg-white rounded-[20px] p-[22px] shadow-[0_5px_25px_rgba(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[55px]">
      {/* Contact Form Section */}
      <section className="contact-form rtl:direction-rtl p-[5px_0]">
        <h1 className="text-[28px] font-bold text-center mb-2 text-[#292929]">
          contact us
        </h1>
        <p className="intro text-center text-[#777] text-[13px] leading-[1.9] mb-7">
          نسعد بالإجابة على استفساراتكم ومساعدتكم.
          <br />
          يرجى ملء النموذج أدناه
          <br />
          وسنتواصل معكم في أقرب وقت ممكن.
        </p>

        <form id="contactForm" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="input-group relative mb-4">
            <i className="fa-regular fa-user absolute right-[18px] top-1/2 -translate-y-1/2 text-[#999] text-[14px] z-2"></i>
            <input
              type="text"
              id="name"
              placeholder="الاسم بالكامل"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[#e8e8e8] rounded-[6px] outline-none bg-white text-[#444] font-inherit text-[13px] transition-all duration-300 h-[36px] px-[45px_15px] focus:border-[#319967] focus:shadow-[0_0_0_2px_rgba(49,153,103,0.08)] placeholder:text-[#aaa]"
            />
          </div>

          {/* Email Input */}
          <div className="input-group relative mb-4">
            <i className="fa-regular fa-envelope absolute right-[18px] top-1/2 -translate-y-1/2 text-[#999] text-[14px] z-2"></i>
            <input
              type="email"
              id="email"
              placeholder="البريد الإلكتروني"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#e8e8e8] rounded-[6px] outline-none bg-white text-[#444] font-inherit text-[13px] transition-all duration-300 h-[36px] px-[45px_15px] focus:border-[#319967] focus:shadow-[0_0_0_2px_rgba(49,153,103,0.08)] placeholder:text-[#aaa]"
            />
          </div>

          {/* Phone Input */}
          <div className="input-group relative mb-4">
            <i className="fa-solid fa-mobile-screen-button absolute right-[18px] top-1/2 -translate-y-1/2 text-[#999] text-[14px] z-2"></i>
            <input
              type="tel"
              id="phone"
              placeholder="رقم الهاتف"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-[#e8e8e8] rounded-[6px] outline-none bg-white text-[#444] font-inherit text-[13px] transition-all duration-300 h-[36px] px-[45px_15px] focus:border-[#319967] focus:shadow-[0_0_0_2px_rgba(49,153,103,0.08)] placeholder:text-[#aaa]"
            />
          </div>

          {/* Message Textarea */}
          <div className="input-group textarea-group relative mb-4">
            <i className="fa-regular fa-paper-plane absolute right-[18px] top-5 text-[#999] text-[14px] z-2"></i>
            <textarea
              id="message"
              placeholder="اكتب رسالتك هنا ........"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-[#e8e8e8] rounded-[6px] outline-none bg-white text-[#444] font-inherit text-[13px] transition-all duration-300 h-[170px] resize-none px-[45px_15px] py-[13px] focus:border-[#319967] focus:shadow-[0_0_0_2px_rgba(49,153,103,0.08)] placeholder:text-[#aaa]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="send-btn block mx-auto mt-8 min-w-[136px] h-[37px] px-5 border-none rounded-[5px] bg-[#2e9a66] text-white font-inherit text-[13px] cursor-pointer transition-all duration-300 hover:bg-[#257d54] hover:-translate-y-1"
          >
            <i className="fa-regular fa-paper-plane ml-2"></i>
            إرسال الرسالة
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="map-section rtl:direction-rtl">
        <div className="map-container relative h-[397px] overflow-hidden rounded-[15px] bg-[linear-gradient(135deg,#e9edf0_0%,#dce3e8_45%,#eef0f1_100%)]">
          {/* Map Lines */}
          <div className="absolute inset-[-20%] opacity-[0.55] bg-[linear-gradient(55deg,transparent_0_20%,#fff_20.5%_21.2%,transparent_21.5%_45%,#fff_45.5%_46.5%,transparent_47%),linear-gradient(125deg,transparent_0_35%,#fff_35.5%_36.5%,transparent_37%_60%,#fff_60.5%_61.3%,transparent_62%)] -rotate-[5deg]"></div>

          {/* River */}
          <div className="river absolute w-[150%] h-[105px] left-[-25%] top-[115px] bg-[#72b8ec] rounded-[50%] rotate-[13deg] shadow-[0_0_0_18px_rgba(255,255,255,0.35),0_0_0_24px_#72b8ec]">
            <div className="absolute w-[60%] h-[55px] bg-[#dce7ed] rounded-[50%] left-[15%] top-5"></div>
          </div>

          {/* Park */}
          <div className="park absolute w-[180px] h-[145px] right-[-15px] bottom-[-15px] bg-[#6bd0bb] rounded-[20px_0_0_0] -rotate-[8deg] opacity-[0.85]">
            <div className="absolute w-[45px] h-[180px] bg-[#50b7a6] left-[75px] top-[-15px] rotate-[22deg] opacity-[0.6]"></div>
          </div>

          {/* Yellow Roads */}
          <div className="yellow-road absolute w-[7px] h-[520px] bg-[#f6df28] top-[-60px] left-[105px] rotate-[27deg] z-[2]"></div>
          <div className="yellow-road second absolute w-[7px] h-[520px] bg-[#f6df28] top-[-90px] right-[150px] rotate-[10deg] z-[2]"></div>

          {/* White Roads */}
          <div className="road absolute h-[7px] w-[650px] bg-[rgba(255,255,255,0.9)] z-[3] -rotate-[22deg] left-[-70px] top-[255px]"></div>
          <div className="road second absolute h-[7px] w-[650px] bg-[rgba(255,255,255,0.9)] z-[3] rotate-[18deg] left-[-50px] top-[175px]"></div>

          {/* Map Label */}
          <div className="map-label absolute top-[110px] right-[125px] z-[10] bg-white border border-[#78a994] rounded-[6px] px-[18px] py-2 text-[#3e755b] text-[12px] font-semibold shadow-[0_2px_7px_rgba(0,0,0,0.05)]">
            مقر دار الأطباء
          </div>

          {/* Main Location Pin */}
          <div className="location-pin absolute z-[20] top-[155px] right-[235px] w-[65px] h-[65px] bg-[#17814e] rounded-[50%_50%_50%_0] -rotate-[45deg] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
            <div className="absolute w-[14px] h-[14px] bg-white rounded-[50%] top-[25px] left-[25px]"></div>
          </div>

          {/* Small Pins */}
          <div className="small-pin pin-one absolute z-[15] w-[20px] h-[20px] bg-[#df3928] rounded-[50%_50%_50%_0] -rotate-[45deg] bottom-[27px] left-[50px]">
            <div className="absolute w-[6px] h-[6px] bg-white rounded-[50%] top-[7px] left-[7px]"></div>
          </div>
          <div className="small-pin pin-two absolute z-[15] w-[20px] h-[20px] bg-[#df3928] rounded-[50%_50%_50%_0] -rotate-[45deg] bottom-[70px] right-[110px]">
            <div className="absolute w-[6px] h-[6px] bg-white rounded-[50%] top-[7px] left-[7px]"></div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-info grid grid-cols-3 gap-[18px] mt-4">
          {/* Address */}
          <div className="info-item flex items-center gap-[10px] rtl:direction-rtl">
            <div className="info-icon w-[36px] h-[36px] flex-shrink-0 rounded-[7px] bg-[#299662] text-white flex items-center justify-center text-[15px]">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="info-content flex flex-col gap-[2px]">
              <span className="info-title text-[11px] font-semibold text-[#333]">
                العنوان
              </span>
              <span className="info-text text-[9px] text-[#777] rtl:direction-rtl">
                السعودية، الرياض
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="info-item flex items-center gap-[10px] rtl:direction-rtl">
            <div className="info-icon w-[36px] h-[36px] flex-shrink-0 rounded-[7px] bg-[#299662] text-white flex items-center justify-center text-[15px]">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="info-content flex flex-col gap-[2px]">
              <span className="info-title text-[11px] font-semibold text-[#333]">
                رقم الهاتف
              </span>
              <span className="info-text text-[9px] text-[#777] ltr:direction-ltr">
                +20 123 456 7890
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="info-item flex items-center gap-[10px] rtl:direction-rtl">
            <div className="info-icon w-[36px] h-[36px] flex-shrink-0 rounded-[7px] bg-[#299662] text-white flex items-center justify-center text-[15px]">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="info-content flex flex-col gap-[2px]">
              <span className="info-title text-[11px] font-semibold text-[#333]">
                البريد الإلكتروني
              </span>
              <span className="info-text text-[9px] text-[#777] ltr:direction-ltr">
                info@madadalayaa.com
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 850px) {
          main {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .map-section {
            order: -1;
          }
          .map-container {
            height: 330px;
          }
          .contact-info {
            grid-template-columns: 1fr;
          }
          .info-item {
            justify-content: flex-start;
          }
        }

        @media (max-width: 500px) {
          main {
            width: 94%;
            padding: 15px;
            margin: 15px auto;
          }
          .contact-form h1 {
            font-size: 24px;
          }
          .map-container {
            height: 270px;
          }
          .location-pin {
            right: 45%;
            top: 110px;
          }
          .map-label {
            right: 50%;
            transform: translateX(50%);
            top: 65px;
            white-space: nowrap;
          }
        }
      `}</style>
    </main>
  );
};

export default Contact;
