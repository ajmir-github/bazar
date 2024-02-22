import { authActions, useAppDispatch } from "@/context";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { UserPlusIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUpFormValidator = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  fullName: z.string().min(3),
});
type SignUpFormObject = z.infer<typeof SignUpFormValidator>;

interface User {
  _id: string;
  email: string;
}

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const form = useForm<SignUpFormObject>({
    resolver: zodResolver(SignUpFormValidator),
    disabled: loading,
  });
  const handleForm = async (inputs: SignUpFormObject) => {
    setLoading(true);

    if (inputs.password !== inputs.confirmPassword) {
      form.setError("confirmPassword", {
        message: "Confirm password has not matched to the password!",
      });
      setLoading(false);
      return;
    }

    axios
      .post("/auth/sign-up", inputs)
      .then(({ data }) => {
        const { token, user } = data as { token: string; user: User };
        // save local token
        localStorage.setItem("auth", token);
        dispatch(authActions.signIn({ user, token }));
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 400) {
          const errors = Object.entries(error.response?.data || {});
          for (const [key, value] of errors) {
            form.setError(key as any, { message: value });
          }
        } else {
          console.log(error);
        }
        setLoading(false);
      });
  };
  return (
    <form className="grid gap-2" onSubmit={form.handleSubmit(handleForm)}>
      <div className="flex items-center gap-2">
        <UserPlusIcon /> Sign up here!
      </div>
      <div className="grid md:grid-cols-2 gap-2 my-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <label className="label">
              <div className="label-text-alt text-error">
                {form.formState.errors.email.message}
              </div>
            </label>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            {...form.register("fullName")}
          />
          {form.formState.errors.fullName && (
            <label className="label">
              <div className="label-text-alt text-error">
                {form.formState.errors.fullName.message}
              </div>
            </label>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            {...form.register("password")}
          />
          {form.formState.errors.password && (
            <label className="label">
              <div className="label-text-alt text-error">
                {form.formState.errors.password.message}
              </div>
            </label>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            {...form.register("confirmPassword")}
          />
          {form.formState.errors.confirmPassword && (
            <label className="label">
              <div className="label-text-alt text-error">
                {form.formState.errors.confirmPassword.message}
              </div>
            </label>
          )}
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <div className="p-2">{loading && <div className="loading"></div>}</div>
        <div className="flex gap-2">
          <div className="form-control">
            <button
              className="btn btn-primary"
              disabled={loading}
              type="submit"
            >
              <UserPlusIcon />
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
