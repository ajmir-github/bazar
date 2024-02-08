import { AppIcon } from "@/components/Icons";
import { useAppSelector } from "@/context";
import authSlice from "@/context/authSlice";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const getAuth = async () => {
  await new Promise((response) => {
    setTimeout(() => {
      response(null);
    }, 0);
  });
  // return null;
  return {
    id: "sdasd",
    fullName: "Ajmir Raziqi",
    email: "asdasd",
  };
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = useAppSelector((state) => state.ui.theme);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const initAuth = async () => {
    const auth = await getAuth();
    dispatch(
      auth ? authSlice.actions.signIn(auth) : authSlice.actions.signOut()
    );
    setLoading(false);
  };

  useEffect(() => {
    initAuth();
  }, []);
  return (
    <div
      className="flex justify-center items-center flex-col min-h-screen"
      data-theme={theme}
    >
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <AppIcon size={128} className="text-primary animate-pulse" />
          <i className="opacity-50">Loading..</i>
        </div>
      ) : (
        <div className="flex flex-col grow w-full max-w-screen-md">
          {children}
        </div>
      )}
    </div>
  );
}
