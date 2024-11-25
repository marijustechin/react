import { useContext } from "react";
import { GameContext } from "./GameContext";

export const Step2 = () => {
  const startOver = () => {
    const step = useContext(GameContext);
    console.log(step);
  };
  return (
    <div>
      <p className="text-slate-500 font-semibold text-lg mt-3">
        Sąskaitą apmoka:
      </p>
      <h2 className="text-3xl my-4">Random name</h2>
      <div className="flex gap-2 items-center justify-center">
        <button className="bg-slate-500 hover:bg-slate-600 my-2 px-3 py-1 text-slate-50 rounded-md">
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
  );
};
