import Navbar from "@/components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

function LoadingPage() {
  return (
    <div className="w-full grow flex justify-center items-center">
      <div className="loading text-primary loading-lg"></div>
    </div>
  );
}

export default function AppLayout() {
  const navigation = useNavigation();
  return (
    <div
      className="flex h-screen w-screen overflow-hidden bg-base-300"
      data-theme="dark"
    >
      <Navbar />
      {navigation.state === "loading" ? <LoadingPage /> : <Outlet />}
    </div>
  );
}
