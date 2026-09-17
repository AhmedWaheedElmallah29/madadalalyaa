import { useLanguage } from "../../context/LanguageContext";
import aboutImage from "../../assets/about/rafiki.png";

const AboutUsSection = () => {
  const { isArabic } = useLanguage();

  return (
    <section className="px-4 py-5 md:px-6">
      <div className="mx-auto w-full max-w-[1280px] rounded-[26px] bg-[#f2f2f2] px-6 py-8 md:px-10 md:py-12" dir="ltr">
        <div className="grid items-center gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-12">
          <div className="md:order-1">
            <div className="mx-auto max-w-[360px] translate-y-3 md:translate-y-10">
              <img
                src={aboutImage}
                alt={isArabic ? "صورة توضيحية للبرنامج" : "Program illustration"}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="md:order-2 md:text-right" dir="rtl">
            <div className="ml-auto max-w-[700px] md:pr-2">
              <h2 className="mb-1 text-3xl font-medium text-gray-800 md:text-[2.1rem]">
                {isArabic ? "عن البرنامج" : "About the program"}
              </h2>
              <div className={isArabic ? "mb-6 mt-2 ml-auto h-1 w-20 bg-[#289D61] rounded-full" : "mb-6 mt-2 h-1 w-20 bg-[#289D61] rounded-full"} />
              <p className="text-[18px] font-bold leading-[2.15rem] text-[#5a6374] md:text-[19px]">
                {isArabic
                  ? "برنامج \"معكم\" هو مبادرة شاملة من دار النشر لدعم الكتاب والمؤلفين الجدد في رحلتهم الإبداعية. نوفر لك كل ما تحتاجه من خدمات احترافية تشمل التدقيق اللغوي والعلمي، والتصميم الفني، وخدمات الطباعة، بالإضافة إلى دورات تدريبية متخصصة. هدفنا هو تمكينك من تقديم عملك الأدبي بأفضل صورة ممكنة، لأننا نؤمن بأن كل قصة تستحق أن تُروى."
                  : "The \"With You\" program is a comprehensive initiative from the publishing house to support new writers and authors on their creative journey. We provide everything you need from professional services including linguistic and scientific editing, artistic design, printing services, and specialized training courses. Our goal is to help you present your literary work in the best possible form because every story deserves to be told."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
