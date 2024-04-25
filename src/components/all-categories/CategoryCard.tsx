import Link from "next/link"
import { ICategory } from "@/types/types"

const CategoryCard = ({ data: {id, title, image, lawyers_count } }: { data: ICategory }) => {
  return (
    <Link href={`/${id}`} className="category-card flex flex-col items-center justify-center gap-4 bg-white shadow rounded-lg aspect-square">
      <div className="aspect-square bg-white h-auto w-16 sm:w-28 flex items-center justify-center rounded-full shadow-[#F9DAD5] shadow-2xl">
        <img src={image} className="w-7 sm:w-auto rounded-full" alt="" />
      </div>
      <div className="text-center flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#292019]">{title}</h3>
        <p className="text-gray-500 text-sm">متوفر عدد <span className="px-1">{lawyers_count}</span></p>
      </div>
    </Link>
  )
}

export default CategoryCard