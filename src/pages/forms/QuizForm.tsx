import { SubmitHandler, useForm } from "react-hook-form";

type FormInputsType = {
  age: number;
  licenseNo: string;
};

export const QuizFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputsType>();

  const onSubmit: SubmitHandler<FormInputsType> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="border border-slate-600 p-2 rounded-lg flex flex-col gap-2">
          <legend className="px-2 uppercase text-xl font-semibold">
            Apklausa
          </legend>
          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-3 justify-end items-center">
              <label
                className="col-span-4 font-semibold text-right"
                htmlFor="age"
              >
                Jūsų amžius
              </label>
              <input
                className="rounded-md w-full col-span-8"
                type="number"
                id="age"
                {...register("age", {
                  required: "Prašome nurodyti savo amžių",
                })}
              />
            </div>
            {errors.age && (
              <span className="text-sm text-rose-500">
                {errors.age.message}
              </span>
            )}
          </div>
          <button className="rounded-md py-2 px-3 bg-slate-500 hover:bg-slate-600 text-slate-50">
            Pateikti
          </button>
        </fieldset>
      </form>
    </div>
  );
};
