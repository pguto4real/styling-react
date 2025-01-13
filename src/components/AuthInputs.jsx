import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="mx-auto w-full max-w-sm rounded bg-gradient-to-b from-stone-700 to-stone-800 p-8 shadow-md"
    >
      <div className="mb-6 flex flex-col gap-2">
        <Input
          label={"Email"}
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          invalid={emailNotValid}
        />

        <Input
          label={"Password"}
          type="email"
          invalid={passwordNotValid}
          // className={emailNotValid ? "invalid" : undefined}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
      </div>
      <div className="flex justify-end gap-4">
        <Button classStyle="text-amber-400 hover:text-amber-500">
          Create a new account
        </Button>
        <Button
          onClick={handleLogin}
          classStyle="rounded bg-amber-400 px-4 py-2 font-semibold uppercase text-stone-900 hover:bg-amber-500"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
