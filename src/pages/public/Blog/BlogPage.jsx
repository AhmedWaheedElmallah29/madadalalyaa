import React, { useState } from "react";
import BlogContent from "../../../components/blogPage/blog_content";
import CommentsSection from "../../../components/blogPage/comments_section";
import RelatedBlogs from "../../../components/blogPage/related_blogs";
import PageHeader from "../../../components/shared/PageHeader";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function BlogPage() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "آية محمد",
      text: "مقال رائع ومميز، خاصة أن فصل الشتاء لها قراءات ذات طابع خاص، شكراً لك على العودة للقراءة من جديد.",
      time: "منذ ساعتين",
    },
    {
      id: 2,
      name: "أحمد علي",
      text: "خيارات موفقة بالفعل، معظم هذه الكتب قرأتها سابقاً وبعضها الآخر سأضعه في قائمة قراءتي القادمة.",
      time: "منذ 3 ساعات",
    },
    {
      id: 3,
      name: "مني حسن",
      text: "مجهود رائع، والتعليقات ممتازة وعرض ميسر للوصول للقارئ، أنصح بشدة لقراءة كتب عربية في حكايات خاصة.",
      time: "منذ يوم",
    },
  ]);

  const [likes, setLikes] = useState(125);
  const [isLiked, setIsLiked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddComment = (text) => {
    const commentObj = {
      id: Date.now(),
      name: "زائر جديد",
      text: text,
      time: "الآن",
    };
    setComments([commentObj, ...comments]);
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] pb-20 font-cairo relative min-h-screen">
      {/* Floating Social Icons */}
      <div className="hidden xl:flex flex-col gap-0 absolute left-0 top-1/3 z-50 rounded-r-lg overflow-hidden shadow-md">
        <a href="#" className="w-[40px] h-[40px] bg-[#386BA6] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="w-[40px] h-[40px] bg-[#289D61] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
          <FaWhatsapp size={22} />
        </a>
        <a href="#" className="w-[40px] h-[40px] flex items-center justify-center text-white hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(153.87deg, #EEB438 17.86%, #D23A59 36.86%, #AE348D 56.3%, #5052A2 97.39%)' }}>
          <FaInstagram size={20} />
        </a>
      </div>

      <PageHeader
        title=""
        breadcrumbs={[
          { label: "الرئيسية", path: "/" },
          { label: "المدونة", path: "/blog" },
          { label: "أفضل عشر كتب قراءة في الشتاء", path: "#" },
        ]}
        search={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="container mx-auto px-4 flex flex-col gap-12 lg:gap-16 items-center">
        <div className="w-full max-w-5xl relative">
          <BlogContent
            likes={likes}
            isLiked={isLiked}
            onLike={handleLike}
            commentsCount={comments.length}
          />

          <CommentsSection
            comments={comments}
            onAddComment={handleAddComment}
          />
        </div>
      </div>

      <RelatedBlogs />
    </div>
  );
}