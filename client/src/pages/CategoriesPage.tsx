import { Link } from "react-router-dom";

function CategoryCard() {
  return (
    <Link
      to={"/?category=electronics"}
      className="card overflow-hidden shadow-lg image-full group"
    >
      <img
        className="group-hover:scale-105 transition"
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />
      <div className="card-body items-center justify-end">
        <h2 className="card-title">Shoes!</h2>
      </div>
    </Link>
  );
}

export default function CategoriesPage() {
  const categories = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];
  return (
    <div className="grow w-full overflow-y-scroll">
      <div className="grid p-2 gap-2 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((key) => (
          <CategoryCard key={key} />
        ))}
      </div>
    </div>
  );
}
