import Hero from "../components/home/Hero";
import CategorySection from "../components/home/CategorySection";
import SectionSlider from "../components/ui/SectionSlider";
import BookCard from "../components/books/BookCard";
import BlogCard from "../components/blog/BlogCard";

// Mock data representing backend responses
const mockBooks = [
  {
    id: 1,
    title: "قضية عين الثعلب",
    price: "40.00",
    oldPrice: "60.00",
    discount: 20,
    coverImage: "/books.jpg",
  },
  {
    id: 2,
    title: "خطوة للهاوية",
    price: "40.00",
    oldPrice: "60.00",
    coverImage: "/books.jpg",
  },
  {
    id: 3,
    title: "بصيرة",
    price: "40.00",
    oldPrice: "60.00",
    discount: 20,
    coverImage: "/books.jpg",
  },
  {
    id: 4,
    title: "عودة شارلوك هولمز",
    price: "40.00",
    oldPrice: "60.00",
    coverImage: "/books.jpg",
  },
  {
    id: 5,
    title: "عهد ابانوخ",
    price: "40.00",
    discount: 15,
    coverImage: "/books.jpg",
  },
];

const mockBlogs = [
  {
    id: 1,
    title: "إصدار جديد من دار مداد العلياء",
    excerpt: "تعرف على أحدث الإصدارات الجديدة المتوفرة الآن في مكتبتنا",
    publishDate: "12 فبراير 2025",
    commentsCount: 3,
    viewsCount: 120,
    image: "/books.jpg",
  },
  {
    id: 2,
    title: "خصومات خاصة على مجموعة الفلسفة",
    excerpt:
      "مقال قصير يستعرض أهم الكتب التي تلزم لقرائها في رحلتك لتطوير الذات",
    publishDate: "12 فبراير 2025",
    commentsCount: 3,
    viewsCount: 120,
    image: "/books.jpg",
  },
  {
    id: 3,
    title: "أفضل 10 كتب قراءة في الشتاء",
    excerpt: "تفاصيل عن الفعالية الجديدة وطرق المشاركة",
    publishDate: "12 فبراير 2025",
    commentsCount: 3,
    viewsCount: 130,
    image: "/books.jpg",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CategorySection />

      <SectionSlider
        title="صدر حديثا"
        items={mockBooks}
        CardComponent={BookCard}
        moreLink="/new-releases"
      />

      <SectionSlider
        title="الاكثر مبيعا"
        items={mockBooks.slice().reverse()}
        CardComponent={BookCard}
        moreLink="/best-sellers"
      />

      <SectionSlider
        title="المدونة"
        items={mockBlogs}
        CardComponent={BlogCard}
      />
    </div>
  );
};

export default Home;
