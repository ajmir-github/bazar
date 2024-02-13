import { IconSize } from "@/constants";
import { LogInIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center grow">
      <div className="p-4 w-full max-w-md grid gap-4">
        <h1 className="flex gap-2 items-center font-bold">
          <LogInIcon size={IconSize.lg} /> Log In here
        </h1>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="text" className="input input-bordered w-full " />
            <div className="label">
              <span className="label-text-alt text-error">
                This email is already in use!
              </span>
            </div>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input type="text" className="input input-bordered w-full " />
            <div className="label">
              <span className="label-text-alt text-error">
                This email is already in use!
              </span>
            </div>
          </label>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-primary">
            <LogInIcon size={IconSize.md} /> log in
          </button>
        </div>
      </div>
    </div>
  );
}
