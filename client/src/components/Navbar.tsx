import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { uiActions, useAppDispatch, useAppSelector } from "@/context";
import clsx from "clsx";
import {
  ShoppingCartIcon,
  SearchIcon,
  SettingsIcon,
  ListIcon,
  PlusIcon,
  LogInIcon,
  UserIcon,
  InfoIcon,
  ListTreeIcon,
  SidebarOpenIcon,
  ArrowRightIcon,
  SidebarOpen,
  SidebarCloseIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

export default function Navbar() {
  const signed = useAppSelector((state) => state.auth.signed);
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();
  const [extend, setExtend] = useState(true);

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
      {icon} <span className={"hidden sm:block"}>{label}</span>
    </NavLink>
  );

  return (
    <div className="flex flex-col justify-between p-2 shadow-lg shrink-0 bg-base-100 ">
      <div className="flex gap-2 flex-col">
        <Link href="/" label="Listings" icon={<ListIcon />} />
        <Link href="/categories" label="Categories" icon={<ListTreeIcon />} />
        <Link href="/search" label="Search" icon={<SearchIcon />} />
      </div>

      <div className="flex gap-2 flex-col">
        <Link
          href="/post"
          label="post"
          icon={<PlusIcon />}
          disabled={!signed}
        />
        <Link
          href="/wishlist"
          label="Wishlist"
          icon={<ShoppingCartIcon />}
          disabled={!signed}
        />
        {signed ? (
          <Link href="/profile" label="Profile" icon={<UserIcon />} />
        ) : (
          <Link href="/login" label="Login" icon={<LogInIcon />} />
        )}

        <div className="divider"></div>

        <Link href="/settings" label="Settings" icon={<SettingsIcon />} />
        <Link href="/about" label="About" icon={<InfoIcon />} />
      </div>
    </div>
  );
}
