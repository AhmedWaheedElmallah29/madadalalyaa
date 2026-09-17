import { Bell, TrendingUp } from "lucide-react"

const Notifications = () =>{
    return(
        <div className="flex items-center justify-end  gap-4">

            <div className="flex items-center relative">
                <p className="bg-red-500 flex items-center justify-center w-5 h-5 rounded-full absolute bottom-2 left-3"><span className="text-whete">12</span></p>
                <Bell size={25}/>
            </div>



            <div className="bg-gray-1 px-2 py-2 rounded-xl ">
                <TrendingUp color="#289D61"/>
            </div>



            <div className="flex items-center gap-8">
                <div>
                    <h2 className="font-medium">أحمد محمد</h2>
                    <p className="text-gray-2 text-sm">مدير النظام</p>
                </div>

                <div>
                    <p className="flex items-center justify-center bg-main w-10 h-10 rounded-full text-whete">أ</p>
                </div>
            </div>

        </div>
    )
}

export default Notifications