import logo from "../assets/logo.svg";
import { Input, InputIcon, InputText } from "../components/Input";
import { Button } from "../components/Button";

import { Link } from "react-router-dom";

import { RiMailLine, RiUser3Line } from "react-icons/ri";

export function SignUp() {
  return (
    <div className="w-screen h-screen bg-zinc-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <img src={logo} alt="" />
        <p className="mt-1 text-lg text-zinc-400">
          Crie uma conta para acessar a plataforma
        </p>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-6 gap-4">
        <label htmlFor="password" className="flex flex-col gap-2">
          <p>Insira seu nome completo</p>

          <Input>
            <InputIcon>
              <RiUser3Line size={22} />
            </InputIcon>
            <InputText id="name" placeholder="John Doe Example" />
          </Input>
        </label>

        <label htmlFor="email" className="flex flex-col gap-2">
          <p>Insira seu e-mail</p>

          <Input>
            <InputIcon>
              <RiMailLine size={22} />
            </InputIcon>
            <InputText id="email" placeholder="johndoe@example.com.br" />
          </Input>
        </label>

        <Button type="submit">Cadastrar</Button>
      </form>
      <footer className="flex items-center gap-2 mt-6 text-">
        <Link
          to={"/"}
          className="text-gray-400 underline hover:text-gray-200 transition-colors"
        >
          Já tem uma conta? Acesse agora!
        </Link>
      </footer>
    </div>
  );
}
