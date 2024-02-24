import Categories from "@/constants/Categories";
import Conditions from "@/constants/Conditions";
import Locations from "@/constants/Locations";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PostFormValidator = z.object({
  title: z.string().min(3),
  category: z.string(),
  location: z.string(),
  description: z.string(),
  condition: z.string(),
  price: z.string().transform((str) => +str),
  negotiatable: z.boolean(),
});

type PostFormObject = z.infer<typeof PostFormValidator>;

export default function PostPage() {
  const [loading, setLoading] = useState(false);

  const form = useForm<PostFormObject>({
    defaultValues: {
      category: "6",
      location: "13",
      condition: "3",
    },
    resolver: zodResolver(PostFormValidator),
    disabled: loading,
  });

  const handleForm = async (inputs: PostFormObject) => {
    setLoading(true);
    axios
      .post("/post", inputs)
      .then(({ data }) => {
        console.log(data);
        alert("Post created!");
      })
      .catch((response: any) => {
        if (response instanceof AxiosError) {
          const errors = response.response?.data as object;
          for (const [name, message] of Object.entries(errors)) {
            form.setError(name as keyof PostFormObject, { message });
          }
        }
        console.error(response);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="overflow-y-auto grow">
      <div className="flex flex-col justify-center items-center grow min-h-full p-4">
        <form
          className="grid md:grid-cols-2 gap-2 w-full max-w-screen-md"
          onSubmit={form.handleSubmit(handleForm)}
        >
          <div className="md:col-span-2 mb-4 flex items-center gap-2 text-xl">
            <PlusIcon /> Post Your ad Here!
          </div>

          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              {...form.register("title")}
            />
            {form.formState.errors.title && (
              <label className="label">
                <div className="label-text-alt text-error">
                  {form.formState.errors.title.message}
                </div>
              </label>
            )}
          </div>

          <label className="form-control md:col-span-2">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              {...form.register("description")}
            ></textarea>
            {form.formState.errors.description && (
              <label className="label">
                <div className="label-text-alt text-error">
                  {form.formState.errors.description.message}
                </div>
              </label>
            )}
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              className="select select-bordered"
              {...form.register("category")}
            >
              {Categories.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name.en}
                </option>
              ))}
            </select>
            {form.formState.errors.category && (
              <label className="label">
                <div className="label-text-alt text-error">
                  {form.formState.errors.category.message}
                </div>
              </label>
            )}
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <select
              className="select select-bordered"
              {...form.register("location")}
            >
              {Locations.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name.en}
                </option>
              ))}
            </select>
            {form.formState.errors.location && (
              <label className="label">
                <div className="label-text-alt text-error">
                  {form.formState.errors.location.message}
                </div>
              </label>
            )}
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Condition</span>
            </div>
            <select
              className="select select-bordered"
              {...form.register("condition")}
            >
              {Conditions.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name.en}
                </option>
              ))}
            </select>
            {form.formState.errors.condition && (
              <label className="label">
                <div className="label-text-alt text-error">
                  {form.formState.errors.condition.message}
                </div>
              </label>
            )}
          </label>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              {...form.register("price")}
            />
            {form.formState.errors.price && (
              <label className="label">
                <div className="label-text-alt text-error">
                  {form.formState.errors.price.message}
                </div>
              </label>
            )}
          </div>
          <div className="form-control justify-center  md:col-span-2">
            <label className="label cursor-pointer">
              <span className="label-text">Negotiable Price</span>
              <input
                type="checkbox"
                className="checkbox"
                {...form.register("negotiatable")}
              />
            </label>
          </div>

          <div className="flex justify-between gap-2 items-center md:col-span-2 mt-4">
            <div className="p-2">
              {loading && <div className="loading"></div>}
            </div>
            <div className="flex gap-2">
              <div className="form-control">
                <button
                  className="btn btn-primary"
                  disabled={loading}
                  type="submit"
                >
                  <PlusIcon />
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
