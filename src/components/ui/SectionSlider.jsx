import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuArrowLeft, LuChevronRight, LuChevronLeft } from "react-icons/lu";

const SectionSlider = ({
  title,
  items,
  CardComponent,
  moreLink,
  moreText = "المزيد",
}) => {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      const scrolled = Math.abs(scrollLeft);
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll <= 0) {
        setCanScrollRight(false);
        setCanScrollLeft(false);
      } else {
        setCanScrollRight(scrolled > 2);
        setCanScrollLeft(scrolled < maxScroll - 2);
      }
    }
  };

  useEffect(() => {
    checkScroll();

    const timeoutId = setTimeout(checkScroll, 150);
    window.addEventListener("resize", checkScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkScroll);
    };
  }, [items]);

  const scrollLeftAction = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRightAction = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full px-4 lg:px-8 mt-16 mb-8">
      <div className="w-full max-w-[1296px] mx-auto relative">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold font-cairo text-[#1A202C] inline-block border-b-3 border-[#289D61] pb-2">
            {title}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          {canScrollRight && (
            <button
              onClick={scrollRightAction}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-[#289D61] hover:shadow-lg transition-all md:opacity-0 group-hover:opacity-100"
            >
              <LuChevronRight size={24} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto snap-x scrollbar-none py-4 px-2"
            dir="rtl"
          >
            {items.map((item, index) => (
              <CardComponent
                key={item.id || index}
                {...{
                  [CardComponent.name === "BookCard" ? "book" : "post"]: item,
                }}
              />
            ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={scrollLeftAction}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-[#289D61] hover:shadow-lg transition-all md:opacity-0 group-hover:opacity-100"
            >
              <LuChevronLeft size={24} />
            </button>
          )}
        </div>

        {/* More Link */}
        {moreLink && (
          <div className="flex justify-center mt-10">
            <Link
              to={moreLink}
              className="flex items-center justify-center gap-1 w-[300px] h-[48px] bg-white border border-[#289D61] text-[#289D61] rounded shadow-[0_2px_15px_rgba(0,0,0,0.15)] font-cairo font-bold text-[16px] hover:bg-green-50 transition-colors"
            >
              <span>{moreText}</span>
              <LuArrowLeft size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionSlider;
