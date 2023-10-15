import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismadb from "@/lib/prismadb";

// api controller 에서 serverAuth 를 사용할 거다.
const serverAuth = async (req: NextApiRequest) => {
    // req 에는 jwt token 을 갖고 있음
    const session = await getSession({ req });

    // session 은 필요한 정보가 다 없음 그래서 다른 정보를 가져올 필요가 있음
    if (!session?.user?.email) {
        throw new Error("Not signed in");
    }
    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        },
    });
    // 만약 가입한 유저가 없다면
    if (!currentUser) {
        throw new Error("Not signed in");
    }

    return { currentUser };
};

export default serverAuth;
