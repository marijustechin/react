import { useState } from "react";
import { RegisterForm } from "../components/auth/RegisterForm";
import { LoginForm } from "../components/auth/LoginForm";
import { PageTitle } from "../components/shared/PageTitle";

export default function LoginRegisterPage() {
  const [isNewUser, setNewUser] = useState(false);

  const toggleUser = () => {
    setNewUser(!isNewUser);
  };

  return (
    <main className="">
      <PageTitle title="Prisijungimas / Registracija" />

      <div className="max-w-sm mx-auto flex flex-col gap-3 justify-center items-center my-5">
        <div>{isNewUser ? <RegisterForm /> : <LoginForm />}</div>
        <div
          onClick={toggleUser}
          className="font-semibold cursor-pointer underline"
        >
          {isNewUser
            ? "Ne pirmas kartas? Prašome prisijungti"
            : "Neturite paskyros? Prašome užsiregistruoti"}
        </div>
      </div>
    </main>
  );
}
