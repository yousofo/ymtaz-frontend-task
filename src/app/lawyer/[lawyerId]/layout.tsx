import { getLawyer } from "@/api/getLawyer";
import LawyerDetails from "@/components/lawyer/lawyer-details/LawyerDetails";
import Services from "@/components/lawyer/lawyer-details/Services/Services";
import Booking from "@/components/lawyer/lawyer-details/booking/Booking";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lawyerId: number };
}) {
  const data = await getLawyer(params.lawyerId);
  return (
    <div className="flex w-full gap-8 mt-8" dir="rtl">
      <LawyerDetails data={data} />
      <Booking lawyerId={params.lawyerId}>{children}</Booking>
    </div>
  );
}
