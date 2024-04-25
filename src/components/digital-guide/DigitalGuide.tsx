'use client'
import { useQuery, useQueryClient } from "react-query"
import SearchBar from "./SearchBar"
import LawyerCard from "../lawyer/lawyer-card/LawyerCard"
import CategoryCard from "../all-categories/CategoryCard"

const DigitalGuide = ({ queryFunction, id = null, card }: { queryFunction: () => any, id?: number | null, card: string }) => {
  const { data: queryData } = useQuery({ queryKey: [`${queryFunction.name}${id&&id}`], queryFn: queryFunction })

  let RenderCard = card === "lawyer" ? LawyerCard : CategoryCard;

  return (
    <>
      <SearchBar />
      <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {queryData?.slice(0, 6).map((e: any, i: number) => <RenderCard data={e} key={i} />)}
      </div>
    </>
  )
}

export default DigitalGuide