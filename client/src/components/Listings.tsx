import { useAppSelector } from "@/context";
import { Post } from "@/interface";
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

function ListingsCard({ signed, post }: { signed: boolean; post: Post }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="card-compact border-2 border-base-200 bg-base-100 shadow-lg overflow-hidden relative">
      <Link to={`/post/view/${post._id}`}>
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
      </Link>
      <div className="flex items-center gap-1 absolute top-4 left-4 bg-base-100 py-1 px-2 rounded-box text-base">
        <TagIcon size={16} /> ${post.price}
      </div>
      <Link to={"/"} className="btn btn-circle absolute top-4 right-4">
        <EditIcon />
      </Link>
      <div className="card-body">
        <h2 className="card-title truncate">{post.title}</h2>

        <Link
          className="flex items-center gap-1 truncate text-base link-hover"
          to={`/?location=${"Kabul"}`}
        >
          <MapPinIcon size={16} /> Post.area, {post.location}
        </Link>
        <div className="grow join">
          {signed && (
            <button className="join-item grow btn btn-ghost ">
              <BookmarkPlusIcon /> Save
            </button>
          )}
          <Link
            to={`/post/view/${post._id}`}
            className="join-item grow btn btn-ghost "
          >
            <ArrowRightIcon /> View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Listings({ posts }: { posts: Post[] }) {
  const signed = useAppSelector((state) => state.auth.signed);

  return (
    <div className="grid sm:p-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-1">
      {posts.map((post) => (
        <ListingsCard key={post._id} post={post} signed={signed} />
      ))}
    </div>
  );
}
