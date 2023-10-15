import { useCallback, useState } from "react";
import axios from "axios";
import { getSession, signIn } from "next-auth/react";
import { NextPageContext } from 'next';
// import { useRouter } from "next/router";

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

import Input from "@/components/Input";

// redirect 사용하려면 추가해야함
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Auth = () => {
  // const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === "login" ? "register" : "login")
  }, []);

  // 로그인
  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrlL: "/profiles"
      })
      // // 로그인 성공 후 홈으로 푸쉬하기
      // router.push("/");
    } catch (error) {
      console.log(error)
    }
  }, [email, password]);

  // 회원 가입
  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email, name, password
      })
      // 회원 가입 후 login 으로 보내기
      login();
    } catch (error) {
      console.log(error)
    }

  }, [email, name, password, login]);  // 의존성 주입
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
              {variant === "login" ? "Sign In" : "Register"}
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
              <button onClick={variant === "login" ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                {/* Login */}
                {variant === "login" ? "Login" : "Sign up"}
              </button>
              {/* github and google login button */}
              <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                <div
                  onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                  className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition
                  ">
                  <FaGithub size={30} />
                </div>
                <div
                  onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                  className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition
                  ">
                  <FcGoogle size={30} />
                </div>
              </div>
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
