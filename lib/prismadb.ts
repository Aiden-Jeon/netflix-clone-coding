import { PrismaClient } from "@prisma/client";

// 재시작할 때 마다 prisma client 를 새로 생성하는 것을 방지하기 위한 트릭
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
