import Map from "./Map";
const ContactSection = () => {
  return (
    <section className="w-full rounded-xl bg-white p-5 sm:p-8 lg:p-10">
      <div
        dir="rtl"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start"
      >
        {/* ================= RIGHT - MAP ================= */}

        <div className="w-full min-w-0">
          <div className="relative w-full h-[280px] sm:h-[350px] rounded-xl overflow-hidden z-0">
            <Map />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mt-6">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-11 shrink-0 rounded-lg bg-[#289D61] flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-white"></i>
              </div>

              <div className="min-w-0">
                <p className="font-medium">العنوان</p>
                <p className="text-gray-500 text-sm">السعودية، الرياض</p>
              </div>
            </div>

            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-11 shrink-0 rounded-lg bg-[#289D61] flex items-center justify-center">
                <i className="fa-solid fa-envelope text-white"></i>
              </div>

              <div className="min-w-0">
                <p className="font-medium">البريد الإلكتروني</p>

                <p dir="ltr" className="text-gray-500 text-sm break-all">
                  info@madadalalyaa.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-11 shrink-0 rounded-lg bg-[#289D61] flex items-center justify-center">
                <i className="fa-solid fa-phone text-white"></i>
              </div>

              <div className="min-w-0">
                <p className="font-medium">رقم الهاتف</p>

                <p dir="ltr" className="text-gray-500 text-sm">
                  +20 123 456 7890
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LEFT - FORM ================= */}

        <div className="w-full min-w-0">
          <h2 className="text-2xl font-bold mb-3">تواصل معنا</h2>

          <p className="text-gray-500 text-sm leading-7 mb-6">
            نسعد بالإجابة على استفساراتكم ومساعدتكم، يرجى ملء النموذج أدناه
            وسنتواصل معكم في أقرب وقت ممكن.
          </p>

          <form className="flex flex-col gap-4">
            <div className="relative">
              <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

              <input
                type="text"
                placeholder="الاسم بالكامل"
                className="w-full border border-gray-300 rounded-md px-4 py-3 pl-11 text-right outline-none focus:border-[#289D61]"
              />
            </div>

            <div className="relative">
              <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full border border-gray-300 rounded-md px-4 py-3 pl-11 text-right outline-none focus:border-[#289D61]"
              />
            </div>

            <div className="relative">
              <i className="fa-solid fa-mobile-screen absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full border border-gray-300 rounded-md px-4 py-3 pl-11 text-right outline-none focus:border-[#289D61]"
              />
            </div>

            <div className="relative">
              <i className="fa-regular fa-paper-plane absolute left-4 top-4 text-gray-400"></i>

              <textarea
                rows="6"
                placeholder="اكتب رسالتك هنا..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 pl-11 text-right outline-none resize-none focus:border-[#289D61]"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-fit text-white px-7 py-3 rounded-md bg-[#289D61] hover:bg-white hover:text-[#289D61] border border-[#289D61] transition-colors duration-200"
            >
              <i className="fa-regular fa-paper-plane ml-2"></i>
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
