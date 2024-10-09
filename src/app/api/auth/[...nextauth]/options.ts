import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth"; // Import NextAuthOptions
import { PrismaAdapter } from "@next-auth/prisma-adapter"; // Import PrismaAdapter
import prisma from "@/lib/prisma";

export const options: NextAuthOptions = {
  // Specify type for options
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;
        const user = {
          id: "1",
          name: "John Doe",
          email: "johndoe@gmail.com",
          password: "password",
        };

        if (email === user.email && password === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Ensure this is correctly typed
  },
};
