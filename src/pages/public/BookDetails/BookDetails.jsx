import { useState } from "react";
import { FaHeart, FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { RxPaperPlane } from "react-icons/rx";
import SearchBar from "../../../components/shared/SearchBar";

// =========================================================
// BOOKS DATA
// بيانات الكتب اللي البحث هيبحث فيها
// =========================================================

const books = [
  {
    title: "مقبرة أرض النعيم",
    author: "حسني حلال",
    price: "40.00 ر.س",
    image: "/images/book-cover.jpg",
  },
  {
    title: "عودة شارلوك هولمز",
    author: "حسني حلال",
    price: "40.00 ر.س",
    image: "/images/book-cover.jpg",
  },
  {
    title: "رحلة في جزر العجائب",
    author: "حسني حلال",
    price: "40.00 ر.س",
    image: "/images/book-cover.jpg",
  },
  {
    title: "غداء الطائرة الورقية",
    author: "خالد حسيني",
    price: "40.00 ر.س",
    image: "/images/book-cover.jpg",
  },
];

const BookDetails = () => {
  // =========================================================
  // QUANTITY
  // عدد الكتب
  // يبدأ من 1 ولا يمكن أن يقل عن 1
  // =========================================================

  const [quantity, setQuantity] = useState(1);

  // =========================================================
  // SEARCH
  // قيمة البحث
  // =========================================================

  const [search, setSearch] = useState("");

  // =========================================================
  // SEARCH RESULTS
  // النتائج اللي هتظهر بعد الضغط على بحث
  // =========================================================

  const [searchResults, setSearchResults] = useState([]);

  // =========================================================
  // CART
  // السلة
  // =========================================================

  const [, setCart] = useState([]);

  // =========================================================
  // FAVORITES
  // المفضلة
  // =========================================================

  const [favorites, setFavorites] = useState([]);

  // =========================================================
  // REVIEWS
  // التعليقات والتقييمات
  // =========================================================

  const [reviewText, setReviewText] = useState("");

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "أحمد محمد",
      text: "مقال رائع وممتع، شوقتني لقراءة المزيد من جديد.",
      image: "/images/book-cover.jpg",
    },
    {
      id: 2,
      name: "أحمد علي",
      text: "أسلوب مختلف والكتاب مناسب جدًا مع أجواء الشتاء الرائعة.",
      image: "/images/book-cover.jpg",
    },
    {
      id: 3,
      name: "سامي حسن",
      text: "محتوى المقال جميل والرسومات بسيطة والوصول للفكرة سهل.",
      image: "/images/book-cover.jpg",
    },
    {
      id: 4,
      name: "محمد أحمد",
      text: "الكتاب جميل جدًا وتجربة القراءة كانت ممتعة.",
      image: "/images/book-cover.jpg",
    },
    {
      id: 5,
      name: "نور حسن",
      text: "الرواية مشوقة والأسلوب ممتاز.",
      image: "/images/book-cover.jpg",
    },
  ]);

  const [showAllReviews, setShowAllReviews] = useState(false);

  // =========================================================
  // MESSAGE
  // الرسالة اللي بتظهر بعد الإضافة
  // =========================================================

  const [message, setMessage] = useState("");

  // =========================================================
  // TOAST MESSAGE
  // رسالة مؤقتة تظهر بعد الإضافة
  // =========================================================

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  // =========================================================
  // ADD TO CART
  // إضافة كتاب للسلة
  // =========================================================

  const addToCart = (book, selectedQuantity = 1) => {
    setCart((prev) => {
      const existingBook = prev.find((item) => item.title === book.title);

      if (existingBook) {
        return prev.map((item) =>
          item.title === book.title
            ? {
                ...item,
                quantity: item.quantity + selectedQuantity,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...book,
          quantity: selectedQuantity,
        },
      ];
    });

    showMessage("تمت إضافة الكتاب إلى السلة 🛒");
  };

  // =========================================================
  // ADD / REMOVE FAVORITE
  // إضافة أو إزالة الكتاب من المفضلة
  // =========================================================

  const toggleFavorite = (book) => {
    const isFavorite = favorites.some((item) => item.title === book.title);

    if (isFavorite) {
      setFavorites((prev) => prev.filter((item) => item.title !== book.title));
      showMessage("تمت إزالة الكتاب من المفضلة");
    } else {
      setFavorites((prev) => [...prev, book]);
      showMessage("تمت إضافة الكتاب إلى المفضلة ❤️");
    }
  };

  // =========================================================
  // SEARCH FUNCTION
  // البحث باسم الكتاب أو اسم المؤلف
  // =========================================================

  const handleSearch = () => {
    const value = search.trim().toLowerCase();

    if (!value) {
      setSearchResults([]);
      return;
    }

    const results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(value) ||
        book.author.toLowerCase().includes(value),
    );

    setSearchResults(results);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white text-gray-800">
      {/* =====================================================
          TOP AREA
          Breadcrumb + Search + Quantity
      ====================================================== */}

      <section className="px-4 md:px-8 pt-6">
        <div className="w-full max-w-[1600px] mx-auto">
          {/* =================================================
              BREADCRUMB
          ================================================== */}

          <div className="text-sm text-gray-400 mb-5 text-right">
            <span>الرئيسية</span>
            <span className="mx-2">/</span>
            <span>الكتب</span>
            <span className="mx-2">/</span>
            <span>الروايات</span>
            <span className="mx-2">/</span>
            <span className="text-green-600">مقبرة أرض النعيم</span>
          </div>

          {/* =================================================
              SEARCH
              البحث
          ================================================== */}

          <div dir="ltr" className="flex items-center gap-2 w-fit mr-auto mb-4">
            <SearchBar 
              value={search} 
              onChange={setSearch} 
              onSearch={handleSearch} 
              placeholder="بحث..."
            />
          </div>

          {/* =================================================
              SEARCH RESULTS
              نتائج البحث
          ================================================== */}

          {search.trim() && (
            <div className="mt-4">
              {searchResults.length > 0 ? (
                <div className="w-full max-w-[560px] ml-auto bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                  <p className="text-sm text-gray-500 mb-3 text-right">
                    نتائج البحث:
                  </p>

                  <div className="space-y-3">
                    {searchResults.map((book) => (
                      <div
                        key={book.title}
                        className="flex items-center gap-3 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0"
                      >
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-14 h-16 object-cover rounded-md shrink-0"
                        />

                        <div className="text-right">
                          <h3 className="font-bold text-gray-800">
                            {book.title}
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            المؤلف: {book.author}
                          </p>

                          <p className="text-sm text-green-600 font-semibold mt-1">
                            {book.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-[560px] ml-auto bg-gray-50 rounded-xl p-4 text-center text-gray-500">
                  لا توجد نتائج مطابقة للبحث
                </div>
              )}
            </div>
          )}

          {/* =================================================
              QUANTITY
              العداد تحت البحث
          ================================================== */}

          <div dir="ltr" className="flex justify-start mb-10 mt-4">
            <div className="flex items-center justify-between w-[130px] h-[42px] border border-gray-200 rounded-full shadow-sm overflow-hidden">
              {/* MINUS */}

              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-10 h-full flex items-center justify-center text-red-500 text-lg hover:bg-gray-50"
              >
                −
              </button>

              {/* NUMBER */}

              <span className="text-gray-800 font-medium">{quantity}</span>

              {/* PLUS */}

              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-10 h-full flex items-center justify-center text-green-600 text-lg hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN BOOK SECTION
          الصورة يمين والكلام شمال
      ====================================================== */}

      <section className="px-4 md:px-8 py-4">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* =================================================
                BOOK IMAGE
                الصورة على اليمين
            ================================================== */}

            <div className="w-full lg:w-[420px] shrink-0 flex justify-center lg:justify-end">
              <img
                src="/images/book-cover.jpg"
                alt="مقبرة أرض النعيم"
                className="w-full max-w-[420px] rounded-2xl object-cover shadow-sm"
              />
            </div>

            {/* =================================================
                BOOK INFORMATION
                معلومات الكتاب على الشمال
            ================================================== */}

            <div className="w-full lg:flex-1 min-w-0 pt-1 text-right">
              {/* TAGS */}

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
                  روايات
                </span>

                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">
                  الأكثر مبيعًا
                </span>
              </div>

              {/* TITLE */}

              <div className="flex items-center gap-3 flex-wrap mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  مقبرة أرض النعيم
                </h1>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
                  متاح
                </span>
              </div>

              {/* RATING */}

              <div className="flex items-center gap-3 mb-6">
                <span className="text-gray-700 font-medium">4.5/5</span>

                <div className="text-yellow-500 text-xl">★★★★★</div>
              </div>

              {/* BOOK META */}

              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-7">
                <span>المؤلف: حسني حلال</span>
                <span>•</span>
                <span>الناشر: مكتبة جرير</span>
                <span>•</span>
                <span>عدد الصفحات: 320</span>
                <span>•</span>
                <span>وزن الكتاب: 300 g</span>
              </div>

              {/* PRICE */}

              <div className="flex items-center gap-5 mb-8 flex-wrap">
                <span className="text-3xl font-bold text-green-600">
                  40.00 ر.س
                </span>

                <span className="text-gray-400 line-through text-lg">
                  80.00 ر.س
                </span>

                <span className="bg-red-50 text-red-500 px-3 py-1 rounded-md">
                  64% Off
                </span>
              </div>

              {/* DESCRIPTION */}

              <div className="mb-7">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  نبذة عن الكتاب
                </h2>

                <p className="text-gray-600 leading-8 text-[16px]">
                  تأخذنا رواية مقبرة أرض النعيم في رحلة غامضة إلى عالم تتداخل
                  فيه الأسئلة الوجودية مع الصراع النفسي والإنساني، تدور أحداث
                  الرواية حول شخصيات تبحث عن الخلاص وسط واقع غامض، حيث تتحول
                  الأحلام إلى أوهام، ويصبح النجاة تحديًا حقيقيًا في مواجهة
                  الماضي والذات والخوف.
                </p>

                <p className="text-gray-600 leading-8 text-[16px] mt-4">
                  تتميز الرواية بأسلوب سردي مشوق، يعتمد على بناء نفسي عميق
                  للشخصيات، ويطرح تساؤلات حول الحياة والموت والعقل، وحدود
                  الاختيار الإنساني.
                </p>

                <p className="text-gray-600 leading-8 text-[16px] mt-4">
                  مقبرة أرض النعيم عمل يمزج بين الرواية النفسية والغموض، ويقدم
                  تجربة قراءة مكثفة ومليئة بالتشويق.
                </p>
              </div>

              {/* BUY NOW */}

              <button
                type="button"
                onClick={() => addToCart(books[0], quantity)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-md font-bold text-lg mb-3"
              >
                شراء الآن ✓
              </button>

              {/* CART + FAVORITE */}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => addToCart(books[0], quantity)}
                  className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2"
                >
                  إضافة للسلة <BsBasket3 className="text-lg" />
                </button>

                <button
                  type="button"
                  onClick={() => toggleFavorite(books[0])}
                  aria-label="إضافة الكتاب إلى المفضلة"
                  className="w-14 h-14 shrink-0 border border-green-600 rounded-full flex items-center justify-center text-xl hover:bg-green-50"
                >
                  {favorites.some((item) => item.title === books[0].title) ? (
                    <FaHeart className="text-green-600" />
                  ) : (
                    <FaRegHeart className="text-green-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div />

      {/* =====================================================
          SOCIAL ICONS
      ====================================================== */}

      <div className="fixed left-3 top-1/2 -translate-y-1/2 flex flex-col">
        <div className="w-7 h-7 bg-blue-600 text-white flex items-center justify-center text-sm">
          <FaFacebookF />
        </div>

        <div className="w-7 h-7 bg-green-500 text-white flex items-center justify-center text-sm">
          <FaWhatsapp />
        </div>

        <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center text-sm">
          <FaInstagram />
        </div>
      </div>
      {/* =====================================================
          REVIEWS SECTION
      ====================================================== */}

      <section className="border-t border-gray-100 mt-10 pt-12 px-4 md:px-8">
        <div className="w-full max-w-[1600px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            اكتب مراجعتك
          </h2>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-gray-500">أضف تقييمك</span>

            <span className="text-yellow-500 text-xl">★★</span>

            <span className="text-gray-300 text-xl">★★★</span>
          </div>

          {/* REVIEW INPUT */}

          <input
            type="text"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="شاركنا رأيك في هذا الكتاب..."
            className="w-full bg-gray-50 border-0 rounded-xl py-5 px-5 outline-none mb-5"
          />

          {/* PUBLISH REVIEW BUTTON */}

          <div className="flex items-center justify-between mb-10">
            <p className="text-red-500 text-sm">
              يجب عليك تسجيل الدخول اولا لنشر المراجعة
            </p>

            <button
              type="button"
              onClick={() => {
                const text = reviewText.trim();

                if (!text) return;

                const newReview = {
                  id: Date.now(),
                  name: "أنت",
                  text: text,
                  image: "/images/book-cover.jpg",
                };

                setReviews((prev) => [newReview, ...prev]);

                setReviewText("");

                setShowAllReviews(true);

                showMessage("تم نشر المراجعة بنجاح ✓");
              }}
              className="flex flex-row-reverse items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-md font-semibold"
            >
              <RxPaperPlane className="text-base text-white rotate-180" />

              <span>نشر المراجعة</span>
            </button>
          </div>

          {/* REVIEWS */}

          <div className="space-y-7">
            {(showAllReviews ? reviews : reviews.slice(0, 3)).map((review) => (
              <div key={review.id} className="flex items-start gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {review.name}
                  </h3>

                  <p className="text-gray-600 leading-7">{review.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MORE REVIEWS */}

          {reviews.length > 3 && (
            <button
              type="button"
              onClick={() => setShowAllReviews((prev) => !prev)}
              className="w-full border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-md mt-10"
            >
              {showAllReviews ? "إخفاء التقييمات" : "عرض المزيد من التقييمات"}
            </button>
          )}
        </div>
      </section>

      {/* =====================================================
          RELATED BOOKS
          الكتب الأربعة + زر السلة + زر القلب
      ====================================================== */}

      <section className="px-4 md:px-8 py-12">
        <div className="w-full max-w-[1600px] mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            كتب لنفس الكاتب
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* =================================================
                BOOK 1
            ================================================== */}

            <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
              <img
                src="/images/book-cover2.jpg"
                alt="عودة شارلوك هولمز"
                className="w-full h-[280px] object-cover rounded-lg"
              />

              <h3 className="font-bold text-center mt-4">عودة شارلوك هولمز</h3>

              <p className="text-green-600 text-center font-bold mt-3">
                40.00 ر.س
              </p>

              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() =>
                    addToCart(
                      books.find((book) => book.title === "عودة شارلوك هولمز"),
                    )
                  }
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  أضف إلى السلة <BsBasket3 className="text-white" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    toggleFavorite(
                      books.find((book) => book.title === "عودة شارلوك هولمز"),
                    )
                  }
                  className="w-11 h-11 shrink-0 border border-green-600 rounded-full flex items-center justify-center text-lg hover:bg-green-50"
                >
                  {favorites.some(
                    (item) => item.title === "عودة شارلوك هولمز",
                  ) ? (
                    <FaHeart className="text-green-600" />
                  ) : (
                    <FaRegHeart className="text-green-600" />
                  )}
                </button>
              </div>
            </div>

            {/* =================================================
                BOOK 2
            ================================================== */}

            <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
              <img
                src="/images/book-cover.jpg"
                alt="مقبرة أرض النعيم"
                className="w-full h-[280px] object-cover rounded-lg"
              />

              <h3 className="font-bold text-center mt-4">مقبرة أرض النعيم</h3>

              <p className="text-green-600 text-center font-bold mt-3">
                40.00 ر.س
              </p>

              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() =>
                    addToCart(
                      books.find((book) => book.title === "مقبرة أرض النعيم"),
                    )
                  }
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  أضف إلى السلة <BsBasket3 className="text-white" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    toggleFavorite(
                      books.find((book) => book.title === "مقبرة أرض النعيم"),
                    )
                  }
                  className="w-11 h-11 shrink-0 border border-green-600 rounded-full flex items-center justify-center text-lg hover:bg-green-50"
                >
                  {favorites.some(
                    (item) => item.title === "مقبرة أرض النعيم",
                  ) ? (
                    <FaHeart className="text-green-600" />
                  ) : (
                    <FaRegHeart className="text-green-600" />
                  )}
                </button>
              </div>
            </div>

            {/* =================================================
                BOOK 3
            ================================================== */}

            <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
              <img
                src="/images/book-cover3.jpg"
                alt="رحلة في جزر العجائب"
                className="w-full h-[280px] object-cover rounded-lg"
              />

              <h3 className="font-bold text-center mt-4">
                رحلة في جزر العجائب
              </h3>

              <p className="text-green-600 text-center font-bold mt-3">
                40.00 ر.س
              </p>

              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() =>
                    addToCart(
                      books.find(
                        (book) => book.title === "رحلة في جزر العجائب",
                      ),
                    )
                  }
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  أضف إلى السلة <BsBasket3 className="text-white" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    toggleFavorite(
                      books.find(
                        (book) => book.title === "رحلة في جزر العجائب",
                      ),
                    )
                  }
                  className="w-11 h-11 shrink-0 border border-green-600 rounded-full flex items-center justify-center text-lg hover:bg-green-50"
                >
                  {favorites.some(
                    (item) => item.title === "رحلة في جزر العجائب",
                  ) ? (
                    <FaHeart className="text-green-600" />
                  ) : (
                    <FaRegHeart className="text-green-600" />
                  )}
                </button>
              </div>
            </div>
            {/* =================================================
                BOOK 4
            ================================================== */}

            <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
              <img
                src="/images/book-cover1.jpg"
                alt="غداء الطائرة الورقية"
                className="w-full h-[280px] object-cover rounded-lg"
              />

              <h3 className="font-bold text-center mt-4">
                غداء الطائرة الورقية
              </h3>

              <p className="text-green-600 text-center font-bold mt-3">
                40.00 ر.س
              </p>

              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() =>
                    addToCart(
                      books.find(
                        (book) => book.title === "غداء الطائرة الورقية",
                      ),
                    )
                  }
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  أضف إلى السلة <BsBasket3 className="text-white" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    toggleFavorite(
                      books.find(
                        (book) => book.title === "غداء الطائرة الورقية",
                      ),
                    )
                  }
                  className="w-11 h-11 shrink-0 border border-green-600 rounded-full flex items-center justify-center text-lg hover:bg-green-50"
                >
                  {favorites.some(
                    (item) => item.title === "غداء الطائرة الورقية",
                  ) ? (
                    <FaHeart className="text-green-600" />
                  ) : (
                    <FaRegHeart className="text-green-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TOAST MESSAGE
          الرسالة المؤقتة
      ====================================================== */}

      {message && (
        <div className="fixed top-6 right-1/2 translate-x-1/2 z-[60] bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg text-sm font-medium">
          {message}
        </div>
      )}
    </div>
  );
};

export default BookDetails;
