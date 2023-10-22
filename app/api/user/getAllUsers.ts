import prisma from "@/lib/prisma"

export const getAllUsers =async (res: Response) => {
  const users = await prisma.users.findMany()
  return res.json();
}
