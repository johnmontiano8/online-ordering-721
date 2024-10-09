import NextAuth from "next-auth";
import { options } from "./options"; // Adjust the path if necessary

const handler = NextAuth(options);

export { handler as GET, handler as POST };
