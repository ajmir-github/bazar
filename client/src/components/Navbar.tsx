import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/context";
import clsx from "clsx";
import {
  ShoppingCartIcon,
  SearchIcon,
  SettingsIcon,
  ListIcon,
  PlusIcon,
  LogInIcon,
  UserPlusIcon,
  UserIcon,
} from "lucide-react";

type LinkType = {
  href: string;
  label: string;
  icon: ReactNode;
};
const links: LinkType[] = [
  { href: "/", label: "Listings", icon: <ListIcon />, onlySigned: null },
  { href: "/search", label: "Search", icon: <SearchIcon />, onlySigned: null },
  { href: "/post", label: "Post", icon: <PlusIcon />, onlySigned: true },
  {
    href: "/wishlist",
    label: "Wishlist",
    icon: <ShoppingCartIcon />,
    onlySigned: true,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <SettingsIcon />,
    onlySigned: true,
  },
  {
    href: "/register",
    label: "Register",
    icon: <UserPlusIcon />,
    onlySigned: false,
  },
  {
    href: "/login",
    label: "Login",
    icon: <LogInIcon />,
    onlySigned: false,
  },
];

const Link = ({ href, icon, label }: LinkType) => (
  <NavLink
    to={href}
    key={label}
    className={(state) =>
      clsx(
        "btn btn-ghost grow justify-start",
        state.isActive && "btn-active",
        state.isPending && "btn-active animate-pulse"
      )
    }
  >
    {icon} <span className="hidden sm:block">{label}</span>
  </NavLink>
);

export default function Navbar() {
  const signed = useAppSelector((s) => !s.auth.signed);
  return (
    <div className="flex flex-col justify-between p-2 bg-base-300 shadow-xl shrink-0">
      <div className="flex gap-2 flex-col">
        <Link href="/" label="Listings" icon={<ListIcon />} />
        <Link href="/" label="Categories" icon={<ListIcon />} />
        <Link href="/search" label="Search" icon={<SearchIcon />} />
      </div>

      {signed ? (
        <div className="flex gap-2 flex-col">
          <Link href="/profile" label="Profile" icon={<UserIcon />} />
          <Link href="/settings" label="Settings" icon={<SettingsIcon />} />
        </div>
      ) : (
        <div className="flex gap-2 flex-col">
          <Link href="/login" label="Login" icon={<LogInIcon />} />
          <Link href="/register" label="Register" icon={<UserPlusIcon />} />
        </div>
      )}
    </div>
  );
}
