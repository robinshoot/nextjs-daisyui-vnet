import prisma from "@/lib/prisma"

const getAllUsers =async (res: Response) => {
  const users = await prisma.users.findMany()
  return res.json();
}

export default getAllUsers
