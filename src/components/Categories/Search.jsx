import { SearchAlert } from "lucide-react"

function Search() {
  return (
    <form className="flex  items-center justify-end">
       <div className="flex  items-center gap-3 w-96 border border-gray">
         <span><SearchAlert /></span>
        <input type="search" placeholder="بحث" name="" id="" className="py-1.5 w-96 outline-0"/>
       </div>
        <button type="submit" className="bg-main text-whete px-5 py-2 rounded-bl-lg rounded-tl-lg ">بحث</button>
    </form>
  )
}

export default Search
