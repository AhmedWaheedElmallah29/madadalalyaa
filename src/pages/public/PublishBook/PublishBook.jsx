import { Link } from "react-router-dom";
import PublishingSteps from "../../../components/shared/PublishingSteps";
import ContactSection from "../../../components/shared/ContactSection";
import PageHeader from "../../../components/shared/PageHeader";
const PublishBookPage = () => {
  return (
    <div className="container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#fafafa]">
      {/* ================= TOP PART ================= */}
      <PageHeader
        breadcrumbs={[
          { label: "الرئيسية", path: "/" },
          { label: "المؤلفون", path: "/" },
          { label: "طلب نشر" }
        ]}
        search=""
        onSearchChange={() => {}}
      />
      {/* ================= TOP PART ================= */}

      {/* ================= MAIN BOX ================= */}

      <div
        className="
          bg-[url('/src/assets/img/Gemini_Generated_Image_10znt610znt610zn.jpg')] bg-cover bg-center
          mx-auto
          my-10
          lg:my-15
          min-h-[320px]
          h-auto
          w-full
          rounded-lg
          px-4
          py-10
          sm:px-8
          sm:py-14
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <h1 className="text-2xl sm:text-3xl font-bold my-4">طلب نشر كتاب</h1>

        <p className="text-gray-600 w-full max-w-2xl leading-7 break-words">
          إذا كنت تمتلك عملًا أدبيًا وترغب في نشره بشكل احترافي، يسعد دار مداد
          العلياء استقبال أعمالكم ودراسة إمكانية نشرها وفق معايير مهنية دقيقة.
        </p>

        <Link to="#" className="mt-2">
          <button
            className="
              text-white
              px-5
              py-3
              rounded-lg
              bg-[#289D61]
              hover:bg-white
              hover:text-green-600
              border
              border-green-600
              transition-colors
              duration-200
            "
          >
            تقديم طلب نشر
          </button>
        </Link>
      </div>
      {/* ================= MAIN BOX ================= */}

      {/* ================= BENEFITS ================= */}

      <div
        className="
          bg-[url('/src/assets/img/Gemini_Generated_Image_47v0a747v0a747v0.jpg')] bg-cover bg-center
          mx-auto
          rounded-lg
          my-10
          lg:my-15
          min-h-[400px]
          h-auto
          w-full
          p-6
          sm:p-8
          lg:p-10
          text-center
        "
      >
        <h2 className="text-2xl font-bold mb-8">ماذا نقدّم لك ؟</h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-x-6
            lg:gap-x-12
            gap-y-8
            lg:gap-y-12
            mt-4
            w-full
          "
        >
          {/* 1 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="max-w-[220px] break-words">
              مراجعة مبدئية للعمل الأدبي
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="max-w-[220px] break-words">تقييم لغوي وفني شامل</p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="max-w-[220px] break-words">
              توجيه الكاتب نحو أفضل شكل للنشر
            </p>
          </div>

          {/* 4 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="max-w-[220px] break-words">
              متابعة ودعم المؤلف خلال مراحل النشر المختلفة
            </p>
          </div>

          {/* 5 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="max-w-[220px] break-words">إخراج فني احترافي</p>
          </div>

          {/* 6 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="max-w-[220px] break-words">طباعة عالية الجودة</p>
          </div>

          {/* 7 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="max-w-[220px] break-words">
              تسويق وترويج للعمل بعد النشر
            </p>
          </div>

          {/* 8 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="max-w-[220px] break-words">
              استشارات تحريرية لتطوير العمل قبل النشر
            </p>
          </div>
        </div>
      </div>
      {/* ================= BENEFITS ================= */}

      {/* ================= HOW TO APPLY ================= */}
      <PublishingSteps />
      {/* ================= HOW TO APPLY ================= */}

      {/* ================= REQUIRED DATA ================= */}

      <div
        className="
          bg-[url('/src/assets/img/Gemini_Generated_Image_2gk3372gk3372gk3.png')] bg-cover bg-center
          mx-auto
          rounded-lg
          my-10
          lg:my-15
          min-h-[420px]
          h-auto
          w-full
          p-6
          sm:p-8
          lg:p-14
          text-center
        "
      >
        <h2 className="text-2xl font-bold mb-10 lg:mb-14">
          البيانات المطلوبه في التقديم
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            lg:gap-x-12
            lg:gap-y-12
            mt-4
            w-full
          "
        >
          {/* 1 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="break-words">الاسم الكامل</p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="break-words">البريد الإلكتروني</p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="break-words">رقم الهاتف</p>
          </div>

          {/* 4 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="break-words">نوع العمل</p>
          </div>

          {/* 5 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="break-words">نبذة عن الكاتب</p>
          </div>

          {/* 6 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="break-words">ملخص عن العمل</p>
          </div>

          {/* 7 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="break-words">عدد الصفحات التقريبي</p>
          </div>

          {/* 8 */}
          <div className="flex flex-col items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#289D61] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-check text-white text-xl"></i>
            </div>

            <p className="break-words">الفئة العمرية المستهدفة</p>
          </div>
        </div>
      </div>
      {/* ================= REQUIRED DATA ================= */}

      {/* ================= STORY SECTION ================= */}

      <div
        className="
          bg-[url('/src/assets/img/Gemini_Generated_Image_v4ac7nv4ac7nv4ac.jfif')] bg-cover bg-center
          mx-auto
          my-10
          lg:my-15
          min-h-[350px]
          h-auto
          w-full
          px-4
          py-10
          sm:px-8
          lg:px-16
          rounded-lg
          text-center
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold my-4">
          هل أنت مستعد لمشاركة قصتك؟
        </h1>

        <p className="text-gray-600 w-full max-w-2xl text-base sm:text-lg leading-7 break-words">
          للتقديم، يُرجى ملء نموذج التقديم من خلال الرابط التالي. نتطلع لقراءة
          مخطوطتك ونأمل في الشراكة معك لإيصال رؤيتك الأدبية إلى القراء في كل
          مكان.
        </p>

        <Link to="#" className="mt-2">
          <button
            className="
              text-white
              text-base
              sm:text-lg
              px-5
              py-3
              my-4
              rounded-lg
              bg-[#289D61]
              hover:bg-white
              hover:text-green-600
              border
              border-green-600
              transition-colors
              duration-200
            "
          >
            فتح نموذج التقديم
          </button>
        </Link>

        <p className="text-sm sm:text-base text-gray-500">
          سيتم فتح الرابط في نافذه جديده
        </p>
      </div>
      {/* ================= STORY SECTION ================= */}

      {/* ================= CONTACT us ================= */}

      <div>
        <ContactSection />
        {/* ================= CONTACT us ================= */}
      </div>
    </div>
  );
};

export default PublishBookPage;
