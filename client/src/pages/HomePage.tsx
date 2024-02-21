import Listings from "@/components/Listings";
import ListingsOptions from "@/components/ListingsOptions";

export default function HomePage() {
  return (
    <div className="grow overflow-y-scroll">
      <ListingsOptions />
      <Listings />
    </div>
  );
}
