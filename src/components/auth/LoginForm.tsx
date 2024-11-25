import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { LoginSchema } from "./Schemas";
import { FormWrapper } from "./FormWrapper";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitForm = () => {
    console.log("submit");
  };

  return (
    <FormWrapper title="Prisijungti">
      <form onSubmit={form.handleSubmit(submitForm)}>
        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="email">El. paštas</label>
          {form.formState.errors?.email && (
            <span className="text-rose-500">
              {form.formState.errors.email.message}
            </span>
          )}
          <input
            className="rounded-md focus:border-green-600"
            type="email"
            id="email"
            autoComplete="on"
            placeholder="El. pašto adresas"
            {...form.register("email")}
          />
        </div>
        <div className="flex flex-col gap-1 py-2">
          <div className="flex gap-2">
            <label htmlFor="password">Slaptažodis</label>
            {form.formState.errors?.password && (
              <span className="text-rose-500">
                {form.formState.errors.password.message}
              </span>
            )}
          </div>
          <input
            className="rounded-md"
            type="password"
            id="password"
            autoComplete="off"
            placeholder="******"
            {...form.register("password")}
          />
        </div>
        <button
          className="w-full bg-slate-500 text-slate-50 rounded-md py-2 my-2 hover:bg-slate-600"
          type="submit"
        >
          Prisijungti
        </button>
        <div className="w-full text-center pt-2">
          <Link className="text-sm text-center underline" to={"#"}>
            Pamiršote slaptažodį?
          </Link>
        </div>
      </form>
    </FormWrapper>
  );
};
