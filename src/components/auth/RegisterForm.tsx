import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormWrapper } from "./FormWrapper";
import { RegisterSchema } from "./Schemas";

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const submitForm = () => {
    console.log("submit");
  };

  return (
    <FormWrapper title="Užsiregistruoti">
      <form onSubmit={form.handleSubmit(submitForm)}>
        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="name">Vardas</label>
          {form.formState.errors.name && (
            <span className="text-rose-500">
              {form.formState.errors.name.message}
            </span>
          )}
          <input
            className="rounded-md focus:border-green-600"
            type="text"
            id="name"
            autoComplete="on"
            placeholder="Jūsų vardas"
            {...form.register("name")}
          />
        </div>
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
          Užsiregistruoti
        </button>
      </form>
    </FormWrapper>
  );
};
