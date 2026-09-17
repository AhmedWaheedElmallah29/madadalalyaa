import { Link } from "react-router-dom";
import categoriesItems from "../../Data/categoriesItems";

function CategoriesList() {
  console.log(categoriesItems);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-9">
      {categoriesItems.map((item) => {
        const Icon = item.icons;

        return (
          <ul key={item.id} className="group">
            <li className="flex   items-center justify-center gap-3 cursor-pointer bg-main text-whete py-2 rounded-lg group-hover:bg-hover-main transition-all duration-300 group-hover:scale-105">
              <Link className=" " to={item.path}>
                {item.title}
              </Link>
              <span>
                <Icon className="group-hover:-translate-x-3 duration-300" />
              </span>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default CategoriesList;
