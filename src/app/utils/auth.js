// import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";

export const authOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
        // GithubProvider({
        //     clientId: process.env.AUTH_GITHUB_ID,
        //     clientSecret: process.env.AUTH_GITHUB_SECRET,
        // }),
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
