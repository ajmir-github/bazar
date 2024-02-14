import { IconSize } from "@/constants";
import { LogInIcon, UserPlusIcon } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center grow">
      <div className="p-4 w-full max-w-md grid gap-4 bg-base-100 bg-opacity-50 rounded-box shadow-xl">
        <h1 className="flex gap-2 items-center font-bold">
          <UserPlusIcon size={IconSize.lg} />
          Register yourself here!
        </h1>

        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Full Name</span>
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
            <LogInIcon size={IconSize.md} /> Register
          </button>
        </div>
      </div>
    </div>
  );
}
