import { useContext } from "react";
import { HomeContext } from "../pages/Home";

export const HomeChildTwo = () => {
  const data = useContext(HomeContext);

  return (
    <div className="max-w-md mx-auto border border-slate-500 my-2 p-2 rounded-md">
      <h2 className="text-center text-2xl">Komponentas vaikas 2</h2>
      <div className="flex gap-3 my-2 p-1">
        <input
          className="rounded-md"
          id="text"
          type="text"
          //   onChange={(e) => setText(e.target.value)}
          onBlur={(e) => (e.target.value = "")}
        />
        <button
          //   onClick={incNumber}
          className="py-1 px-4 rounded-md bg-slate-400 font-semibold text-2xl text-slate-50 hover:bg-slate-500"
        >
          +
        </button>
        <button
          //   onClick={decNumber}
          className="py-1 px-4 rounded-md bg-slate-400 font-semibold text-2xl text-slate-50 hover:bg-slate-500"
        >
          -
        </button>
      </div>
      <p>
        Teksas: <span className="font-semibold text-lg">{data.text}</span>
      </p>
      <p>
        Skaičius: <span className="font-semibold text-lg">{data.number}</span>
      </p>
    </div>
  );
};
