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
  InfoIcon,
  ListTreeIcon,
} from "lucide-react";

const Link = ({
  href,
  icon,
  label,
  disabled,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  disabled?: boolean;
}) => (
  <NavLink
    to={href}
    key={label}
    className={(state) =>
      clsx(
        "btn btn-ghost grow justify-start",
        state.isActive && "btn-active",
        state.isPending && "btn-active animate-pulse",
        disabled && "btn-disabled"
      )
    }
  >
    {icon} <span className="hidden sm:block">{label}</span>
  </NavLink>
);

export default function Navbar() {
  const signed = useAppSelector((state) => state.auth.signed);
  return (
    <div className="flex flex-col justify-between p-2 shadow-lg shrink-0 bg-base-100 ">
      <div className="flex gap-2 flex-col">
        <Link
          href="/post"
          label="post"
          icon={<PlusIcon />}
          disabled={!signed}
        />
        <Link href="/" label="Listings" icon={<ListIcon />} />
        <Link href="/categories" label="Categories" icon={<ListTreeIcon />} />
        <Link href="/search" label="Search" icon={<SearchIcon />} />
        <Link
          href="/wishlist"
          label="Wishlist"
          icon={<ShoppingCartIcon />}
          disabled={!signed}
        />
      </div>

      <div className="flex gap-2 flex-col">
        {signed ? (
          <>
            <Link href="/profile" label="Profile" icon={<UserIcon />} />
            <Link href="/settings" label="Settings" icon={<SettingsIcon />} />
          </>
        ) : (
          <Link href="/login" label="Login" icon={<LogInIcon />} />
        )}
        <Link href="/about" label="About" icon={<InfoIcon />} />
      </div>
    </div>
  );
}
