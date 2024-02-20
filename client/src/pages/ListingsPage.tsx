import Listings from "@/components/Listings";
import PageLayout from "@/layouts/PageLayout";
import {
  FilterIcon,
  ListTreeIcon,
  MapPinIcon,
  RotateCcwIcon,
  XIcon,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function ListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setInput(name: string, value: string) {
    const prev = Object.fromEntries(searchParams.entries());
    if (value === "" || value === "*") {
      if (prev[name]) delete prev[name];
      setSearchParams(prev);
    } else {
      setSearchParams({
        ...prev,
        [name]: value,
      });
    }
  }
  function getInput(name: string, defaultValue: string = "") {
    return searchParams.get(name) || defaultValue;
  }
  return (
    <PageLayout
      quickOptions={
        <>
          <label htmlFor="my_modal_6" className="btn btn-ghost">
            <FilterIcon />
            Filter items
          </label>

          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box gap-2 grid p-4 md:p-8">
              <h1 className="flex gap-2 font-bold text-xl items-center mb-4">
                <FilterIcon /> Filter Items
              </h1>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <select
                  className="select select-bordered"
                  defaultValue={getInput("category") || "*"}
                  onChange={(e) => setInput("category", e.target.value)}
                >
                  <option value="*">Any</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Vahicles">Vahicles</option>
                </select>
              </label>

              <label className="form-control">
                <div className="label">
                  <span className="label-text">Location</span>
                </div>
                <select
                  className="select select-bordered"
                  defaultValue={getInput("location") || "*"}
                  onChange={(e) => setInput("location", e.target.value)}
                >
                  <option value="*">Any where</option>
                  <option value="location::kabul">kabul</option>
                  <option value="location::Mazar">Mazar</option>
                  <option value="location:Herat">Herat</option>
                </select>
              </label>

              <label className="form-control">
                <div className="label">
                  <span className="label-text">Condition</span>
                </div>
                <select
                  className="select select-bordered"
                  defaultValue={getInput("condition") || "*"}
                  onChange={(e) => setInput("condition", e.target.value)}
                >
                  <option value="*">Any</option>
                  <option value="date::assc">New</option>
                  <option value="price::aasdsc">barely used</option>
                  <option value="date::desdac">Used</option>
                  <option value="price:deswc">Old</option>
                </select>
              </label>

              <div className="grid grid-cols-2 gap-2">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Minimum price</span>
                  </div>
                  <input
                    type="number"
                    className="input input-bordered"
                    defaultValue={getInput("minPrice") || ""}
                    onChange={(e) => setInput("minPrice", e.target.value)}
                  />
                </label>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Maximum Price</span>
                  </div>
                  <input
                    type="number"
                    className="input input-bordered"
                    defaultValue={getInput("maxPrice") || ""}
                    onChange={(e) => setInput("maxPrice", e.target.value)}
                  />
                </label>
              </div>

              <div className="join grow items-center mt-4 gap-1">
                <button className="join-item grow btn btn-primary">
                  <FilterIcon />
                  Filter
                </button>
                <button className="join-item grow btn btn-warning">
                  <RotateCcwIcon />
                  Reset
                </button>
                <label
                  className="join-item grow btn btn-error"
                  htmlFor="my_modal_6"
                >
                  <XIcon />
                  Close
                </label>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_6">
              Close
            </label>
          </div>
        </>
      }
    >
      <Listings />
    </PageLayout>
  );
}
