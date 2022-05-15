import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'my-project',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'jsmith@example.com',
        },
        password: { label: 'Password', type: 'password' },
        tenantKey: {
          label: 'Tenant Key',
          type: 'text',
        },
      },
      async authorize(credentials, req) {
        if (
          credentials.email === 'test@test.com' &&
          credentials.password === "0987654321"
        ) {
          return {
            id: 2,
            name: 'pranay',
            email: 'pranay@gmail.com',
          }
        }
        return null
      },
      callbacks: {
        async jwt({ token, user }) {
          if (user) {
            return {
              id: 2,
              name: 'pranay',
              email: 'pranay@gmail.com',
            }
          }

          return token
        },

        async session({ session, token }) {
          if (token) {
            return {
              ...session,
              ...token,
            }
          }
        },
      },
    }),
    // ...add more providers here
  ],

  theme: {
    colorScheme: 'auto', // "auto" | "dark" | "light"
    brandColor: '', // Hex color code #33FF5D
    logo: '/logo.png', // Absolute URL to image
  },
})
