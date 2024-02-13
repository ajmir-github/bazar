import {
  HomeIcon,
  InfoIcon,
  ListTreeIcon,
  LogInIcon,
  MenuIcon,
  UserPlusIcon,
} from "lucide-react";
import { IconSize } from "../../constants";
import { Link } from "react-router-dom";

export default function NavBar({ categories }: { categories: string[] }) {
  const MenuItems = () => (
    <>
      <li>
        <Link to={"/"}>
          <HomeIcon size={IconSize.sm} /> Home
        </Link>
      </li>
      <li>
        <details>
          <summary>
            <ListTreeIcon size={IconSize.sm} />
            Category
          </summary>
          <ul className="p-2">
            {categories.map((categories) => (
              <li key={categories}>
                <Link to={`/?category=${categories}`}>{categories}</Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      <li>
        <Link to={"/about"}>
          <InfoIcon size={IconSize.sm} /> About
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 bg-opacity-75 shadow-lg">
      <div className="navbar-start gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MenuIcon size={IconSize.md} />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 gap-2"
          >
            <MenuItems />
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Bazar
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1 gap-2">
          <MenuItems />
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
          <Link to={"/login"} className="join-item btn btn-ghost">
            <LogInIcon size={IconSize.md} />
            <span className="hidden sm:block">Login</span>
          </Link>
          <Link to={"/register"} className="join-item btn btn-primary">
            <UserPlusIcon size={IconSize.md} />
            <span className="hidden sm:block">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
