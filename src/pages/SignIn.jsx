import logo from "../assets/logo.svg";
import { Input, InputIcon, InputText } from "../components/Input";
import { Button } from "../components/Button";

import { RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <div className="w-screen h-screen bg-zinc-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <img src={logo} alt="" />
        <p className="mt-1 text-lg text-zinc-400">
          Faça seu login para acessar a plataforma
        </p>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-6 gap-4">
        <label htmlFor="email" className="flex flex-col gap-2">
          <p>Insira seu e-mail</p>

          <Input>
            <InputIcon>
              <RiMailLine size={22} />
            </InputIcon>
            <InputText id="email" placeholder="johndoe@example.com.br" />
          </Input>
        </label>

        <Button type="submit">Entrar</Button>
      </form>

      <footer className="flex flex-col items-center gap-2 mt-6 text-">
        <Link
          to={"/signup"}
          className="text-gray-400 underline hover:text-gray-200 transition-colors"
        >
          Não possui conta? Crie uma agora!
        </Link>
      </footer>
    </div>
  );
}
