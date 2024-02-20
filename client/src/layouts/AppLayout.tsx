import Navbar from "@/components/Navbar";
import { useAppSelector } from "@/context";
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
  const theme = useAppSelector((state) => state.ui.theme);
  return (
    <div className="flex h-screen w-screen overflow-hidden" data-theme={theme}>
      <Navbar />
      {navigation.state === "loading" ? <LoadingPage /> : <Outlet />}
    </div>
  );
}
