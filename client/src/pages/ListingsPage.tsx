import Listings from "@/components/Listings";
import ListingsOptions from "@/components/ListingsOptions";

export default function ListingsPage() {
  return (
    <div className="overflow-y-scroll grow">
      <ListingsOptions />
      <Listings />
    </div>
  );
}
