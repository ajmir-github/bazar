import { authActions, useAppDispatch } from "@/context";
import User from "@/interfaces/User";
import axios from "axios";
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

const checkAuth = async (
  callback: (response?: { token: string; user: object }) => void
) => {
  const token = localStorage.getItem("auth");
  if (!token) return callback();
  try {
    const response = await axios.get("/auth");
    const user = response.data as User;
    callback({ token, user });
  } catch (error) {
    console.log(error);
    callback();
  }
};

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkAuth((response) => {
      // sign out is to clear failed tokens
      dispatch(response ? authActions.signIn(response) : authActions.signOut());
      setLoading(false);
    });
  }, []);
  return loading ? <LoadingPage message="Checking authentication" /> : children;
}
