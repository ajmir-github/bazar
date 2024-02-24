import Listings from "@/components/Listings";
import ListingsOptions from "@/components/ListingsOptions";
import LoadMore from "@/components/LoadMore";
import { Post } from "@/interface";
import axios from "axios";
import { InfoIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [finished, setFinished] = useState(false);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    axios(`/post`, { params: { ...params, limit: 6, skip } })
      .then(({ data }: { data: Post[] }) => {
        if (data.length === 0) return setFinished(true);
        if (skip) {
          setPosts((prev) => [...prev, ...data]);
        } else {
          setFinished(false);
          setPosts(data);
        }
      })
      .catch((error: any) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [searchParams, skip]);

  if (loading) return "loading";

  const handleLoadMore = () => setSkip((p) => p + 6);

  return (
    <div className="grow overflow-y-scroll">
      <ListingsOptions />
      <Listings posts={posts} />
      {finished ? (
        <div className="flex justify-center m-8">
          <div className="text-xl flex items-center justify-center gap-2">
            <InfoIcon /> No more items
          </div>
        </div>
      ) : (
        <LoadMore loadMore={handleLoadMore} className="m-8 flex justify-center">
          <div className="loading"></div>
        </LoadMore>
      )}
    </div>
  );
}
