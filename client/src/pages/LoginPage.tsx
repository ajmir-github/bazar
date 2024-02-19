import SignInForm from "@/components/SignInForm";
import { useAppSelector } from "@/context";
import { UserPlusIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  return (
    <form className="grid gap-4">
      <div className="flex items-center gap-2">
        <UserPlusIcon /> Sign Up here!
      </div>
      <div className="grid md:grid-cols-2 gap-2 my-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="confirmPassword"
            className="input input-bordered"
            required
          />
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <div className="p-2">
          <div className="loading"></div>
        </div>
        <div className="form-control">
          <button className="btn btn-primary">
            <UserPlusIcon />
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
}

export default function LoginPage() {
  const signed = useAppSelector((state) => state.auth.signed);
  const navigate = useNavigate();

  useEffect(() => {
    if (signed) navigate("/profile");
  }, [signed]);
  return (
    <div className="grow overflow-y-scroll">
      <div className="grid p-2 gap-2">
        <div className="p-4 bg-base-100 rounded-box shadow-lg">
          <SignInForm />
        </div>
        <div className="p-4 bg-base-100 rounded-box shadow-lg">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
