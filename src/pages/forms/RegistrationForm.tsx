import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValuesType = {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValuesType>();

  const onSubmit: SubmitHandler<FormValuesType> = (data) => {
    console.log(data);
    reset();
  };

  const password = useRef({});

  password.current = watch("password", "");

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="border border-slate-600 p-2 rounded-lg flex flex-col gap-2">
          <div className="flex items-center justify-center h-10 text-center w-full text-emerald-600 font-semibold">
            {isSubmitSuccessful ? (
              <p>
                Registracija sėkminga. Patikrinkite savo el. paštą dėl tolesnių
                instrukcijų.
              </p>
            ) : (
              <p className="text-slate-600">
                Slaptažodį turi sudaryti ne mažiau kaip 8 simboliai, bent vienas
                skaičius ir bent vienas specialusis simbolis.
              </p>
            )}
          </div>
          <legend className="px-2 uppercase text-xl font-semibold">
            Registracija
          </legend>
          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-2 items-center justify-end">
              <label
                className="col-span-4 font-semibold text-right"
                htmlFor="fullName"
              >
                Vardas
              </label>
              <input
                className="col-span-8 rounded-md w-full"
                id="fullName"
                type="text"
                autoComplete="on"
                {...register("fullName", {
                  required: "Pamiršote įrašyti savo vardą",
                })}
              />
            </div>
            {errors.fullName && (
              <span className="text-sm text-rose-500 text-right">
                {errors.fullName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-2 items-center justify-end">
              <label
                className="col-span-4 font-semibold text-right"
                htmlFor="email"
              >
                El. paštas
              </label>
              <input
                className="rounded-md w-full col-span-8"
                id="email"
                type="email"
                autoComplete="on"
                {...register("email", {
                  required: "Pamiršote įrašyti el. pašto adresą",
                })}
              />
            </div>
            {errors.email && (
              <span className="text-sm text-rose-500 text-right">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-2 items-center justify-end">
              <label
                className="font-semibold text-right col-span-4"
                htmlFor="password"
              >
                Slaptažodis
              </label>
              <input
                className="rounded-md w-full col-span-8"
                id="password"
                type="password"
                autoComplete="on"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message:
                      "Slaptažodį turi sudaryti ne mažiau kaip 8 simboliai",
                  },
                })}
              />
            </div>
            {errors.password && (
              <span className="text-sm text-rose-500 text-right">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-2 items-center justify-end">
              <label
                className="font-semibold text-right col-span-4"
                htmlFor="repeatPassword"
              >
                Pakartoti slaptažodį
              </label>
              <input
                className="rounded-md w-full col-span-8"
                id="repeatPassword"
                type="password"
                autoComplete="on"
                {...register("repeatPassword", {
                  required: "Pamiršote pakartoti slaptažodį",
                  validate: (value) =>
                    value === password.current || "Slaptažodžiai nesutampa",
                })}
              />
            </div>
            {errors.repeatPassword && (
              <span className="text-sm text-rose-500 text-right">
                {errors.repeatPassword.message}
              </span>
            )}
          </div>
          <button
            className="rounded-md bg-slate-500 hover:bg-slate-600 text-slate-50 py-2"
            type="submit"
          >
            Užsiregistruoti
          </button>
        </fieldset>
      </form>
    </div>
  );
};
