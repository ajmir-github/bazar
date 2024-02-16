import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink, useLocation } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";

export default function Navbar() {
  const signed = useSelector((s) => s.auth.signed);
  const location = useLocation();
  const Links = [
    {
      href: "/",
      label: "listings",
      icon: <ViewListIcon />,
    },
    {
      href: "/search",
      label: "Search",
      icon: <SearchIcon />,
    },
    {
      href: "/add-post",
      label: "Post",
      icon: <AddIcon />,
      onlySigned: true,
    },
    {
      href: "/wishlist",
      label: "Wishlist",
      icon: <FavoriteIcon />,
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
      icon: <PersonAddIcon />,
      onlyUnSigned: true,
    },
    {
      href: "/login",
      label: "Login",
      icon: <LoginIcon />,
      onlyUnSigned: true,
    },
  ];

  return (
    <BottomNavigation
      showLabels
      value={location.pathname}
      // onChange={(event, href) => setValue(href)}
    >
      {Links.filter(({ onlySigned, onlyUnSigned }) => {
        if (!onlySigned && !onlyUnSigned) return true;
        return signed ? onlySigned : onlyUnSigned;
      }).map(({ label, href, icon }) => (
        <BottomNavigationAction
          key={label}
          LinkComponent={NavLink}
          to={href}
          label={label}
          icon={icon}
          value={href}
        />
      ))}
    </BottomNavigation>
  );
}
