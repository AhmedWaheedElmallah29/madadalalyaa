import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import blogImg1 from "../../assets/blog/Frame 41.png";
import blogImg2 from "../../assets/blog/Frame 41 (1).png";
import blogImg3 from "../../assets/blog/Frame 41 (2).png";

const blogs = [
  {
    id: 1,
    title: "أفضل 10 كتب قراءة في الشتاء",
    desc: "تفاصيل عن الفعالية الجديدة وطرق المشاركة",
    image: blogImg1,
    date: "12 فبراير 2025",
    commentsCount: 3,
    readsCount: 120,
  },
  {
    id: 2,
    title: "خصومات خاصة على مجموعة الفلسفة",
    desc: "مقال قصير يستعرض أهم الكتب التي يلزم قراءتها في ليالي الشتاء",
    image: blogImg2,
    date: "12 فبراير 2025",
    commentsCount: 3,
    readsCount: 120,
  },
  {
    id: 3,
    title: "إصدار جديد من دار مداد العلياء",
    desc: "تعرف على أحدث الإصدارات الجديدة المتوفرة الآن في مكتبتنا",
    image: blogImg3,
    date: "12 فبراير 2025",
    commentsCount: 3,
    readsCount: 120,
  },
];

export default function RelatedBlogs() {
  return (
    <div className="w-full flex flex-col items-center pb-24 font-cairo border-t border-[#9D9D9D] pt-24 mt-24" dir="rtl">
      
      {/* Title */}
      <div className="text-center relative mb-16">
        <h2 className="text-[32px] font-semibold text-[#242424] leading-[60px] mb-2">
          مقالات ذات صلة
        </h2>
        <div className="w-[218px] h-0 border-[2px] border-[#289D61] mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-[1300px] relative">
        
        {/* Navigation Arrows (Optional visual match to Figma) */}
        <button className="hidden xl:flex absolute top-1/2 -right-12 -translate-y-1/2 w-10 h-10 bg-white border-[0.1px] border-[#289D61] shadow-[0px_2px_15px_rgba(0,0,0,0.15)] rounded text-gray-400 items-center justify-center">
          <ArrowLeft className="rotate-180" size={24} />
        </button>
        <button className="hidden xl:flex absolute top-1/2 -left-12 -translate-y-1/2 w-10 h-10 bg-white border-[0.1px] border-[#289D61] shadow-[0px_2px_15px_rgba(0,0,0,0.15)] rounded text-gray-400 items-center justify-center">
          <ArrowLeft size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {blogs.map((blog) => (
            <div
              className="w-full max-w-[419px] h-[634px] bg-[#FFFFFF] shadow-[0px_4px_25px_rgba(0,0,0,0.15)] rounded-[8px] p-[24px] flex flex-col relative"
              key={blog.id}
            >
              <div className="w-[371px] h-[299px] mx-auto overflow-hidden rounded-[8px] mb-6 shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center flex-1 flex flex-col items-center">
                <h3 className="text-[16px] font-bold text-[#242424] leading-[30px] w-[209px] mx-auto mb-2 truncate">
                  {blog.title}
                </h3>
                <p className="text-[16px] font-semibold text-[#4A5565] leading-[30px] w-[307px] mx-auto mb-6 text-right">
                  {blog.desc}
                </p>

                <div className="text-[14px] font-bold text-[#808080] leading-[26px] text-right w-[178px] mx-auto mb-auto">
                  تاريخ النشر: {blog.date}
                  <br />
                  عدد التعليقات: {blog.commentsCount}
                  <br />
                  عدد القراءات: {blog.readsCount}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 w-full">
                {/* Like / Dislike */}
                <div className="flex gap-2">
                  {/* Dislike - Custom SVG matching Figma */}
                  <button className="w-[32px] h-[32px] bg-[#FAFAFA] border-[1.5px] border-[#1E6A43] rounded-[25px] flex items-center justify-center text-[#1E6A43] hover:bg-[#1E6A43] hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180">
                      <path d="M14 9V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V9L8 10L6 10C4.89543 10 4 10.8954 4 12V18C4 19.1046 4.89543 20 6 20H15.28C16.1952 20 17 19.4299 17.2513 18.5505L18.8227 13.0505C19.1172 12.0196 18.3411 11 17.28 11H14V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {/* Like */}
                  <button className="w-[32px] h-[32px] bg-[#FAFAFA] border-[1.5px] border-[#1E6A43] rounded-[25px] flex items-center justify-center text-[#1E6A43] hover:bg-[#1E6A43] hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 9V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V9L8 10L6 10C4.89543 10 4 10.8954 4 12V18C4 19.1046 4.89543 20 6 20H15.28C16.1952 20 17 19.4299 17.2513 18.5505L18.8227 13.0505C19.1172 12.0196 18.3411 11 17.28 11H14V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                {/* Read More */}
                <Link
                  to={`/blog/${blog.id}`}
                  className="flex items-center justify-center gap-[10px] w-[285px] h-[40px] bg-[#289D61] rounded-[8px] hover:bg-[#1e7a4b] transition-colors"
                >
                  <div className="w-[16px] h-[16px] border-[1.5px] border-[#FFFFFF] rounded-full flex items-center justify-center overflow-hidden">
                    <ArrowLeft size={10} color="#FFFFFF" strokeWidth={3} className="ml-[1px]"/>
                  </div>
                  <span className="text-[14px] font-semibold text-[#FAFAFA] leading-[26px]">
                    اقرء المزيد
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}