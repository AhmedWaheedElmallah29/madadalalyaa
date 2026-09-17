import { useLanguage } from "../../context/LanguageContext";
import cuateImage from "../../assets/about/cuate.png";

const HeroSection = () => {
  const { isArabic } = useLanguage();

  return (
    <section className="px-4 pb-10 pt-4 md:px-6">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 md:grid-cols-2">
        <div className={isArabic ? "text-center md:order-2 md:text-right" : "text-center md:text-left"}>
          <h1 className="mb-2 text-4xl font-medium tracking-tight text-gray-800 md:text-5xl">
            {isArabic ? "“معكم”" : `"With You"`}
          </h1>
          <h2 className="mb-3 text-lg font-medium text-[#289D61] md:text-xl">
            {isArabic ? "برنامج دعم المؤلفين الجدد" : "Support program for new authors"}
          </h2>
          <p className="mx-auto max-w-lg text-base leading-8 text-gray-600 md:text-[17px]">
            {isArabic
              ? "نؤمن بأن كل كاتب يستحق الدعم والتوجيه ليحوّل أفكاره إلى واقع ملموس."
              : "We believe every writer deserves support and guidance to turn ideas into a tangible reality."}
          </p>
          <button className="mt-6 rounded-lg bg-[#289D61] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#228553]">
            {isArabic ? "ابدأ رحلتك معنا" : "Start your journey with us"}
          </button>
        </div>

        <div className={isArabic ? "md:order-1" : ""}>
          <div className="flex justify-center md:justify-end">
            <img src={cuateImage} alt={isArabic ? "صورة توضيحية" : "Illustration"} className="w-full max-w-[520px] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
