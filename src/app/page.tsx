import Categories from "@/components/all-categories/Categories";
import DigitalGuide from "@/components/digital-guide/DigitalGuide";
import SearchBar from "@/components/digital-guide/SearchBar";
import Provider from "@/components/query-provider/Provider";

export default function Home() {
  return (
    <Provider>
      <main className="max-w-screen-md m-auto flex flex-col gap-6 md:gap-10 pt-[5vh]">
        <Categories />
      </main>
    </Provider>
  );
}
