import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
}
