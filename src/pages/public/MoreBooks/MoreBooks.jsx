import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuShoppingBag } from "react-icons/lu";
import SearchBar from "../../../components/shared/SearchBar";

const mockBooks = [
  {
    id: 1,
    title: "قضية عنب الثعلب",
    author: "ميرنا المهدي",
    price: "45.00 ر.س",
    image: "https://picsum.photos/seed/book1/261/299",
    discount: "خصم 25٪",
    category: "romantic",
  },
  {
    id: 2,
    title: "خطوة للهاوية",
    author: "مها عبد الكريم",
    price: "40.00 ر.س",
    image: "https://picsum.photos/seed/book2/261/299",
    category: "horror",
  },
  {
    id: 3,
    title: "بصيرا",
    author: "أحمد يوسف",
    price: "40.00 ر.س",
    image: "https://picsum.photos/seed/book3/261/299",
    discount: "خصم 25٪",
    category: "fantasy",
  },
  {
    id: 4,
    title: "عودة شرلوك هولمز",
    author: "كونان دويل",
    price: "45.00 ر.س",
    image: "https://picsum.photos/seed/book4/261/299",
    category: "historical",
  },
  {
    id: 5,
    title: "النداهة",
    author: "خالد المهدي",
    price: "45.00 ر.س",
    image: "https://picsum.photos/seed/book5/261/299",
    category: "horror",
  },
  {
    id: 6,
    title: "عهد ايبانوخ",
    author: "محمد جلال",
    price: "40.00 ر.س",
    image: "https://picsum.photos/seed/book6/261/299",
    discount: "خصم 25٪",
    category: "fantasy",
  },
  {
    id: 7,
    title: "خبايا محفوظ",
    author: "شريف فوقي",
    price: "40.00 ر.س",
    image: "https://picsum.photos/seed/book7/261/299",
    category: "historical",
  },
  {
    id: 8,
    title: "لغنة شقشون",
    author: "اسلام الجندي",
    price: "45.00 ر.س",
    image: "https://picsum.photos/seed/book8/261/299",
    // discount: "خصم ٢٥٪",
    category: "romantic",
  },
];

const extraBooks = Array.from({ length: 40 }, (_, index) => ({
  id: index + 9,
  title: `كتاب تجريبي ${index + 9}`,
  author: "مؤلف تجريبي",
  price: index % 2 === 0 ? "40.00 ر.س" : "45.00 ر.س",
  image: `https://picsum.photos/seed/book-${index + 9}/261/299`,
  discount: index % 4 === 0 ? "خصم 25٪" : null,
}));

const allBooks = [...mockBooks, ...extraBooks];

