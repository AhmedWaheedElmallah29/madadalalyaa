import { useEffect, useState } from "react";
import PageHeader from "../../../components/shared/PageHeader";
import ContactSection from "../../../components/shared/ContactSection";

// We'll import the images we copied earlier
import frame1Img from "../../../assets/competition/frame1.png";
import frame2Img from "../../../assets/competition/frame2.png";
import frame3Img from "../../../assets/competition/frame3.png";
import {
  LuBookOpen,
  LuBook,
  LuPenTool,
  LuGraduationCap,
  LuCheck,
} from "react-icons/lu";

export default function Competition() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex w-full flex-col gap-10 bg-[#FAFAFA] pb-20 lg:gap-14 font-['Cairo']">
      <PageHeader
        title={<span className="text-[#289D61] font-bold">المسابقة</span>}
        search={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        breadcrumbs={[
          { label: "الرئيسية", path: "/" },
          { label: "المؤلفون", path: "#" },
          { label: "المسابقة", path: "/authors/competition" },
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 flex flex-col gap-12 lg:gap-20">
        {/* Hero Section */}
        <section className="w-full text-center py-6">
          <img
            src={frame1Img}
            alt="مسابقة دار مداد العلماء"
            className="w-full max-w-[850px] h-auto block mx-auto object-contain"
          />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-[#f4f5f6] rounded-2xl p-6 lg:p-12 flex justify-center items-center"
        >
          <img
            src={frame2Img}
            alt="عن المسابقة"
            className="w-full max-w-[850px] h-auto block object-contain"
          />
        </section>

        {/* Categories Section */}
        <section id="categories" className="flex flex-col gap-8">
          <div className="text-center relative">
            <h2 className="text-2xl font-bold text-[#1e293b]">
              مجالات المشاركة
            </h2>
            <div className="w-10 h-1 bg-[#289D61] mx-auto mt-2 rounded-sm"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e6f7ef] text-[#289D61] rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                <LuBookOpen />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">الرواية</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                أعمال روائية متكاملة تعالج قضايا إنسانية أو اجتماعية أو فكرية
                بأسلوب إبداعي.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e6f7ef] text-[#289D61] rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                <LuBook />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                القصة القصيرة
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                مجموعة قصصية أو قصة منفردة تتميز بالعمق واللغة السليمة.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e6f7ef] text-[#289D61] rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                <LuPenTool />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">الشعر</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                ديوان شعري أو مجموعة مختارة من القصائد المكتوبة باللغة العربية
                الفصحى.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e6f7ef] text-[#289D61] rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                <LuGraduationCap />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                الدراسات الفكرية
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                أبحاث أو دراسات تتناول قضايا فكرية أو ثقافية أو إنسانية بأسلوب
                علمي ومنهجي.
              </p>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section
          id="conditions"
          className="bg-[#f4f5f6] rounded-2xl p-6 lg:p-10 flex flex-col gap-8"
        >
          <div className="text-center relative">
            <h2 className="text-2xl font-bold text-[#1e293b]">شروط المشاركة</h2>
            <div className="w-10 h-1 bg-[#289D61] mx-auto mt-2 rounded-sm"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
              <div className="w-6 h-6 bg-[#289D61] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <LuCheck size={14} strokeWidth={3} />
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">اللغة</h4>
              <p className="text-xs text-gray-500">
                الالتزام باستخدام اللغة العربية الفصحى.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
              <div className="w-6 h-6 bg-[#289D61] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <LuCheck size={14} strokeWidth={3} />
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">الأصالة</h4>
              <p className="text-xs text-gray-500">
                أن يكون العمل أصيلاً وغير منشور سابقاً.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
              <div className="w-6 h-6 bg-[#289D61] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <LuCheck size={14} strokeWidth={3} />
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">
                صيغة الملف
              </h4>
              <p className="text-xs text-gray-500">
                إرسال العمل بصيغة PDF وبخطوط واضحة.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
              <div className="w-6 h-6 bg-[#289D61] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <LuCheck size={14} strokeWidth={3} />
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">
                الحد الأدنى للكلمات
              </h4>
              <p className="text-xs text-gray-500">
                ألا يقل العمل الروائي عن 15 ألف كلمة.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="flex flex-col gap-10 py-6">
          <div className="text-center relative">
            <h2 className="text-2xl font-bold text-[#1e293b]">آلية التقديم</h2>
            <div className="w-10 h-1 bg-[#289D61] mx-auto mt-2 rounded-sm"></div>
          </div>
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Dashed Line */}
            <div className="absolute hidden sm:block top-[20px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-[#a7f3d0] z-0"></div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0 relative z-10">
              <div className="bg-[#FAFAFA] text-center w-[140px]">
                <div className="w-10 h-10 bg-[#289D61] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  1
                </div>
                <h4 className="text-sm font-bold text-gray-800 mb-1">
                  الإعداد
                </h4>
                <p className="text-xs text-gray-500">
                  إعداد الملف وتنسيق الشروط.
                </p>
              </div>
              <div className="bg-[#FAFAFA] text-center w-[140px]">
                <div className="w-10 h-10 bg-[#289D61] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  2
                </div>
                <h4 className="text-sm font-bold text-gray-800 mb-1">
                  التعبئة
                </h4>
                <p className="text-xs text-gray-500">
                  تعبئة نموذج التقديم الإلكتروني.
                </p>
              </div>
              <div className="bg-[#FAFAFA] text-center w-[140px]">
                <div className="w-10 h-10 bg-[#289D61] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  3
                </div>
                <h4 className="text-sm font-bold text-gray-800 mb-1">
                  رفع الملف
                </h4>
                <p className="text-xs text-gray-500">
                  رفع ملف العمل ونشر الطلب.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="publish" className="text-center py-6">
          <img
            src={frame3Img}
            alt="هل أنت مستعد لنشر إبداعك"
            className="w-full max-w-[850px] h-auto block mx-auto object-contain"
          />
        </section>

        {/* Contact Form & Map */}
        <ContactSection />
      </div>
    </div>
  );
}
