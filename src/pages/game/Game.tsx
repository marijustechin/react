import { SubmitHandler, useForm } from "react-hook-form";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { PageTitle } from "../../components/shared/PageTitle";

type FormInput = {
  name: string;
};

const gameContext = createContext<number | undefined>(0);

export const GamePage = () => {
  const [gamers, setGamers] = useState<string[]>([]);
  const [duplicateError, setDuplicateError] = useState("");
  const [step, setStep] = useState(1);
  const [winner, setWinner] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const handleFormSubmit: SubmitHandler<FormInput> = (data) => {
    gamers.includes(data.name)
      ? setDuplicateError(`${data.name} jau žaidžia`)
      : setGamers([...gamers, data.name]);
    reset();
  };

  const deleteGamer = (name: string) => {
    setGamers(gamers.filter((gamer) => gamer !== name));
  };

  const nextStep = () => {
    if (gamers.length < 2) {
      toast.error("Žaidime turi dalyvauti bent du žaidėjai");
      return;
    }
    setRandomWinner();
    setStep(2);
  };

  const startOver = () => {
    setGamers([]);
    setStep(1);
  };

  const setRandomWinner = () => {
    const randGamer = Math.floor(Math.random() * gamers.length);
    setWinner(gamers[randGamer]);
  };

  return (
    <gameContext.Provider value={step}>
      <main>
        <PageTitle title="Kas apmokės sąskaitą?" />
        <div className="max-w-sm mx-auto p-3">
          <h2 className="uppercase text-center font-semibold text-xl underline mx-4">
            Tipo žaidimas
          </h2>
          {step === 1 && (
            <>
              <form
                className="border-b border-slate-500"
                onSubmit={handleSubmit(handleFormSubmit)}
              >
                <div className="py-3">
                  <input
                    className="w-full rounded-md"
                    placeholder="Pridėkite žaidėjo vardą"
                    id="name"
                    type="text"
                    autoComplete="on"
                    {...register("name", {
                      onChange: () => setDuplicateError(""),
                      required: "Privalote įvesti žaidėjo vardą",
                    })}
                  />
                  {errors.name && (
                    <p role="alert" className="text-sm text-rose-500">
                      {errors.name.message}
                    </p>
                  )}
                  {duplicateError && (
                    <p role="alert" className="text-sm text-rose-500">
                      {duplicateError}
                    </p>
                  )}
                  <button
                    className="bg-slate-500 hover:bg-slate-600 my-2 px-3 py-1 text-slate-50 rounded-md"
                    type="submit"
                  >
                    Pridėti žaidėją
                  </button>
                </div>
              </form>
              <div className="my-3">
                {gamers.map((gamer, idx) => (
                  <div
                    onClick={() => deleteGamer(gamer)}
                    className="w-full flex justify-between cursor-pointer border-l border-r border-b first:border-t first:rounded-t-md last:rounded-b-md border-slate-500 p-1 "
                    key={gamer + idx}
                  >
                    <div>{gamer}</div>
                    <div>❌</div>
                  </div>
                ))}
              </div>
              <div className="text-right">
                <button
                  onClick={nextStep}
                  className="bg-slate-500 hover:bg-slate-600 my-2 px-3 py-1 text-slate-50 rounded-md"
                >
                  Išrinkti laimėtoją
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <div>
              <p className="text-slate-500 font-semibold text-lg mt-3">
                Sąskaitą apmoka:
              </p>
              <h2 className="text-3xl my-4">{winner}</h2>
              <div className="flex gap-2 items-center justify-center">
                <button
                  onClick={setRandomWinner}
                  className="bg-slate-500 hover:bg-slate-600 my-2 px-3 py-1 text-slate-50 rounded-md"
                >
                  Išrinkti kitą žaidėją
                </button>
                <button
                  onClick={startOver}
                  className="bg-slate-500 hover:bg-slate-600 my-2 px-3 py-1 text-slate-50 rounded-md"
                >
                  Iš naujo
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </gameContext.Provider>
  );
};
