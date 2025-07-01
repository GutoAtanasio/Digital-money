import { EnvelopeSimple, LockSimple } from "phosphor-react";
import ImageLogin from "../assets/secure-login-animate.svg"
import { useNavigate } from "react-router";

function LoginPage() {
  let navigate = useNavigate();

  function handleLogin () {
    navigate("/dashboard");
  }
  
  return (
    <div className="bg-blue-500 w-full h-screen flex">
      <div className="bg-linear-65 from-purple-500 to-pink-500 w-1/2 h-full items-center flex justify-center flex-col text-white" name="esquerda">
        <img src={ImageLogin} alt="Imagem de login" className="w-[350px]" />
        <h1 className="text-3xl font-bold mb-4">Secure Login Portal</h1>

        <p className="text-center">Access your dashboard securely with our protected login <br /> system. Your data is encrypted and secure.</p>
      </div>

      <div className="bg-white w-1/2 h-full text-center flex justify-center items-center flex-col gap-4" name="direita">
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-gray-500">Enter your details to sign in to your account</p>

        <form className="w-full flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col text-left w-3/5">
            <label htmlFor="email">Email</label>
            <label htmlFor="email" className="border-gray-300 border-2 px-4 py-1 rounded-md flex items-center gap-2 focus-within:border-blue-500">
              <EnvelopeSimple size={20} className="text-[#7F7F87]"/>
              <input type="email" name="email" id="email" className="outline-none w-full" placeholder="name@example.com" />
            </label>
          </div>
          <div className="flex flex-col text-left w-3/5">
            <label htmlFor="password">Password</label>
            <label htmlFor="password" className="border-gray-300 border-2 px-4 py-1 rounded-md flex items-center gap-2 focus-within:border-blue-500">
              <LockSimple size={20} className="text-[#7F7F87]" />
              <input type="email" name="password" id="password" className="outline-none w-full" placeholder="********" />
            </label>
          </div>
          <button className="bg-blue-700 w-3/5 text-white py-2 rounded-md cursor-pointer hover:bg-blue-800 hover:scale-105 transition-all" onClick={handleLogin}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
