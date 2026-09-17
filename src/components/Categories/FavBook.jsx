import { ChevronLeft, ChevronRight, Handbag, Heart } from "lucide-react";
import books from "../../Data/books";
import { useEffect, useState } from "react";

function FavBook() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Reset index when screen size changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= books.length - cardsPerPage) {
        return 0;
      }

      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return Math.max(books.length - cardsPerPage, 0);
      }

      return prev - 1;
    });
  };

  return (
    <div className="relative overflow-hidden">
      <ChevronRight
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 shadow bg-whete text-main border cursor-pointer"
        onClick={prevSlide}
      />

      {/* Slider */}
      <div
        className="flex gap-5 transition-transform duration-500"
        style={{
          transform: `translateX(${currentIndex * (100 / cardsPerPage)}%)`,
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            className="
              shrink-0
              w-full
              md:w-[calc(50%-10px)]
              lg:w-[calc(25%-15px)]
              bg-whete
              py-3
              shadow
              rounded-lg
            "
          >
            <img
              className="w-60 object-cover mx-auto rounded-lg"
              src={book.image}
              alt={book.title}
            />

            <div className="flex flex-col items-center justify-center">
              <div className="py-3 text-center">
                <p>{book.title}</p>
                <p>{book.price} ر.س</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-main text-whete px-6 py-1 rounded-lg">
                  <button>أضف إلى السلة</button>

                  <Handbag size={15} />
                </div>

                <div className="flex items-center justify-center border rounded-full py-1 px-1">
                  <Heart color="#289D61" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ChevronLeft
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 shadow bg-whete text-main border cursor-pointer"
        onClick={nextSlide}
      />
    </div>
  );
}

export default FavBook;
