import { Link } from "react-router-dom";
import { LuThumbsUp, LuThumbsDown, LuArrowLeft } from "react-icons/lu";

const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.15)] p-4 md:p-6 w-[300px] md:w-[419px] h-auto md:h-[634px] shrink-0 group/card">
      {/* Blog Image */}
      <Link
        to={`/blog/${post.id}`}
        className="block relative w-full aspect-[371/299] rounded-lg overflow-hidden mb-4 md:mb-[34px] bg-gray-50 shrink-0"
      >
        <img
          src={post.image || "/placeholder-blog.jpg"}
          alt={post.title}
          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Blog Content */}
      <div className="flex flex-col w-full flex-1">
        <Link to={`/blog/${post.id}`}>
          <h3 className="font-cairo font-bold text-[#242424] text-[15px] md:text-[16px] mb-1 md:mb-[6px] hover:text-[#289D61] transition-colors line-clamp-1 text-right">
            {post.title}
          </h3>
        </Link>
        <p className="font-cairo font-semibold text-[#4A5565] text-[13px] md:text-[16px] leading-[24px] md:leading-[30px] mb-4 md:mb-[14px] line-clamp-2 text-right">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <ul className="flex flex-col font-cairo font-bold text-[12px] md:text-[14px] leading-[22px] md:leading-[26px] text-[#808080] text-right">
          <li className="flex items-center gap-2">
            <div className="w-1 h-1 bg-[#808080]"></div>
            <span>تاريخ النشر: {post.publishDate}</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1 h-1 bg-[#808080]"></div>
            <span>عدد التعليقات: {post.commentsCount}</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1 h-1 bg-[#808080]"></div>
            <span>عدد القراءات: {post.viewsCount}</span>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center justify-between w-full mt-6 md:mt-auto gap-2">
          <Link
            to={`/blog/${post.id}`}
            className="flex-1 md:flex-none flex items-center justify-center gap-[6px] md:gap-[10px] md:w-[285px] h-[36px] md:h-[40px] bg-[#289D61] text-[#FAFAFA] rounded-lg font-cairo font-semibold text-[13px] md:text-[14px] hover:bg-opacity-90 transition-all"
          >
            <span>اقرء المزيد</span>
            <LuArrowLeft size={16} />
          </Link>
          <div className="flex items-center gap-[6px] md:gap-[8px]">
            <button className="flex items-center justify-center w-[32px] h-[32px] border-[1.5px] border-[#1E6A43] text-[#1E6A43] rounded-full hover:bg-green-50 transition-colors shrink-0">
              <LuThumbsUp size={16} />
            </button>
            <button className="flex items-center justify-center w-[32px] h-[32px] border-[1.5px] border-[#1E6A43] text-[#1E6A43] rounded-full hover:bg-green-50 transition-colors shrink-0">
              <LuThumbsDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
