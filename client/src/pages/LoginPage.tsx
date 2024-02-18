import { AppIcon } from "@/components/Icons";

function SignInForm() {
  return (
    <form className="grid gap-4">
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
        {/* <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label> */}
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Sign in</button>
      </div>
    </form>
  );
}
function SignUpForm() {
  return (
    <form className="grid gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input type="text" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Bio</span>
        </label>
        <textarea className="textarea textarea-bordered"></textarea>
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
      <div className="form-control mt-6">
        <button className="btn btn-primary">Sign up</button>
      </div>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="grow">
      <div className="grid max-w-screen-md">
        <div className="bg-red-500 w-full">a</div>
        <div className="bg-blue-500 w-full">b</div>
      </div>
    </div>
  );
}
