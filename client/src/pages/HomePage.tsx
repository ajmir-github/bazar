import Listings from "@/components/Listings";
import ListingsOptions from "@/components/ListingsOptions";
import LoadMore from "@/components/LoadMore";

export default function HomePage() {
  return (
    <div className="grow overflow-y-scroll">
      <ListingsOptions />
      <Listings />
      <LoadMore
        loadMore={() => console.log("loadmore")}
        className="m-8 flex justify-center"
      >
        <div className="loading"></div>
      </LoadMore>
    </div>
  );
}
