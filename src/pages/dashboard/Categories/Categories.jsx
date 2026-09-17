import CategoriesHeader from "./components/CategoriesHeader";
import CategoriesSearch from "./components/CategoriesSearch";
import CategoriesStats from "./components/CategoriesStats";
import CategoryTree from "./components/CategoryTree";

const Categories = () => {
  return (
    <div className="max-w-300 mx-auto">
      {/* Header Block */}
      <CategoriesHeader />

      {/* Search Block */}
      <CategoriesSearch />

      {/* Statistics Cards */}
      <CategoriesStats />

      {/* Categories Tree */}
      <CategoryTree />
    </div>
  );
};

export default Categories;
