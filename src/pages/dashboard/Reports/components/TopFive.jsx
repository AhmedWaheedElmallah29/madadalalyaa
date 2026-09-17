import { Star } from "lucide-react";
import bookAnalysis from "../data/bookAnalysis";

function TopFive() {
  return (
    <div>
      <div className="container mx-auto shadow-2xl px-6  mt-16  rounded-lg pb-9 mb-6">
        <div className="flex  py-9 items-center justify-between mt-6 bg-whete ">
          <div className="">
            <h2 className="text-lg font-bold">افضل 5 مقالات تفاعلآ</h2>
            <p className="text-gray-2"> المقالات الأعلي اعجابك وتعليقات</p>
          </div>

          <div className="flex items-center justify-center px-2 py-2 rounded-full bg-icon-1">
            <Star color="#289D61" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3  ">
          {bookAnalysis.map((book) => {
            const Icons = book.icons;
            const bgNumber = book.bgNumber;
            const bgArrow = book.bgArrow;
            return (
              <div
                key={book.id}
                className="flex items-center justify-between bg-card-1  leading-loose px-3 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <p
                    className="flex items-center justify-center w-10 h-10 rounded-full"
                    style={{ background: bgNumber }}
                  >
                    {book.number}
                  </p>
                  <div>
                    <h2>{book.title}</h2>
                    <p className="text-gray-2 text-sm">{book.author}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 ">
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold">{book.rate}</h3>
                    <p className="text-gray-2 ">{book.categories}</p>
                  </div>
                  <span>
                    <Icons color={bgArrow} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopFive;
