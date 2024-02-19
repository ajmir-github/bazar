import { authActions, useAppDispatch } from "@/context";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { LogInIcon, RotateCcwIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignInFormValidator = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});
type SignInFormObject = z.infer<typeof SignInFormValidator>;

interface User {
  _id: string;
  email: string;
}

export default function SignInForm() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const form = useForm<SignInFormObject>({
    resolver: zodResolver(SignInFormValidator),
    disabled: loading,
  });
  const handleForm = async (inputs: SignInFormObject) => {
    setLoading(true);

    axios
      .post("/auth/sign-in", inputs)
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
        <LogInIcon /> Sign here!
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
      </div>
      <div className="flex justify-between gap-2 items-center">
        <div className="p-2">{loading && <div className="loading"></div>}</div>
        <div className="flex gap-2">
          <div className="form-control">
            <button className="btn btn-primary" disabled>
              <RotateCcwIcon />
              Reset password
            </button>
          </div>
          <div className="form-control">
            <button className="btn btn-primary" disabled={loading}>
              <LogInIcon />
              Sign in
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
