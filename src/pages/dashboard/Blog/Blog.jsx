import { useState } from "react";
import {
  LuFileText,
  LuPlus,
  LuSearch,
  LuHeart,
  LuMessageSquare,
  LuTrash2,
  LuPencil,
  LuEye,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

function Blog() {
  const [search, setSearch] = useState("");

  const blogs = [
    {
      id: 1,
      image: "/images/Blog.1.jpg",
      title: "أفضل ممارسات تطوير الويب الحديث",
      date: "2026-01-26",
      likes: 245,
      comments: 32,
    },
    {
      id: 2,
      image: "/images/Blog.2.jpg",
      title: "أفضل ممارسات تطوير الويب الحديث",
      date: "2026-01-26",
      likes: 245,
      comments: 32,
    },
    {
      id: 3,
      image: "/images/Blog.3.jpg",
      title: "أفضل ممارسات تطوير الويب الحديث",
      date: "2026-01-26",
      likes: 245,
      comments: 32,
    },
    {
      id: 4,
      image: "/images/Blog.4.jpg",
      title: "أفضل ممارسات تطوير الويب الحديث",
      date: "2026-01-26",
      likes: 245,
      comments: 32,
    },
    {
      id: 5,
      image: "/images/Blog.5.jpg",
      title: "أفضل ممارسات تطوير الويب الحديث",
      date: "2026-01-26",
      likes: 245,
      comments: 32,
    },
    {
      id: 6,
      image: "/images/Blog.6.jpg",
      title: "أفضل ممارسات تطوير الويب الحديث",
      date: "2026-01-26",
      likes: 245,
      comments: 32,
    },
    {
      id: 7,
      image: "/images/Blog.7.jpg",
      title: "أفضل ممارسات تطوير الويب الحديث",
      date: "2026-01-26",
      likes: 245,
      comments: 32,
    },
  ];

  const filteredBlogs = blogs.filter((blog) => blog.title.includes(search));

  return (
    <div dir="rtl" className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-8">
        {/* Title */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25A55F]">
            <LuFileText size={25} strokeWidth={2} className="text-white" />
          </div>

          <h1 className="text-4xl font-medium text-[#172033]">إدارة المدونة</h1>
        </div>

        {/* Add Button */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-[#25A55F] px-5 py-3 text-lg font-medium text-white transition hover:bg-[#208f52]"
        >
          <LuPlus size={22} strokeWidth={2} />
          <span>إضافة مقال جديد</span>
        </button>
      </div>

      {/* Search */}
      <div className="mt-10">
        <div className="flex h-[74px] items-center rounded-2xl border border-gray-200 bg-white px-7">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="إبحث عن مقال..."
            className="w-full bg-transparent text-right text-lg text-gray-700 outline-none placeholder:text-gray-400"
          />

          <LuSearch
            size={28}
            strokeWidth={1.8}
            className="ml-5 text-[#94A0B5]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Table Header */}
        <div className="grid grid-cols-[150px_1.5fr_1fr_1fr_1fr_180px] items-center border-b border-gray-200 bg-[#FAFBFC] px-8 py-7 text-lg font-medium text-[#334155]">
          <div>صورة المقال</div>
          <div>عنوان المقال</div>
          <div className="text-center">تاريخ النشر</div>
          <div className="text-center">عدد الإعجابات</div>
          <div className="text-center">عدد التعليقات</div>
          <div className="text-center">إجراءات</div>
        </div>

        {/* Table Rows */}
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="grid grid-cols-[150px_1.5fr_1fr_1fr_1fr_180px] items-center border-b border-gray-200 px-8 py-3 last:border-b-0"
          >
            {/* Image */}
            <div>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-20 w-20 rounded-xl object-cover"
              />
            </div>

            {/* Title */}
            <div className="text-lg text-[#172033]">{blog.title}</div>

            {/* Date */}
            <div className="text-center text-lg text-[#475569]">
              {blog.date}
            </div>

            {/* Likes */}
            <div className="flex items-center justify-center gap-2 text-lg text-[#475569]">
              <span>{blog.likes}</span>
              <LuHeart size={22} strokeWidth={1.8} className="text-red-500" />
            </div>

            {/* Comments */}
            <div className="flex items-center justify-center gap-2 text-lg text-[#475569]">
              <span>{blog.comments}</span>
              <LuMessageSquare
                size={22}
                strokeWidth={1.8}
                className="text-blue-500"
              />
            </div>

            {/* Actions */}
            <div dir="ltr" className="flex items-center justify-center gap-7">
              <button
                type="button"
                title="حذف"
                className="flex items-center justify-center text-red-500 transition hover:scale-110"
              >
                <LuTrash2 size={20} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                title="تعديل"
                className="flex items-center justify-center text-[#00B85C] transition hover:scale-110"
              >
                <LuPencil size={20} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                title="عرض"
                className="flex items-center justify-center text-blue-500 transition hover:scale-110"
              >
                <LuEye size={20} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-8">
        {/* Results */}
        <div className="text-lg text-[#475569]">
          عرض 1 - {filteredBlogs.length} من {blogs.length} نتيجة
        </div>

        {/* Pagination Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-lg text-gray-400"
          >
            <LuChevronRight size={20} />
            <span>السابق</span>
          </button>

          <button
            type="button"
            className="h-12 w-12 rounded-xl border border-[#25A55F] text-lg text-[#25A55F]"
          >
            1
          </button>

          <button
            type="button"
            className="h-12 w-12 rounded-xl border border-gray-200 text-lg text-[#475569]"
          >
            2
          </button>

          <button
            type="button"
            className="h-12 w-12 rounded-xl border border-gray-200 text-lg text-[#475569]"
          >
            3
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-lg text-[#475569]"
          >
            <span>التالي</span>
            <LuChevronLeft size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
