import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === "login" ? "register" : "login")
  }, []);
  return (
    // 배경 집어넣는 부분
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        {/* default 가 블랙인데 커지면 배경에 투명도를 줘서 나오게 만드는 방법 */}
        <nav className="px-12 py-5">
          {/* 로고 집어 넣는 부분 */}
          <img src="/images/logo.png" alt=" Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          {/* login 관련 모달들 */}
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {/* Sign in */}
              {variant === "login" ? "Sing In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (

                <Input
                  label="Username"
                  onChange={(e) => { setName(e.target.value) }}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(e) => { setEmail(e.target.value) }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e) => { setPassword(e.target.value) }}
                id="password"
                type="password"
                value={password}
              />
              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                {/* Login */}
                {variant === "login" ? "Login" : "Sing up"}
              </button>
              <p className="text-neutral-500 mt-12">
                {variant === "login" ? "First time using Netflix?" : "Already have an account?"}
                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                  {variant === "login" ? "Create an account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
