import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useSearchParams } from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { FilterIcon } from "lucide-react";
import { useEffect } from "react";

const categories = [];

const FormSchema = z.object({
  category: z.string(),
  condition: z.string(),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
  sort: z.string(),
});
export default function ListingsOptions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      condition: "*",
      category: "*",
      sort: "date::asc",
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-2 gap-2 grid grid-cols-2 md:grid-cols-6 items-end"
      >
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="*">Any</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Clothes">Clothes</SelectItem>
                  <SelectItem value="Vahicles">Vahicles</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="condition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Condition</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Conidtion" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="*">Any</SelectItem>
                  <SelectItem value="date::assc">New</SelectItem>
                  <SelectItem value="price::aasdsc">barely used</SelectItem>
                  <SelectItem value="date::desdac">Used</SelectItem>
                  <SelectItem value="price:deswc">Old</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="minPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Min Price</FormLabel>
              <Input
                type="number"
                defaultValue={field.value}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max Price</FormLabel>
              <Input
                type="number"
                defaultValue={field.value}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sort"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sort</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sort by date</SelectLabel>
                    <SelectItem value="date::asc">Sort Newest</SelectItem>
                    <SelectItem value="date::desc">Sort Oldest</SelectItem>
                  </SelectGroup>

                  <SelectGroup>
                    <SelectLabel>Sort by price</SelectLabel>
                    <SelectItem value="price::asc">Sort Heighest</SelectItem>
                    <SelectItem value="price:desc">Sort Lowest</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="gap-1">
          <FilterIcon size={16} />
          Filter
        </Button>
      </form>
    </Form>
  );
}
