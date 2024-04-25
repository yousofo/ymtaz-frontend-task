import { ILawyer } from "@/types/types";
import Link from "next/link";
import React from "react";

const LawyerCard = ({
  data: { id, photo, name, about },
}: {
  data: ILawyer;
}) => {
  return (
    <Link
      href={`/lawyer/${id}`}
      className="lawyer-card flex flex-col items-center gap-4 bg-white shadow rounded-lg p-5"
    >
      <div className="aspect-square bg-white h-auto w-16 sm:w-28 flex items-center justify-center rounded-full">
        <img src={photo} className="w-7 sm:w-auto rounded-full" alt="" />
      </div>
      <div className="text-center flex flex-col gap-2 items-center">
        <h2 className="text-lg font-semibold title-color">{name}</h2>
        <h3 className="!text-[#B0B0B0]">{about}</h3>
        <p className="text-gray-500 text-sm title-color font-semibold flex items-center">
          <img src="/assets/material-symbols_star-rounded.png" alt="" />
          4:56 (35 مراجعة)
        </p>
      </div>
    </Link>
  );
};

export default LawyerCard;
