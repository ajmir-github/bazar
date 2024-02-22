import SignInForm from "@/components/SignInForm";
import SignUpForm from "@/components/SignUpForm";
import { useAppSelector } from "@/context";
import { UserPlusIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const signed = useAppSelector((state) => state.auth.signed);
  const navigate = useNavigate();

  useEffect(() => {
    if (signed) navigate("/profile");
  }, [signed]);
  return (
    <div className="grow overflow-y-scroll flex justify-center items-center p-2 gap-2">
      <div role="tablist" className="tabs tabs-lifted  grow max-w-screen-md">
        <input
          type="radio"
          name="login-tabs"
          role="tab"
          className="tab"
          aria-label="Sign In"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-4"
        >
          <SignInForm />
        </div>

        <input
          type="radio"
          name="login-tabs"
          role="tab"
          className="tab"
          aria-label="Sign Up"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-4"
        >
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
