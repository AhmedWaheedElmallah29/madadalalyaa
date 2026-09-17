import { useLanguage } from "../../../context/LanguageContext";
import HeroSection from "../../../components/about/HeroSection";
import AboutUsSection from "../../../components/about/AboutUsSection";
import WhyChooseUsSection from "../../../components/about/WhyChooseUsSection";
import FeaturesSection from "../../../components/about/FeaturesSection";
import CTASection from "../../../components/about/CTASection";
import MapSection from "../../../components/about/MapSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import SearchBar from "../../../components/shared/SearchBar";

const WithYou = () => {
  const { isArabic } = useLanguage();

  return (
    <div className="w-full bg-white relative">
      {/* Floating Social Icons Bar */}
      <div className="fixed left-0 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-0 shadow-lg border border-gray-100 rounded-r-lg overflow-hidden">
        <a href="#" className="flex h-12 w-12 items-center justify-center bg-[#1877F2] text-white transition-opacity hover:opacity-90">
          <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
        </a>
        <a href="#" className="flex h-12 w-12 items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white transition-opacity hover:opacity-90">
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
        </a>
        <a href="#" className="flex h-12 w-12 items-center justify-center bg-[#25D366] text-white transition-opacity hover:opacity-90">
          <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
        </a>
      </div>

      <section className="px-4 pb-6 pt-5 md:px-6">
        <div className="mx-auto w-full max-w-[1280px]" dir="ltr">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-[360px] md:order-1">
              <SearchBar placeholder={isArabic ? "بحث" : "Search"} className="!w-full md:!w-[360px]" />
            </div>

            <div className="text-sm text-gray-500 md:order-2 md:text-right" dir="rtl">
              <span className="font-semibold text-[#289D61]">{isArabic ? "الرئيسية" : "Home"}</span>
              <span className="mx-2">/</span>
              <span>{isArabic ? "المؤلفون" : "Authors"}</span>
              <span className="mx-2">/</span>
              <span className="font-semibold text-[#289D61]">{isArabic ? "معكم" : "With You"}</span>
            </div>
          </div>
        </div>
      </section>

      <HeroSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <FeaturesSection />
      <CTASection />
      <MapSection />
    </div>
  );
};

export default WithYou;
