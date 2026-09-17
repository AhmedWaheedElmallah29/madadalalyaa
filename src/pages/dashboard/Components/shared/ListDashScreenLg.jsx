import { NavLink } from "react-router-dom";
import listDash from "./data/listDash";



function ListDashScreenLg() {

    // const [isOpen , setIsOpen] = useState(false)
  return (
        <ul className="flex flex-wrap items-center justify-center">
      {listDash.map((list) => {
        const Icons = list?.icon;
      

        return (
          <li className="flex justify-end items-center mt-3" key={list.id}>
            <NavLink
              end={list.path === "/dashboard"}
              className={({ isActive }) =>
                `flex  items-center justify-center gap-3  px-16 py-3 w-80   ${isActive ? "bg-main text-whete rounded-lg transition-all duration-500 scale-110" : ""}`
              }
              to={list.path}
            >
              {list.title}
              <Icons />
            </NavLink>
          </li>
        );
      })}
    </ul>
  )
}

export default ListDashScreenLg
