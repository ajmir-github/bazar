import { useSearchParams } from "react-router-dom";

export default function ListingsOptions() {
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
    <div className="gap-2 grid grid-cols-2 md:grid-cols-6 items-end md:sticky top-0 z-10">
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

      <label className="form-control">
        <div className="label">
          <span className="label-text">Sort</span>
        </div>
        <select
          className="select select-bordered"
          defaultValue={getInput("sort") || "*"}
          onChange={(e) => setInput("sort", e.target.value)}
        >
          <option value="*">Sort Newest</option>
          <option value="date::desc">Sort Oldest</option>

          <option value="price::asc">Sort Heighest</option>
          <option value="price:desc">Sort Lowest</option>
        </select>
      </label>
    </div>
  );
}
