import { Link } from "react-router-dom";
import { LuShoppingBag, LuHeart } from "react-icons/lu";

const BookCard = ({ book }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.15)] p-4 md:p-6 w-[260px] md:w-[309px] h-[450px] md:h-[505px] shrink-0 group/card">
      {/* Discount Badge */}
      {book.discount && (
        <div className="absolute top-0 right-0 z-10 overflow-hidden w-[70px] md:w-[80px] h-[70px] md:h-[80px] rounded-tr-lg">
          <div className="absolute top-[12px] md:top-[15px] -right-[20px] bg-red-500 text-white text-[10px] md:text-[12px] font-bold py-1 w-[110px] md:w-[120px] text-center transform rotate-45 shadow-sm">
            خصم {book.discount}%
          </div>
        </div>
      )}

      {/* Book Cover */}
      <Link
        to={`/books/${book.id}`}
        className="block relative w-full aspect-[261/299] rounded-lg overflow-hidden mb-4 md:mb-[34px] bg-gray-50"
      >
        <img
          src={book.coverImage || "/placeholder-book.jpg"}
          alt={book.title}
          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Book Info */}
      <div className="flex flex-col items-center w-full">
        <Link to={`/books/${book.id}`} className="w-full">
          <h3 className="font-cairo font-semibold text-[#242424] text-[14px] md:text-[16px] text-center truncate mb-1 md:mb-[6px] hover:text-[#289D61] transition-colors">
            {book.title}
          </h3>
        </Link>

        <div className="flex items-center justify-center gap-2 font-cairo font-bold text-[#242424] text-[14px] md:text-[16px] mb-4 md:mb-[24px]">
          <span>{book.price} ر.س</span>
          {book.oldPrice && (
            <span className="text-gray-400 line-through text-[12px] md:text-[13px] font-normal">
              {book.oldPrice}
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between w-full mt-auto gap-2">
        <button className="flex-1 md:flex-none flex items-center justify-center gap-[6px] md:gap-[10px] md:w-[221px] h-[34px] bg-[#289D61] text-[#FAFAFA] rounded-lg font-cairo font-semibold text-[13px] md:text-[14px] hover:bg-opacity-90 transition-all">
          <span>اضف الى السلة</span>
          <LuShoppingBag size={16} className="md:w-[18px] md:h-[18px]" />
        </button>
        <button className="flex items-center justify-center w-[32px] h-[32px] border-[1.5px] border-[#289D61] text-[#289D61] rounded-full hover:bg-green-50 transition-colors shrink-0">
          <LuHeart size={16} className="md:w-[18px] md:h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default BookCard;
