import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LuChevronDown as ChevronDown, LuChevronLeft as ChevronLeft, LuUser as User, LuHeart as Heart, LuShoppingBag as ShoppingBag, LuMenu as Menu, LuX as X } from "react-icons/lu";

const authorsLinks = [
  { title: "طلب نشر", path: "/authors/publish-request" },
  { title: "المسابقة الدورية", path: "/authors/competition" },
  { title: "معكم", path: "/authors/with-you" },
];

const categories = [
  {
    name: "روايات",
    subCategories: [
      "روايات رومانسية",
      "روايات تاريخية",
      "روايات رعب",
      "روايات فانتازيا",
    ],
  },
  { name: "دراسات فكرية" },
  { name: "فلسفة" },
  { name: "علوم" },
  { name: "أطفال" },
  { name: "تنمية ذاتية" },
  { name: "تاريخ" },
  { name: "أديان" },
  { name: "السياسة" },
  { name: "أدب عالمي" },
  { name: "تصنيفات أخرى" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const categoriesRef = useRef(null);
  const authorsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && mobileMenuRef.current.contains(event.target))
        return;

      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setIsCategoriesOpen(false);
        setActiveSubCategory(null);
      }
      if (authorsRef.current && !authorsRef.current.contains(event.target)) {
        setIsAuthorsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1 transition h-[74px] ${
      isActive
        ? "text-[#289D61]"
        : "text-[#4A5568] hover:text-[#289D61]"
    }`;

  const isCategoriesActive = location.pathname.startsWith("/categories");
  const isAuthorsActive = location.pathname.startsWith("/authors");

  return (
    <header className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] h-[74px] sticky top-0 z-40 w-full flex items-center font-cairo">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="مداد العلياء" className="h-12 w-auto" />
          <img
            src="/madad.svg"
            alt="مداد العلياء"
            className="h-9 w-auto mt-7"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 font-semibold text-[16px] h-full">
          <NavLink to="/" className={navLinkClass}>
            الرئيسية
          </NavLink>

          {/* Categories Dropdown */}
          <div className="relative h-full" ref={categoriesRef}>
            <button
              onClick={() => {
                setIsCategoriesOpen(!isCategoriesOpen);
                setIsAuthorsOpen(false);
              }}
              className={`flex items-center justify-center gap-1 transition h-[74px] w-[119px] ${
                isCategoriesOpen
                  ? "bg-[#289D61] text-white"
                  : isCategoriesActive
                    ? "text-[#289D61]"
                    : "text-[#4A5568] hover:text-[#289D61]"
              }`}
            >
              التصنيفات
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isCategoriesOpen ? "rotate-180 text-white" : ""
                }`}
              />
            </button>

            {isCategoriesOpen && (
              <div className="absolute top-[74px] right-0 w-[140px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col py-2 z-50 rounded-b-md">
                {categories.map((cat, idx) => (
                  <div key={idx} className="relative">
                    {cat.subCategories ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSubCategory(activeSubCategory === cat.name ? null : cat.name);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 transition-all text-[16px] ${
                          activeSubCategory === cat.name
                            ? "bg-[#289D61] text-white font-bold"
                            : "text-[#289D61] hover:font-bold hover:bg-green-50"
                        }`}
                      >
                        <span className="flex-1 text-center pl-4">{cat.name || cat}</span>
                        <ChevronLeft className="w-4 h-4 shrink-0" />
                      </button>
                    ) : (
                      <Link
                        to={`/categories/${cat.name || cat}`}
                        onClick={() => {
                          setIsCategoriesOpen(false);
                          setActiveSubCategory(null);
                        }}
                        className="w-full block text-center py-2.5 text-[#289D61] hover:font-bold hover:bg-green-50 transition-all text-[16px]"
                      >
                        {cat.name || cat}
                      </Link>
                    )}
                    {cat.subCategories && activeSubCategory === cat.name && (
                      <div className="absolute top-0 right-[140px] flex w-[160px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex-col py-2 z-50 rounded-md">
                        {cat.subCategories.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            to={`/categories/${cat.name || cat}/${sub}`}
                            onClick={() => {
                              setIsCategoriesOpen(false);
                              setActiveSubCategory(null);
                            }}
                            className="w-full block text-center py-2.5 text-[#289D61] hover:font-bold hover:bg-green-50 transition-all text-[16px]"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/best-sellers" className={navLinkClass}>
            الأكثر مبيعا
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            المدونة
          </NavLink>

          {/* Authors Dropdown */}
          <div className="relative h-full" ref={authorsRef}>
            <button
              onClick={() => {
                setIsAuthorsOpen(!isAuthorsOpen);
                setIsCategoriesOpen(false);
              }}
              className={`flex items-center justify-center gap-1 transition h-[74px] w-[119px] ${
                isAuthorsOpen
                  ? "bg-[#289D61] text-white"
                  : isAuthorsActive
                    ? "text-[#289D61]"
                    : "text-[#4A5568] hover:text-[#289D61]"
              }`}
            >
              المؤلفون
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isAuthorsOpen ? "rotate-180 text-white" : ""
                }`}
              />
            </button>

            {isAuthorsOpen && (
              <div className="absolute top-[74px] right-0 w-[140px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col py-2 z-50 rounded-b-md">
                {authorsLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.path}
                    onClick={() => setIsAuthorsOpen(false)}
                    className="w-full text-center py-2.5 text-[#289D61] hover:font-bold hover:bg-green-50 transition-all text-[16px]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/login"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#289D61] text-white rounded-lg hover:bg-[#1E6A43] transition-colors shadow-sm font-medium"
          >
            تسجيل الدخول
            <User className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to="/favorites"
              className="p-2.5 border border-[#289D61] text-[#289D61] rounded-full hover:bg-[#289D61] hover:text-white transition-colors shadow-sm"
            >
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              to="/cart"
              className="p-2.5 border border-[#289D61] text-[#289D61] rounded-full hover:bg-[#289D61] hover:text-white transition-colors shadow-sm"
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger & Cart */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            to="/cart"
            className="p-2. border border-[#289D61] text-[#289D61] rounded-full hover:bg-[#289D61] hover:text-white transition-colors shadow-sm"
          >
            <ShoppingBag className="w-5 h-5" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-[#289D61]"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md z-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            ref={mobileMenuRef}
            className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg flex flex-col p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <div className="flex justify-between items-center mb-8">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img
                  src="/logo.svg"
                  alt="مداد العلياء"
                  className="h-10 w-auto"
                />
                <img
                  src="/madad.svg"
                  alt="مداد العلياء"
                  className="h-7 w-auto mt-6"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-[#289D61]"
              >
                الرئيسية
              </Link>

              <div>
                <button
                  onClick={() => {
                    setIsCategoriesOpen(!isCategoriesOpen);
                    setIsAuthorsOpen(false);
                  }}
                  className="flex items-center justify-between w-full text-lg font-medium text-[#4A5568]"
                >
                  التصنيفات
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isCategoriesOpen && (
                  <div className="flex flex-col gap-3 mt-3 pr-4 border-r-2 border-[#289D61]">
                    {categories.map((cat, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <Link
                          to={`/categories/${cat.name || cat}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-[#4A5568] hover:text-[#289D61]"
                        >
                          {cat.name || cat}
                        </Link>
                        {cat.subCategories && (
                          <div className="flex flex-col gap-2 pr-4 border-r-2 border-[#289D61] mt-1">
                            {cat.subCategories.map((sub, subIdx) => (
                              <Link
                                key={subIdx}
                                to={`/categories/${cat.name || cat}/${sub}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-[#4A5568] hover:text-[#289D61] text-sm"
                              >
                                {sub}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/best-sellers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-[#4A5568] hover:text-[#289D61]"
              >
                الأكثر مبيعا
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-[#4A5568] hover:text-[#289D61]"
              >
                المدونة
              </Link>

              <div>
                <button
                  onClick={() => {
                    setIsAuthorsOpen(!isAuthorsOpen);
                    setIsCategoriesOpen(false);
                  }}
                  className="flex items-center justify-between w-full text-lg font-medium text-[#4A5568]"
                >
                  المؤلفون
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isAuthorsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isAuthorsOpen && (
                  <div className="flex flex-col gap-3 mt-3 pr-4 border-r-2 border-[#289D61]">
                    {authorsLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[#4A5568] hover:text-[#289D61]"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t pt-6 border-gray-100">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#289D61] text-white rounded-lg font-semibold hover:bg-[#1E6A43] transition-colors"
              >
                تسجيل الدخول
                <User className="w-5 h-5" />
              </Link>
              <Link
                to="/favorites"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-lg font-medium text-[#4A5568] hover:text-[#289D61]"
              >
                <Heart className="w-5 h-5 text-[#289D61]" />
                المفضلة
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
