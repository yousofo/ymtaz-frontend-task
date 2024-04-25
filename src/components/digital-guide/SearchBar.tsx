import { CiSearch } from "react-icons/ci";
import Title from "./Title";

const SearchBar = () => {
  return (
    <div className="flex flex-col gap-6">
      <Title title="الدليل الرقمي" />
      <div className="flex items-center border border-[#DADADA] w-4/5 m-auto max-w-[725px] bg-white px-4 py-2 rounded-lg gap-2 sm:gap-5">
        <img src="/assets/mi_filter.png" alt="" />
        <input type="search" name="" id="" className="flex-1 min-w-0 inline-block focus:outline-none " />
        <CiSearch className="text-3xl secondary-color " />
      </div>
    </div>
  )
}

export default SearchBar