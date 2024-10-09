import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

interface UserInput {
  name: string;
  email: string;
  password: string;
}

export async function createUserWithAccount({
  name,
  email,
  password,
}: UserInput) {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        accounts: {
          create: {
            type: "credentials",
            provider: "email",
            providerAccountId: uuidv4(),
          },
        },
      },
      include: {
        accounts: true,
      },
    });

    return newUser; // Return the newly created user with the accounts
  } catch (error) {
    console.error("Error creating user with account: ", error);
    throw error;
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error("Error getting user by email: ", error);
    throw error;
  }
}
