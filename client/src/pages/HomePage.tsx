import Filter from "@/components/Filter";
import ItemList from "@/components/ItemList";
import Stats from "@/components/Stats";
import { IconSize } from "@/constants";
import { ArrowDownIcon } from "lucide-react";

function getParams<ReturnQuery = object>(windowObject: Window) {
  const query: any = {};
  const searchParams = new URLSearchParams(windowObject.location.search);
  searchParams.forEach((value, key) => {
    query[key] = value;
  });
  return query as ReturnQuery;
}

export default function HomePage() {
  const searchParams = getParams<{
    category?: string;
    keywords?: string;
    minPrice?: string;
    maxPrice?: string;
    limit?: string;
    skip?: string;
  }>(window);
  console.log(searchParams);
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
