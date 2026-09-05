import StatCard from './StatCard';

const CategoriesStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Note: The order in the design (RTL) is Total Categories (Right), Main (Middle), Books (Left) */}
      <StatCard title="إجمالي التصنيفات" value="22" type="total" />
      <StatCard title="التصنيفات الرئيسية" value="5" type="main" />
      <StatCard title="إجمالي الكتب" value="811" type="books" />
    </div>
  );
};

export default CategoriesStats;
