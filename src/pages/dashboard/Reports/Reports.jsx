import Analysis from "./components/Analysis";
import BestSellingBooks from "./components/BestSellingBooks";
import BookAnalysis from "./components/BookAnalysis";
import Performance from "./components/Performance";

import Statistic from "./components/Statistic";
import StatisticActive from "./components/StatisticActive";
import TopFive from "./components/TopFive";
import UsersGrowth from "./components/UsersGrowth";

const Reports = () => {
  return (
    <div className="">
      <div className="container mx-auto font-cairo bg-whete shadow-2xl px-3 py-4 rounded-lg">
        {/* start hero */}

        <Statistic />

        {/* end hero */}
      </div>

      <div className="">
        <Analysis />
      
      </div>



      <div>
        <UsersGrowth />
      </div>


      <div>
        <BestSellingBooks />
      </div>



      <div>
        <StatisticActive />
      </div>


      <div>
        <Performance />
      </div>


      <div>
        <BookAnalysis />
      </div>

      <div>
        <TopFive />
      </div>
    </div>
  );
};

export default Reports;
