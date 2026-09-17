import React, { useState } from "react";
import { Send } from "lucide-react";
import userAvatar from "../../assets/blog/Ellipse 3.png";
import userAvatar2 from "../../assets/blog/Ellipse 3 (1).png";

export default function CommentsSection({ comments, onAddComment }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    onAddComment(newComment);
    setNewComment("");
  };

  return (
    <div className="w-full font-cairo" dir="rtl">
      <div className="w-full mt-5">
        <span className="block text-[14px] font-semibold text-[#242424] mb-3 text-right">
          أضف تعليقك
        </span>

        <form onSubmit={handleSubmit} className="mb-10">
          <div className="border border-gray-200 rounded-2xl bg-gray-50/50 p-3 mb-4 focus-within:border-[#289D61] focus-within:ring-1 focus-within:ring-[#289D61] transition-all">
            <textarea
              className="w-full min-h-[80px] bg-transparent outline-none resize-none text-[14px] text-right text-[#333] font-cairo placeholder-gray-400"
              placeholder="شاركنا رأيك في هذا المقال ...."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="text-[13px] text-red-500 font-medium bg-red-50 px-3 py-1.5 rounded-full">
              يجب عليك تسجيل الدخول أولا لنشر التعليق
            </span>
            <button
              type="submit"
              className="flex items-center flex-row-reverse gap-2 bg-[#289D61] text-white rounded-xl py-2.5 px-6 text-[14px] font-semibold cursor-pointer transition-all hover:bg-[#1e7a4b] hover:shadow-md active:scale-95"
            >
              <Send size={18} />
              <span>اضافة التعليق</span>
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-6 mt-8 w-full border-t border-gray-100 pt-8">
          <h3 className="text-[22px] font-bold text-[#242424] text-right mb-2 relative inline-block">
            التعليقات
            <div className="w-8 h-1 bg-[#289D61] rounded-full absolute -bottom-2 right-0"></div>
          </h3>

          <div className="flex flex-col gap-8 mt-6">
            <div className="flex flex-col gap-3 text-right bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src={userAvatar}
                  alt="صورة المستخدم"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <span className="block text-[14px] font-bold text-[#242424]">
                    آية محمد
                  </span>
                  <span className="text-[12px] text-gray-500">منذ ساعتين</span>
                </div>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed m-0 mt-1">
                مقال رائع وممتع، فالقراءة في فصل الشتاء لها طابع خاص، وقد شجعني
                هذا المقال على العودة إلى القراءة من جديد.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-right bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src={userAvatar2}
                  alt="صورة المستخدم"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <span className="block text-[14px] font-bold text-[#242424]">
                    أحمد علي
                  </span>
                  <span className="text-[12px] text-gray-500">منذ 3 ساعات</span>
                </div>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed m-0 mt-1">
                اختيارات موفقة بالفعل، معظم هذه الكتب تناسب كثيرا مع أجواء
                الشتاء الهادئة. أتطلع لقراءة مقالات أخرى بنفس المستوى.
              </p>
            </div>
          </div>
        </div>

        <button className="block w-full max-w-sm mx-auto mt-12 bg-transparent border-2 border-[#289D61] text-[#289D61] rounded-xl py-3 px-8 text-[14px] font-bold text-center transition-all hover:bg-[#289D61] hover:text-white cursor-pointer">
          عرض المزيد من التعليقات
        </button>
      </div>
    </div>
  );
}