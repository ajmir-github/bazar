import { useAppSelector } from "@/context";
import clsx from "clsx";
import {
  ArrowRightIcon,
  BookmarkPlusIcon,
  EditIcon,
  MapPinIcon,
  TagIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ListingsCard({ signed }: { signed: boolean }) {
  const [loading, setLoading] = useState(true);
  return (
    <Link
      to={"?"}
      className="card-compact border-2 border-base-200 bg-base-100 shadow-lg overflow-hidden relative"
    >
      <div className="w-full md:aspect-video">
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
      <div className="flex items-center gap-1 absolute top-4 left-4 bg-base-100 py-1 px-2 rounded-box text-base">
        <TagIcon size={16} /> $203
      </div>
      <Link
        to={"/"}
        className=" btn btn-circle btn-warning absolute top-4 right-4"
      >
        <EditIcon />
      </Link>
      <div className="card-body">
        <h2 className="card-title truncate">
          Title Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cupiditate, consequuntur quam alias facilis ipsam, accusantium dolore
          dolorem, labore autem aperiam neque voluptate odit iste corporis ex
          perspiciatis itaque debitis nemo!
        </h2>

        <Link
          className="flex items-center gap-1 truncate text-base link-hover"
          to={`/?location=${"Kabul"}`}
        >
          <MapPinIcon size={16} /> Kahir-e-khana, Kabul
        </Link>
        <div className="grow join">
          {signed && (
            <button className="join-item grow btn btn-ghost ">
              <BookmarkPlusIcon /> Save
            </button>
          )}
          <Link to={"/"} className="join-item grow btn btn-ghost ">
            <ArrowRightIcon /> View
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default function Listings() {
  const signed = useAppSelector((state) => state.auth.signed);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="grid sm:p-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-1">
      {items.map((key) => (
        <ListingsCard key={key} signed={signed} />
      ))}
    </div>
  );
}
