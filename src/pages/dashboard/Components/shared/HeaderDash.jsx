import { Plus } from "lucide-react";
import Btn from "../common/Btn";
import LogoDash from "./LogoDash";
import Notifications from "./Notifications";

function HeaderDash() {
  return (
    <div className="parent-container font-cairo" dir="rtl ">
      {/* Start Header */}

      <div className="shadow-2xl py-3">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1fr_1fr] ">
            {/* Start Logo */}
            <div>
              <LogoDash />
            </div>

            {/* End Logo */}

            {/* Start Btn */}

            <div className="flex gap-4 items-center">
              <div className="bg-main flex  items-center justify-center rounded-2xl text-whete  gap-3 w-35 py-2 ">
                <Plus />
                <Btn variant={""}>اضافة مقال</Btn>
              </div>
              <div className="bg-main flex  items-center justify-center rounded-2xl text-whete  gap-3 w-35 py-2 ">
                <Plus />
                <Btn variant={""}>اضافة كتاب</Btn>
              </div>
            </div>

            {/* End Btn */}

            <div>
              <Notifications />
            </div>
          </div>
        </div>
      </div>

      {/* End Header */}
    </div>
  );
}

export default HeaderDash;
