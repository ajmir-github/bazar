import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { IconSize } from "../../constants";
import { Link } from "react-router-dom";

export default function Pagination() {
  return (
    <div className="flex justify-center">
      <div className="join grid grid-cols-2">
        <Link to={"page=2"} className="join-item btn btn-outline">
          <ArrowLeftIcon size={IconSize.md} /> Previous page
        </Link>
        <Link to={"page=3"} className="join-item btn btn-secondary">
          Next page <ArrowRightIcon size={IconSize.md} />
        </Link>
      </div>
    </div>
  );
}
