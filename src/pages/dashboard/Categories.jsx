import DashboardLayout from '../../components/dashboard/layout/DashboardLayout';
import CategoriesHeader from '../../components/dashboard/categories/CategoriesHeader';
import CategoriesSearch from '../../components/dashboard/categories/CategoriesSearch';
import CategoriesStats from '../../components/dashboard/categories/CategoriesStats';
import CategoryTree from '../../components/dashboard/categories/CategoryTree';

const Categories = () => {
  return (
    <DashboardLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Header Block */}
        <CategoriesHeader />
        
        {/* Search Block */}
        <CategoriesSearch />

        {/* Statistics Cards */}
        <CategoriesStats />

        {/* Categories Tree */}
        <CategoryTree />
      </div>
    </DashboardLayout>
  );
};

export default Categories;
