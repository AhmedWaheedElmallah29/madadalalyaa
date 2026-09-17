import { useLanguage } from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const BookDoodlePattern = () => (
  <FontAwesomeIcon icon={faBookOpen} className="text-gray-400 w-full h-full opacity-30" />
);

const WhyChooseUsSection = () => {
  const { isArabic } = useLanguage();

  const items = isArabic
    ? [
      "الكتاب الجدد الذين يسعون لنشر أعمالهم الأولى",
      "المؤلفون الذين يحتاجون إلى دعم احترافي في التحرير والتدقيق",
      "الباحثون والأكاديميون الراغبون في تحويل أبحاثهم إلى كتب منشورة",
      "المبدعون الذين يبحثون عن توجيه في عالم النشر والتسويق",
    ]
    : [
      "New authors who want help publishing their first work",
      "Writers who need professional editing and proofreading support",
      "Researchers and academics who want to turn their studies into published books",
      "Students looking for guidance in publishing and marketing",
    ];

  return (
    <section className="px-4 py-6 md:px-6">
      <div className="relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[26px] bg-[#f2f2f2] px-6 py-10 md:px-10 md:py-12">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute left-0 top-0 h-28 w-28 -translate-x-4 -translate-y-3 opacity-55 md:h-36 md:w-36">
            <BookDoodlePattern />
          </div>
          <div className="absolute right-10 top-10 h-24 w-24 opacity-55 md:h-28 md:w-28">
            <BookDoodlePattern />
          </div>
          <div className="absolute left-16 top-24 h-16 w-16 opacity-35 md:left-24 md:top-28 md:h-18 md:w-18">
            <BookDoodlePattern />
          </div>
          <div className="absolute right-20 bottom-10 h-20 w-20 opacity-45 md:h-24 md:w-24">
            <BookDoodlePattern />
          </div>
          <div className="absolute left-0 bottom-0 h-24 w-24 -translate-x-4 translate-y-4 opacity-45 md:h-28 md:w-28">
            <BookDoodlePattern />
          </div>
        </div>

        <div className="relative text-center">
          <h2 className="text-3xl font-medium text-gray-800 md:text-4xl">
            {isArabic ? "لمن هذا البرنامج؟" : "Who is this program for?"}
          </h2>
          <p className="mt-4 text-[15px] font-semibold text-[#5a6374] md:text-[17px]">
            {isArabic ? "برنامج معكم مصمم خصيصاً لدعم" : "The With You program is specially designed to support"}
          </p>
        </div>

        <div className="relative mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center text-gray-600">
              <div className="mx-auto mb-5 grid h-10 w-10 place-items-center rounded-full bg-[#289D61] text-white shadow-sm">
                <span className="text-[20px] leading-none font-bold">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              </div>
              <p className="mx-auto max-w-[220px] text-[15px] font-semibold leading-8 text-[#5a6374] md:text-[16px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
