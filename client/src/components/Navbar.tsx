import { ReactNode, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  authActions,
  uiActions,
  useAppDispatch,
  useAppSelector,
} from "@/context";
import clsx from "clsx";
import {
  ShoppingCartIcon,
  SettingsIcon,
  ListIcon,
  PlusIcon,
  LogInIcon,
  UserIcon,
  InfoIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  LogOutIcon,
  SunIcon,
  MoonIcon,
  HomeIcon,
} from "lucide-react";

export default function Navbar() {
  const signed = useAppSelector((state) => state.auth.signed);
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();

  const CLink = ({
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
      {icon} <span className={clsx("hidden sm:block")}>{label}</span>
    </NavLink>
  );

  return (
    <div className="flex flex-col justify-center p-1 sm:p-2 shrink-0 border-r-2 border-base-300 gap-1 overflow-y-auto">
      <div className="flex flex-col gap-1">
        <Link to={"/about"} className="grow flex justify-center">
          <img
            className="w-12 sm:w-24 border-2 border-base-200 rounded-full"
            src="/images/logo.png"
            alt="logo"
          />
        </Link>

        <div className="divider"></div>

        <CLink href="/" label="Home" icon={<HomeIcon />} />

        {signed ? (
          <>
            <CLink href="/profile" label="Profile" icon={<UserIcon />} />

            <CLink
              href="/wishlist"
              label="Wishlist"
              icon={<ShoppingCartIcon />}
              disabled={!signed}
            />
            <CLink
              href="/post"
              label="post"
              icon={<PlusIcon />}
              disabled={!signed}
            />
          </>
        ) : (
          <CLink href="/login" label="Login" icon={<LogInIcon />} />
        )}

        <div className="divider"></div>

        {signed && (
          <button
            className="btn btn-ghost justify-start"
            onClick={() => dispatch(authActions.signOut())}
          >
            <LogOutIcon />
            <span className={clsx("hidden sm:block")}>Logout</span>
          </button>
        )}

        {theme === "dark" ? (
          <button
            className="btn btn-ghost justify-start"
            onClick={() => dispatch(uiActions.changeTheme("light"))}
          >
            <SunIcon />
            <span className={clsx("hidden sm:block")}>Light</span>
          </button>
        ) : (
          <button
            className="btn btn-ghost justify-start"
            onClick={() => dispatch(uiActions.changeTheme("dark"))}
          >
            <MoonIcon />
            <span className={clsx("hidden sm:block")}>Dark</span>
          </button>
        )}
        <CLink href="/about" label="About" icon={<InfoIcon />} />
      </div>
    </div>
  );
}
