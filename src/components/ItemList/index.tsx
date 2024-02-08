import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EyeIcon,
  MapPinIcon,
  TagIcon,
} from "lucide-react";
import { IconSize } from "../constants";
import Link from "next/link";

export default function ItemList() {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          className="card bg-base-100 shadow-lg overflow-hidden relative"
          key={item}
        >
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
          <div className="badge badge-lg absolute top-2 right-2">
            <TagIcon size={16} /> 1231af
          </div>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="flex items-center gap-2 opacity-50">
              <MapPinIcon size={16} /> Kahir Khana, Kabul
            </div>
            <div className="card-actions justify-between items-center">
              <div className="flex items-center gap-2 opacity-50">
                <EyeIcon size={16} /> {25} views
              </div>
              <button className="btn btn-primary">
                <ArrowRightIcon size={16} /> View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
