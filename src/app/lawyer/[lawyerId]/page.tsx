import { getLawyer } from "@/api/getLawyer";
import LawyerDetails from "@/components/lawyer/lawyer-details/LawyerDetails";
import Services from "@/components/lawyer/lawyer-details/Services/Services";
import Booking from "@/components/lawyer/lawyer-details/booking/Booking";

const Lawyer = async ({ params }: { params: { lawyerId: number } }) => {
  const data = await getLawyer(params.lawyerId);
  return (
    <Services data={data.services} />
  );
};

export default Lawyer;
