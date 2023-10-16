import { NextPageContext } from "next";
import { getSession } from "next-auth/react"

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  // session 이 없으면 login 페이지로 보낸다.
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    }
  }
  // session 이 있으면 빈 props 를 반환한다.
  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
}
