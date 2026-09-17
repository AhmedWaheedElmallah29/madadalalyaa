import { useLanguage } from "../../context/LanguageContext";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const { isArabic } = useLanguage();

  const features = isArabic
    ? [
        { type: "course", title: "دورات تدريبية", description: "ورش عمل ودورات متخصصة في الكتابة الإبداعية والنشر والتسويق" },
        { type: "print", title: "خدمات الطباعة", description: "طباعة عالية الجودة بأحدث التقنيات وأفضل المواد لإخراج كتابك بشكل احترافي" },
        { type: "design", title: "التصميم والإخراج الفني", description: "تصاميم احترافية وإخراج فني يليق بمحتوى كتابك ويجذب القراء" },
        { type: "edit", title: "التدقيق اللغوي والعلمي", description: "مراجعة دقيقة من متخصصين لضمان جودة النص وخلوه من الأخطاء" },
      ]
    : [
        { type: "course", title: "Training courses", description: "Specialized workshops in creative writing, publishing, and marketing" },
        { type: "print", title: "Printing services", description: "High-quality printing with modern technology and premium materials" },
        { type: "design", title: "Design and art direction", description: "Professional design and visual direction that suits your book's content" },
        { type: "edit", title: "Proofreading and editing", description: "Careful review by specialists to ensure quality and accuracy" },
      ];

  return (
    <section className="px-4 py-10 md:px-6">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-gray-800 md:text-4xl">{isArabic ? "خدمات الدعم" : "Support services"}</h2>
          <div className="mx-auto mt-3 h-0.5 w-24 bg-[#289D61]" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
