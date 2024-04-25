import { ILawyer } from "@/types/types";
import React from "react";
import Personal from "./personal/Personal";
import Brief from "./brief/Brief";
import Rating from "./rating/Rating";

const LawyerDetails = ({ data }: { data: ILawyer }) => {
  const { name, about, photo } = data;
  return (
    <div className="flex-1 flex flex-col gap-8">
      <Personal name={name} about={about} photo={photo} />
      <Brief />
      <Rating />
    </div>
  );
};

export default LawyerDetails;
