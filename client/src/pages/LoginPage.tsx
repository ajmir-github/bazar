import SignInForm from "@/components/SignInForm";
import SignUpForm from "@/components/SignUpForm";
import { useAppSelector } from "@/context";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TAB = {
  SIGN_IN: 1,
  SIGN_UP: 2,
};

export default function LoginPage() {
  const signed = useAppSelector((state) => state.auth.signed);
  const [tab, setTab] = useState(TAB.SIGN_IN);
  const navigate = useNavigate();

  useEffect(() => {
    if (signed) navigate("/profile");
  }, [signed]);
  return (
    <div className="grow overflow-y-scroll flex justify-center items-center p-2 gap-2">
      <div className="grid gap-8 w-full max-w-screen-sm">
        <div role="tablist" className="tabs tabs-boxed">
          <button
            role="tab"
            className={clsx("tab", tab === TAB.SIGN_IN && "tab-active")}
            onClick={() => setTab(TAB.SIGN_IN)}
          >
            Sign In
          </button>
          <button
            role="tab"
            className={clsx("tab", tab === TAB.SIGN_UP && "tab-active")}
            onClick={() => setTab(TAB.SIGN_UP)}
          >
            Sign Up
          </button>
        </div>
        {tab === TAB.SIGN_IN && <SignInForm />}
        {tab === TAB.SIGN_UP && <SignUpForm />}
      </div>
    </div>
  );
}
