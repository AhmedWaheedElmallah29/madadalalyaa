import { LuSearch } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="w-full px-4 lg:px-8 mt-10">
      <div
        className="w-full max-w-[1296px] h-[497px] mx-auto rounded-2xl relative flex flex-col items-center pt-20 bg-[linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/books.jpg')] bg-[#0E2642] bg-cover bg-center"
      >
        <div className="flex flex-col items-center gap-2 px-4 z-10">
          <h1 className="font-cairo font-semibold text-3xl md:text-[40px] md:leading-[75px] text-[#FAFAFA] text-center m-0">
            مِدَادُ العلياء – بيتك لعالم المعرفة
          </h1>
          <p className="font-cairo font-normal text-lg md:text-[20px] md:leading-[37px] text-[#EEEEEE] text-center max-w-[500px] m-0">
            اكتشف أحدث الكتب في مختلف التصنيفات واقرأ أو اشترِ بعروض مميزة
          </p>

          <button className="mt-4 bg-[#289D61] text-[#FAFAFA] font-cairo font-semibold text-[17px] rounded-lg px-8 h-[48px] flex items-center justify-center hover:bg-opacity-90 transition">
            تصفح الكتب الآن
          </button>
        </div>

        {/* Search Bar */}
        <div className="absolute bottom-[56px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1116px] h-[68px] bg-[#FAFAFA] rounded-2xl flex flex-row items-center overflow-hidden shadow-lg z-10">
          <input
            type="text"
            placeholder="ابحث عن كتاب او مؤلف او وصف الكتاب"
            className="flex-1 h-full bg-transparent outline-none text-gray-800 font-cairo font-semibold text-[16px] px-5 placeholder-[#9D9D9D]"
          />
          <button className="w-[72px] h-[68px] bg-[#289D61] flex items-center justify-center text-white hover:bg-opacity-90 transition flex-shrink-0">
            <LuSearch size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
