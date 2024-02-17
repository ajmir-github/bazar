import { authActions, useAppDispatch } from "@/context";
import { ReactNode, useEffect, useState } from "react";

function LoadingPage({ message }: { message?: string }) {
  return (
    <div className="bg-base-100 text-base-content w-screen h-screen flex justify-center items-center flex-col gap-16">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <div className="text-4xl md:text-6xl font-bold uppercase animate-pulse">
          Azad Bazar
        </div>
        <div>{message}, please wait!</div>
      </div>
    </div>
  );
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authActions.signOut());
    setLoading(false);
  });
  return loading ? <LoadingPage message="Checking authentication" /> : children;
}
