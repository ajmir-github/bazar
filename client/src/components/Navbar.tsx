import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShoppingCartIcon,
  SearchIcon,
  SettingsIcon,
  ListIcon,
  PlusIcon,
  LogInIcon,
  UserPlusIcon,
} from "lucide-react";
import { useAppSelector } from "@/context";

type LinkType = {
  href: string;
  label: string;
  icon: ReactNode;
  onlySigned: null | boolean;
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

export default function Navbar() {
  const signed = useAppSelector((s) => s.auth.signed);
  const filterLinks = ({ onlySigned }: LinkType) => {
    if (onlySigned === null) return true;
    if (signed && onlySigned) return true;
    if (!signed && !onlySigned) return true;
  };
  return (
    <div className="flex justify-center p-2 border-t-[1px] shadow-xl">
      <div className="grid grid-flow-col gap-1">
        {links.filter(filterLinks).map(({ href, icon, label }) => (
          <NavLink to={href} key={label}>
            {(state) => (
              <Button
                variant={state.isActive ? "secondary" : "ghost"}
                className="gap-2 w-full flex flex-col h-auto sm:flex-row"
              >
                {icon} {label}
              </Button>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
