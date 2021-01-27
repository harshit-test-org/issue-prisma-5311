import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const data = await prisma.user.findMany({
    where: {
      id: {
        mode: "insensitive",
        contains: "something",
      },
    },
  });
  console.log(data);
  prisma.$disconnect();
}

main();
