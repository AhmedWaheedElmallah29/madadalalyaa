import { Trash2, Plus, Minus } from "lucide-react";

export default function CartItem({ book, onQtyChange, onRemove }) {
  const subtotal = (book.price * book.qty).toFixed(2);

  return (
   <div className="group bg-white border border-[#ececec] rounded-[10px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#1c8a53]/30">
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={book.cover.image}
          alt={book.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onRemove(book.id)}
          aria-label={`إزالة ${book.title}`}
          title="إزالة"
          className="absolute top-2 left-2 w-7 h-7 rounded-full bg-white text-[#d94b4b] flex items-center justify-center cursor-pointer shadow-md hover:bg-[#fdeaea] transition-colors"
        >
          <Trash2 size={15} />
        </button>
      </div>

      <div className="px-2.5 pt-2 pb-0.5 text-center">
        <div className="text-xs font-semibold text-[#333] mb-0.5">
          {book.author}
        </div>
        <div className="text-[11px] text-[#777]">
          {book.price.toFixed(2)} ر.س
        </div>
      </div>

      <div className="flex justify-between items-center px-2.5 pt-2 pb-2.5 gap-2 border-t border-[#eee]">
        <div className="flex flex-col gap-1.5 items-center">
          <span className="text-[11px] text-[#999]">السعر الكلي</span>
          <span className="text-[13px] font-bold text-[#1c8a53]">
            {subtotal} ر.س
          </span>
        </div>
        <div className="flex flex-col gap-1.5 items-center">
          <span className="text-[11px] text-[#999]">العدد</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onQtyChange(book.id, 1)}
              aria-label="زيادة الكمية"
              className="w-6 h-6 rounded-full border border-[#e2e2e2] flex items-center justify-center text-[#1c8a53] cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <Plus size={12} />
            </button>
            <span className="text-[13px] font-semibold min-w-[14px] text-center">
              {book.qty}
            </span>
            <button
              onClick={() => onQtyChange(book.id, -1)}
              aria-label="إنقاص الكمية"
              disabled={book.qty <= 1}
              className="w-6 h-6 rounded-full border border-[#e2e2e2] flex items-center justify-center text-[#1c8a53] cursor-pointer disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              <Minus size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
