import { ILawyerService } from "@/types/types";
import Link from "next/link";

const Service = ({ data }: { data: ILawyerService }) => {
  const { title, intro, image, ymtaz_price } = data;
  return (
    <li className="max-w-80 flex flex-col gap-4 bg-[#F5F5F5] p-3 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 max-w-[74%]">
          <img src={image} className="w-6 h-fit" alt="" />
          <div className="">
            <h3 className="text-sm text-[#2C4768] font-bold mb-1.5">{title}</h3>
            <p className="text-xs secondary-color">{intro}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-xs title-color font-bold">سعر الخدمة</h4>
          <p className="text-2xl text-[#3FD06F]">
             {ymtaz_price} <span className="text-xs">ر.س</span>
          </p>
        </div>
      </div>
      <Link
        href="#"
        className="bg-[#DDB762] w-full p-2 text-white text-center block rounded-2xl"
      >
        طلب الخدمة
      </Link>
    </li>
  );
};

export default Service;
