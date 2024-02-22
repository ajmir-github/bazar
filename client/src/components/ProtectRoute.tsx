import { useAppSelector } from "@/context";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectRoute({ children }: { children: ReactNode }) {
  const signed = useAppSelector((state) => state.auth.signed);
  const navigate = useNavigate();

  useEffect(() => {
    if (!signed) navigate("/login");
  }, [signed]);
  return children;
}
