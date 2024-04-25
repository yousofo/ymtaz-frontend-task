import React from "react";
import Service from "./Service";
import { ILawyerService } from "@/types/types";

const Services = ({ data }: { data: ILawyerService[] }) => {
  return (
    <ul className="flex flex-col items-center gap-4">
      {data?.map((e, i) => (
        <Service data={e} key={i} />
      ))}
    </ul>
  );
};

export default Services;