function MoreBooks() {
  const { t, i18n } = useTranslation();

  const [likedBooks, setLikedBooks] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const booksPerPage = 16;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const filteredBooks =
    selectedCategory === "all" || selectedCategory === ""
      ? allBooks
      : allBooks.filter((book) => book.category === selectedCategory);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const startIndex = (currentPage - 1) * booksPerPage;

  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + booksPerPage,
  );

  const toggleLike = (id) => {
    setLikedBooks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="min-h-screen py-10 bg-[#FAFAFA]"
    >
      <div className="mx-auto max-w-[1296px] px-4">
        {/* Breadcrumb and Search Row */}
        <div className="mb-16 flex flex-col items-center justify-between md:flex-row">
          <div className="font-['Cairo'] text-[16px] text-[#9D9D9D]">
            <span className="font-bold text-[#289D61]">الرئيسية</span> / الكتب
            الاحدث اصدارا
          </div>

          <div className="mt-4 md:mt-0">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>

        {/* Title and Category Filter */}
        <div
          className="mb-14 flex items-center justify-center gap-5"
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          <h2 className="font-['Cairo'] text-[32px] font-semibold text-[#242424]">
            المزيد من الكتب ونتائج البحث
          </h2>

          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex appearance-none items-center gap-2 rounded-[4px] border-[0.2px] border-[#289D61] bg-[#289D61] py-2 pl-10 pr-5 font-['Cairo'] text-[18px] font-medium text-white shadow-[0px_4px_8px_rgba(0,0,0,0.15)] outline-none cursor-pointer"
            >
              <option value="" disabled className="bg-white text-[#242424]">
                اختر الفئة
              </option>
              <option value="all" className="bg-white text-[#242424]">
                الكل
              </option>
              <option value="romantic" className="bg-white text-[#242424]">
                رومانسي
              </option>
              <option value="historical" className="bg-white text-[#242424]">
                تاريخي
              </option>
              <option value="horror" className="bg-white text-[#242424]">
                رعب
              </option>
              <option value="fantasy" className="bg-white text-[#242424]">
                خيال
              </option>
            </select>
            <i className="fas fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"></i>
          </div>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentBooks.map((book) => (
            <div
              key={book.id}
              className="relative mx-auto flex h-[505px] w-full max-w-[309px] flex-col items-center overflow-hidden rounded-[8px] bg-white p-6 pt-6 shadow-[0px_4px_25px_0px_#00000026]"
            >
              {book.discount && (
                <div className="absolute -left-2 -top-2 z-10 h-[100px] w-[100px] overflow-hidden">
                  <div className="absolute -left-[40px] top-[25px] w-[150px] -rotate-45 bg-[#CD4F4F] py-1 text-center font-['Changa'] text-[16px] font-semibold text-white shadow-sm">
                    {book.discount}
                  </div>
                </div>
              )}

              <div className="mb-4 flex h-[299px] w-full items-center justify-center overflow-hidden rounded-[8px] bg-gray-100 xl:w-[261px]">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="mb-1 w-full truncate text-center font-['Cairo'] text-[16px] font-semibold text-[#242424]">
                {book.title}
              </h3>

              <p className="mb-2 text-center font-['Cairo'] text-[12px] text-gray-400">
                {book.author}
              </p>

              <span className="mb-4 block text-center font-['Cairo'] text-[16px] font-bold text-[#242424]">
                {book.price}
              </span>

              <div
                dir="ltr"
                className="mt-auto flex w-full flex-row-reverse items-center justify-between gap-[10px] xl:w-[261px]"
              >
                <button
                  onClick={() => toggleLike(book.id)}
                  className="order-2 flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[25px] border-[1.5px] border-[#289D61] bg-[#FAFAFA] shadow-sm transition-all duration-200 active:scale-90"
                >
                  <i
                    className={`fa-heart text-[18px] transition-colors duration-200 ${
                      likedBooks[book.id]
                        ? "fas text-red-500"
                        : "far text-[#289D61]"
                    }`}
                  ></i>
                </button>

                <button className="order-1 flex h-[34px] w-full items-center justify-center gap-[10px] rounded-[8px] bg-[#289D61] text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#1E7649] active:scale-95 lg:w-[221px]">
                  <LuShoppingBag className="text-[18px] text-white" />
                  <span className="font-['Cairo'] text-[14px]">
                    اضف الى السلة
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-center gap-2 pb-10"
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          {/* زر الصفحة السابقة */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex h-[32px] w-[32px] items-center justify-center rounded-[4px] ${
              currentPage === 1
                ? "bg-[#289D61] text-white"
                : "border border-[#289D61] bg-white text-[#289D61]"
            }`}
          >
            <i
              className={`fas ${i18n.language === "ar" ? "fa-chevron-right" : "fa-chevron-left"} text-xs`}
            ></i>
          </button>

          {/* أرقام الصفحات */}
          {Array.from({ length: totalPages }, (_, index) => index + 1)
            .filter((page) => {
              if (totalPages <= 5) return true;
              return (
                page === 1 ||
                page === 2 ||
                page === totalPages - 1 ||
                page === totalPages ||
                page === currentPage
              );
            })
            .map((page, index, pages) => {
              const previousPage = pages[index - 1];

              return (
                <React.Fragment key={page}>
                  {previousPage && page - previousPage > 1 && (
                    <span className="flex h-[32px] w-[20px] items-center justify-center font-['Inter'] text-[14px] text-[#242424]">
                      ...
                    </span>
                  )}

                  <button
                    onClick={() => goToPage(page)}
                    className={`flex h-[32px] w-[32px] items-center justify-center rounded-[4px] border font-['Inter'] text-[14px] font-bold transition ${
                      currentPage === page
                        ? "border-[#386BA6] bg-white text-[#386BA6]"
                        : "border-[#9D9D9D] bg-white text-[#242424] hover:border-[#386BA6] hover:text-[#386BA6]"
                    }`}
                    dir="ltr"
                  >
                    {page}
                  </button>
                </React.Fragment>
              );
            })}

          {/* زر الصفحة التالية */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex h-[32px] w-[32px] items-center justify-center rounded-[4px] ${
              currentPage === totalPages
                ? "bg-[#289D61] text-white"
                : "border border-[#289D61] bg-white text-[#289D61]"
            }`}
          >
            <i
              className={`fas ${i18n.language === "ar" ? "fa-chevron-left" : "fa-chevron-right"} text-xs`}
            ></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MoreBooks;
