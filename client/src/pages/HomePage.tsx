import Filter from "@/components/Filter";
import ItemList from "@/components/ItemList";
import Stats from "@/components/Stats";
import { IconSize } from "@/constants";
import { ArrowDownIcon } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2">
        <Filter
          categories={[]}
          searchParams={{ keywords: "asda", minPrice: "1212" }}
        />
        <Stats stats={{ deals: 1, items: 3, users: 4 }} />
      </div>
      <ItemList />
      <div className="flex justify-center">
        <button className="btn btn-neutral">
          Load more <ArrowDownIcon size={IconSize.md} />
        </button>
      </div>
    </>
  );
}
