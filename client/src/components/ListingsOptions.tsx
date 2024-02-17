import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
import { FilterIcon } from "lucide-react";
import { useEffect } from "react";

const categories = [];

const FormSchema = z.object({
  category: z.string().optional(),
  condition: z.string().optional(),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
  sort: z.string().optional(),
});
export default function ListingsOptions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      condition: "*",
      category: "*",
      sort: "*",
    },
  });

  useEffect(() => {
    const query = Object.fromEntries(searchParams.entries());
    form.reset(query);
  }, [searchParams]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // const onlyDefinedInputs = JSON.parse(JSON.stringify(data));
    const onlyDefinedInputs = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => !(!value || value === "*"))
    );
    setSearchParams(onlyDefinedInputs);
  }

  return (
    <form
      className="p-2 gap-2 grid grid-cols-2 md:grid-cols-6 items-end bg-base-300"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <label className="form-control">
        <div className="label">
          <span className="label-text">category</span>
        </div>
        <select
          className="select select-bordered"
          {...form.register("category")}
        >
          <option value="*">Any</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothes">Clothes</option>
          <option value="Vahicles">Vahicles</option>
        </select>
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">condition</span>
        </div>
        <select
          className="select select-bordered"
          {...form.register("condition")}
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
          <span className="label-text">minPrice</span>
        </div>
        <input
          type="number"
          className="input input-bordered"
          {...form.register("minPrice")}
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">maxPrice</span>
        </div>
        <input
          type="number"
          className="input input-bordered"
          {...form.register("maxPrice")}
        />
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text">sort</span>
        </div>
        <select className="select select-bordered" {...form.register("sort")}>
          <option value="*">Sort Newest</option>
          <option value="date::desc">Sort Oldest</option>

          <option value="price::asc">Sort Heighest</option>
          <option value="price:desc">Sort Lowest</option>
        </select>
      </label>

      <button type="submit" className="btn btn-primary">
        <FilterIcon size={20} />
        Filter
      </button>
    </form>
  );
}
