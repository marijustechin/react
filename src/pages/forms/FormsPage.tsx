import { useState } from "react";
import { PageTitle } from "../../components/shared/PageTitle";
import { RegistrationForm } from "./RegistrationForm";
import { QuizFrom } from "./QuizForm";

export default function FormsPage() {
  const [apklausa, setApklausa] = useState(false);

  return (
    <main>
      <PageTitle>Formos</PageTitle>
      <div className="max-w-md mx-auto flex gap-5 items-center justify-center p-5">
        <button
          onClick={() => setApklausa(!apklausa)}
          disabled={!apklausa}
          className={`${
            apklausa ? "bg-slate-500 hover:bg-slate-600" : "bg-slate-300"
          } px-3 py-2  text-slate-50 rounded-md`}
        >
          Registracija
        </button>
        <button
          onClick={() => setApklausa(!apklausa)}
          disabled={apklausa}
          className={`${
            !apklausa ? "bg-slate-500 hover:bg-slate-600" : "bg-slate-300"
          } px-3 py-2  text-slate-50 rounded-md`}
        >
          Apklausa
        </button>
      </div>
      {apklausa ? <QuizFrom /> : <RegistrationForm />}
    </main>
  );
}
