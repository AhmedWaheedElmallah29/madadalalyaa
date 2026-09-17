import React from "react";
import frameImage from "../../assets/blog/frame17.png";
import { ThumbsUp, ThumbsDown, MessageSquare, Heart } from "lucide-react";

export default function BlogContent({ likes, isLiked, onLike, commentsCount }) {
  return (
    <div className="w-full font-cairo" dir="rtl">
      {/* المقال */}
      <article className="mt-8">
        <h1 className="text-[40px] font-semibold text-[#242424] mb-4 leading-[75px]">
          أفضل عشر كتب قراءة في الشتاء
        </h1>

        {/* معلومات المقال (Meta) */}
        <div className="flex items-center gap-3 text-[16px] font-semibold text-[#808080] mb-8">
          <span>15 أكتوبر 2025</span>
          <span className="w-3 h-3 rounded-full bg-[#D9D9D9]"></span>
          <span>منذ 5 دقائق</span>
          <span className="w-3 h-3 rounded-full bg-[#D9D9D9]"></span>
          <span>120 قراءة</span>
        </div>

        {/* غلاف المقال */}
        <div className="w-full h-[497px] rounded-[16px] overflow-hidden mb-12 relative shadow-sm">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.4)] z-10 pointer-events-none"></div>
          <img
            src={frameImage}
            alt="صورة غلاف المقال"
            className="w-full h-full object-cover z-0 relative"
          />
        </div>

        {/* صندوق المقدمة */}
        <div className="border-r-[4px] border-[#289D61] pr-5 mb-10">
          <p className="text-[24px] font-semibold text-[#242424] leading-[45px]">
            الشتاء هو الفصل المثالي للقراءة؛ حيث الأجواء الهادئة، والمطر الخفيف،
            وكوب قهوة دافئ، وكتاب يأخذك إلى عالم آخر. في هذا المقال، جمعنا لكِ
            أفضل عشر كتب تناسب أجواء الشتاء، ما بين الروايات الدافئة، والكتب
            الفلسفية، والقصص التي تلامس الروح.
          </p>
        </div>

        {/* محتوى الكتب والأقسام */}
        <div className="space-y-6 text-[#1E6A43]">
          <div>
            <h3 className="text-[18px] font-bold mb-2 leading-[34px]">
              1. مئة عام من العزلة – غابرييل غارسيا ماركيز
            </h3>
            <p className="text-[18px] font-semibold leading-[34px]">
              رواية تأخذك في رحلة ساحرة داخل عالم عائلة بوينديا، حيث تختلط الواقعية بالسحر، وتتشابك الحكايات عبر الأجيال. قراءة مثالية لليالي الشتاء الطويلة.
            </p>
          </div>

          <div>
            <h3 className="text-[18px] font-bold mb-2 leading-[34px]">
              2. الخيميائي – باولو كويلو
            </h3>
            <p className="text-[18px] font-semibold leading-[34px]">
              كتاب يحمل رسائل عميقة عن الأحلام، والبحث عن الذات، والإيمان بالقدر. أسلوبه البسيط والعميق يجعله مناسبًا للقراءة الهادئة في الأجواء الباردة.
            </p>
          </div>
          
          <div>
            <h3 className="text-[18px] font-bold mb-2 leading-[34px]">
              3. رجال في الشمس – غسان كنفاني
            </h3>
            <p className="text-[18px] font-semibold leading-[34px]">
              رواية قصيرة لكنها مؤثرة، تناقش قضايا إنسانية عميقة بأسلوب مكثف ومؤلم، وتترك أثرًا طويلًا في نفس القارئ.
            </p>
          </div>
        </div>

        {/* أزراء التفاعل (أعجاب، ديسلايك) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-16 mb-8 w-full border-t border-b border-gray-300 py-6">
          <div className="flex gap-4">
            <button
              onClick={onLike}
              className="bg-[#FAFAFA] border-[2px] border-[#1E6A43] rounded-full w-[42px] h-[42px] flex items-center justify-center cursor-pointer text-[#1E6A43] hover:bg-[#1E6A43] hover:text-white transition-colors"
              title="إعجاب"
            >
              <ThumbsUp size={20} />
            </button>
            <button
              className="bg-[#FAFAFA] border-[2px] border-[#1E6A43] rounded-full w-[42px] h-[42px] flex items-center justify-center cursor-pointer text-[#1E6A43] hover:bg-[#1E6A43] hover:text-white transition-colors"
              title="غير معجب"
            >
              <ThumbsDown size={20} />
            </button>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2 border-[1px] border-[#1E6A43] rounded-[42px] py-1.5 px-6 bg-transparent text-[#1E6A43]">
              <Heart size={20} fill={isLiked ? "#1E6A43" : "none"} />
              <span className="text-[16px] font-semibold">{likes} اعجاب</span>
            </div>
            <div className="flex items-center gap-2 border-[1px] border-[#1E6A43] rounded-[42px] py-1.5 px-6 bg-transparent text-[#1E6A43]">
              <MessageSquare size={20} />
              <span className="text-[16px] font-semibold">{commentsCount} تعليقات</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}