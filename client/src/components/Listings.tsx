import clsx from "clsx";
import {
  ArrowRightIcon,
  BookmarkPlusIcon,
  MapPinIcon,
  TagIcon,
} from "lucide-react";
import { useState } from "react";

function ListingsCard() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="sm:card card-compact bg-base-100 shadow-lg overflow-hidden relative">
      <div className="w-full aspect-video">
        <img
          className={clsx("w-full h-full object-cover", loading && "hidden")}
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          onLoad={() => setLoading(false)}
        />
        <div
          className={clsx(
            "skeleton w-full h-full rounded-none",
            loading || "hidden"
          )}
        ></div>
      </div>

      <div className="flex items-center gap-1 absolute top-4 right-4 bg-base-100 py-1 px-2 rounded-box text-base">
        <TagIcon size={16} /> $ 203
      </div>
      <div className="card-body">
        <h2 className="card-title truncate">
          Title Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cupiditate, consequuntur quam alias facilis ipsam, accusantium dolore
          dolorem, labore autem aperiam neque voluptate odit iste corporis ex
          perspiciatis itaque debitis nemo!
        </h2>

        <div className="flex items-center gap-1 truncate text-base">
          <MapPinIcon size={16} /> Kahir-e-khana, Kabul
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-ghost">
            <BookmarkPlusIcon /> Save
          </button>
          <button className="btn btn-ghost">
            <ArrowRightIcon /> View
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Listings() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="grid py-2 sm:px-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {items.map((key) => (
        <ListingsCard key={key} />
      ))}
    </div>
  );
}
