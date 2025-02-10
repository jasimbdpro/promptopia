import { connectToBd } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            //serverless  -> Lambda function >dynamodb
            await connectToBd();
            //check user is exit

            //create new user4
            return true;
        } catch (error) {
            console.log(error)
            return false;

        }
    }
})

export { handler as GET, handler as POST }