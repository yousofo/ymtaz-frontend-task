const WorkItem = ({
  title,
  available,
}: {
  title: string;
  available: boolean;
}) => {
  return (
    <li className="rounded-lg overflow-hidden flex-1 flex flex-col">
      <h2 className="text-whtie bg-[#DDB762] p-3 text-white text-center">
        {title}
      </h2>
      <ul
        className={`${
          !available && "hidden"
        } flex flex-col gap-2 items-center secondary-color bg-[#F5F5F5] py-4`}
      >
        <li className="text-white bg-[#DDB762] p-1 rounded">10:00 ص</li>
        <li>10:30 ص</li>
        <li>11:00 ص</li>
        <li>11:30 ص</li>
        <li>11:30 ص</li>
        <li>11:30 ص</li>
      </ul>
      {!available && (
        <div className="flex flex-col gap-2 items-center secondary-color h-full justify-center bg-[#F5F5F5] py-4">
          لا يوجد مواعيد متاحة
        </div>
      )}
    </li>
  );
};

export default WorkItem;
