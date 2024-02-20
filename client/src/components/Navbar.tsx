import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/context";
import clsx from "clsx";
import {
  ShoppingCartIcon,
  SettingsIcon,
  ListIcon,
  PlusIcon,
  LogInIcon,
  UserIcon,
  InfoIcon,
} from "lucide-react";

export default function Navbar() {
  const signed = useAppSelector((state) => state.auth.signed);

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
    <div className="flex flex-col justify-center p-1 sm:p-2 shrink-0 border-r-2 border-base-300">
      <div className="flex gap-1 flex-col">
        <Link href="/" label="Listings" icon={<ListIcon />} />
      </div>

      <div className="divider"></div>

      <div className="flex gap-1 flex-col">
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
