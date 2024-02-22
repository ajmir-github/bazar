import Categories from "@/constants/Categories";
import Locations from "@/constants/Locations";
import { FilterIcon, RotateCcwIcon, XIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ListingsOptions() {
  const [show, setShow] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  function getDefaultValue(name: string) {
    return searchParams.get(name) || "";
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myFormData = new FormData(event.currentTarget);
    const params: { [key: string]: string } = {};
    for (const [key, value] of myFormData.entries()) {
      if (value) params[key] = value as string;
    }
    // const prevParams = Object.fromEntries(searchParams.entries());
    setSearchParams(params);
    setShow(false);
  };
  const handleReset = () => {
    setSearchParams({}), setShow(false);
  };

  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="listings-filter-modal"
        className="btn btn-circle btn-primary fixed bottom-4 right-4 z-20"
      >
        <FilterIcon />
      </label>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="listings-filter-modal"
        className="modal-toggle"
        checked={show}
        onChange={(e) => setShow(e.target.checked)}
      />
      <div className="modal" role="dialog">
        <form
          className="modal-box gap-2 grid grid-cols-2"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <div className="col-span-2 mb-4 flex items-center gap-2 text-xl">
            <FilterIcon /> Filter Items
          </div>
          <label className="form-control col-span-2">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              className="select select-bordered"
              defaultValue={getDefaultValue("category")}
              name="category"
            >
              <option value="">Any</option>
              {Categories.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name.en}
                </option>
              ))}
            </select>
          </label>

          <label className="form-control col-span-2">
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <select
              className="select select-bordered"
              defaultValue={getDefaultValue("location")}
              name="location"
            >
              <option value="">Any where</option>
              {Locations.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name.en}
                </option>
              ))}
            </select>
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Minimum price</span>
            </div>
            <input
              type="number"
              className="input input-bordered"
              defaultValue={getDefaultValue("minPrice")}
              name="minPrice"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Maximum Price</span>
            </div>
            <input
              type="number"
              className="input input-bordered"
              defaultValue={getDefaultValue("maxPrice")}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Condition</span>
            </div>
            <select
              className="select select-bordered"
              defaultValue={getDefaultValue("condition")}
              name="condition"
            >
              <option value="">Any</option>
              <option value="date::assc">New</option>
              <option value="price::aasdsc">barely used</option>
              <option value="date::desdac">Used</option>
              <option value="price:deswc">Old</option>
            </select>
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Sort</span>
            </div>
            <select
              className="select select-bordered"
              defaultValue={getDefaultValue("sort") || "*"}
              name="sort"
            >
              <option value="">Sort Newest</option>
              <option value="date::desc">Sort Oldest</option>

              <option value="price::asc">Sort Heighest</option>
              <option value="price:desc">Sort Lowest</option>
            </select>
          </label>

          <div className="join gap-1 col-span-2 mt-4">
            <button className="join-item grow btn btn-primary" type="submit">
              <FilterIcon />
              Filter
            </button>
            <button className="join-item grow btn btn-warning" type="reset">
              <RotateCcwIcon />
              Reset
            </button>
            <label
              className="join-item grow btn btn-error"
              htmlFor="listings-filter-modal"
            >
              <XIcon />
              Close
            </label>
          </div>
        </form>
        <label className="modal-backdrop" htmlFor="listings-filter-modal">
          Close
        </label>
      </div>
    </>
  );
}
