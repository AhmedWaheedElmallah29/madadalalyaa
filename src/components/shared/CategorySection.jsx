import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

const defaultCategories = [
  { id: 1, name: "ادب عربي", path: "/categories/arabic-literature" },
  { id: 2, name: "دراسات فكرية", path: "/categories/intellectual-studies" },
  { id: 3, name: "فلسفة", path: "/categories/philosophy" },
  { id: 4, name: "أديان", path: "/categories/religions" },
  { id: 5, name: "تاريخ", path: "/categories/history" },
  { id: 6, name: "أدب عالمي", path: "/categories/world-literature" },
  { id: 7, name: "أطفال", path: "/categories/children" },
  { id: 8, name: "علوم", path: "/categories/science" },
  { id: 9, name: "تنمية ذاتية", path: "/categories/self-development" },
  { id: 10, name: "تصنيفات أخرى", path: "/categories/other" },
];

const CategorySection = ({
  categories = defaultCategories,
  title = "تصفح حسب الفئة",
}) => {
  return (
    <section className="w-full px-4 lg:px-8 mt-12 mb-8">
      <div className="w-full max-w-[1296px] mx-auto">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-bold font-cairo text-[#1A202C] text-right mb-6">
          {title}
        </h2>

        {/* Categories Badges List */}
        <div className="flex items-center gap-3 overflow-x-auto pb-3 md:pb-0 md:flex-wrap scrollbar-none">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.name}`}
              className="flex items-center gap-2 px-4 py-2 border border-[#289D61] rounded-lg text-[#289D61] hover:bg-[#289D61] hover:text-white transition-all duration-200 whitespace-nowrap text-sm md:text-base font-cairo font-medium group flex-shrink-0"
            >
              <span>{category.name}</span>
              <LuArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
