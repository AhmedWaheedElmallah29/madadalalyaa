import { useLanguage } from "../../context/LanguageContext";
import bookImage from "../../assets/about/Book.svg";

const CTASection = () => {
  const { isArabic } = useLanguage();

  return (
    <section className="px-4 py-6 md:px-6">
      <div className="relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[26px] bg-[#f3f3f3] px-8 py-14 md:min-h-[340px] md:px-14 md:py-16" dir="ltr">
        <div className="relative z-10 mx-auto flex min-h-[240px] max-w-3xl flex-col items-center justify-center text-center" dir="rtl">
          <h2 className="text-3xl font-medium text-gray-800 md:text-4xl lg:text-[2.5rem]">
            {isArabic ? "ابدأ رحلتك الأدبية اليوم" : "Start your literary journey today"}
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-semibold leading-8 text-gray-600 md:text-base lg:text-[1.05rem]">
            {isArabic
              ? "انضم إلى مجتمع من الكتاب والمبدعين واحصل على الدعم الذي تحتاجه لتحقيق حلمك."
              : "Join a community of writers and creators and get the support you need to achieve your dream."}
          </p>
          <button className="mt-20 rounded-md bg-[#289D61] px-30 py-6 text-sm font-semibold text-white transition hover:bg-[#228553]">
            {isArabic ? "انضم إلى برنامج معكم" : "Join the With You program"}
          </button>
          <p className="mt-4 text-xs font-semibold text-gray-500">
            {isArabic ? "نحن هنا لمساعدتك في كل خطوة من رحلتك الإبداعية" : "We are here to support you at every step of your creative journey"}
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-16 z-0 w-[200px] translate-x-3 translate-y-5 md:w-[240px] md:translate-x-2 md:translate-y-7 lg:w-[225px]">
          <img
            src={bookImage}
            alt={isArabic ? "صورة كتاب" : "Book illustration"}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
