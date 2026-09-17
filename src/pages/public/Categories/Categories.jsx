import CategoriesList from "../../../components/Categories/CategoriesList";
import FavBook from "../../../components/Categories/FavBook";
import SearchBar from "../../../components/shared/SearchBar";

function Categories() {
  return (
    <div className=" min-h-screen font-cairo">
      {/* Start Hero */}

      <div className="grid  grid-cols-1  md:grid-cols-2  items-center py-9">
        <div className="flex gap-2 font-medium ">
          <p className="text-gray-2"> الرئيسية / </p>
          <p className="text-main"> ادب عربي</p>
        </div>

        <div className="">
          <SearchBar />
        </div>
      </div>

      {/* End Hero */}

      {/* Start Category */}
      <div>
        <CategoriesList />
      </div>
      {/* End Category */}

      {/* Start Bood */}

      <div>
        <div className="py-14 ">
          <span className=" flex items-center justify-center w-40 mx-auto border-b-2 pb-2 border-b-main text-lg font-medium">
            كتب قد تهمك{" "}
          </span>
        </div>

        <div>
          <FavBook />
        </div>
      </div>

      {/* End Bood */}
    </div>
  );
}

export default Categories;
