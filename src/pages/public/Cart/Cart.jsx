import { useState } from "react";
import CartItem from "./components/CartItem";
import cover005 from "../../../assets/cart/005.png";
import coverBaseera from "../../../assets/cart/besera.png";
import coverSherlock from "../../../assets/cart/sherlock-return.png";
import coverAbanokh from "../../../assets/cart/abanokh.png";
import coverRaheel from "../../../assets/cart/elraheel.png";
import coverShafshon from "../../../assets/cart/shafshon.png";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/shared/PageHeader";

const initialBooks = [
  {
    id: 1,
    title: "005",
    author: "005",
    price: 40.0,
    qty: 1,
    cover: { image: cover005 },
  },
  {
    id: 2,
    title: "بصير",
    author: "بصيرا",
    price: 40.0,
    qty: 1,
    cover: { image: coverBaseera },
  },
  {
    id: 3,
    title: "عودة شارلوك هولمز",
    author: "عودة شارلوك هولمز",
    price: 40.0,
    qty: 1,
    cover: { image: coverSherlock },
  },
  {
    id: 4,
    title: "عهد ابانوخ",
    author: "عهد ابانوخ",
    price: 40.0,
    qty: 1,
    cover: { image: coverAbanokh },
  },
  {
    id: 5,
    title: "ألا يمكنني الرحيل؟",
    author: "ألا يمكنني الرحيل؟",
    price: 40.0,
    qty: 1,
    cover: { image: coverRaheel },
  },
  {
    id: 6,
    title: "لعنة شفشون",
    author: "لعنة شفشون",
    price: 40.0,
    qty: 1,
    cover: { image: coverShafshon },
  },
];

export default function Cart() {
  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState("");

  const handleQtyChange = (id, delta) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, qty: Math.max(1, b.qty + delta) } : b,
      ),
    );
  };

  const handleRemove = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalCount = books.reduce((sum, b) => sum + b.qty, 0);
  const totalPrice = books
    .reduce((sum, b) => sum + b.qty * b.price, 0)
    .toFixed(2);

  return (
    <div
      dir="rtl"
      className="min-h-screen text-[#2b2b2b] font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
      <PageHeader
        title="عربة التسوق"
        breadcrumbs={[
          { label: "الرئيسية", path: "/" },
          { label: "عربة التسوق" }
        ]}
        search={searchQuery}
        onSearchChange={setSearchQuery}
      />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-[18px] px-7 pt-[22px] pb-10 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBooks.length === 0 ? (
              <div className="col-span-full text-center text-[#999] py-10 text-sm">
                {books.length === 0 ? "عربة التسوق فارغة" : "لا توجد نتائج"}
              </div>
            ) : (
              filteredBooks.map((book) => (
                <CartItem
                  key={book.id}
                  book={book}
                  onQtyChange={handleQtyChange}
                  onRemove={handleRemove}
                />
              ))
            )}
          </div>

          <div className="bg-white border border-[#ececec] rounded-[10px] p-[18px] sticky top-6">
            <div className="font-bold text-[15px] mb-3.5">ملخص الطلبية</div>
            <div className="flex justify-between text-[13px] text-[#555] py-2 border-b border-dashed border-[#eee]">
              <span>العدد</span>
              <b className="text-[#1a1a1a]">{totalCount}</b>
            </div>
            <div className="flex justify-between text-[13px] text-[#555] py-2 border-b border-dashed border-[#eee]">
              <span>الشحن</span>
              <b className="text-[#1a1a1a]">مجانا</b>
            </div>
            <div className="flex justify-between text-[13px] text-[#555] py-2 border-b border-dashed border-[#eee]">
              <span>المبلغ</span>
              <b className="text-[#1c8a53] text-[15px]">{totalPrice} ر.س</b>
            </div>
            <button className="w-full mt-3.5 bg-[#1c8a53] text-white rounded-[7px] p-2.5 text-[13px] font-semibold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[#157245] transition-colors">
              إتمام عملية الشراء ✓
            </button>
            <Link to="/" className="w-full mt-2 bg-white text-[#1c8a53] border border-[#1c8a53] rounded-[7px] p-2.5 text-[13px] font-semibold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[#f1faf5] transition-colors">
              متابعة عملية التسوق
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
