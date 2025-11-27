import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        // Replace with your logic
        if (credentials.email === "test@gmail.com" && credentials.password === "123456") {
          return { id: 1, name: "Shawon", email: "test@gmail.com" }
        }
        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
