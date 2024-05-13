import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to salt and hash password
        //const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if user exists
        user = await getUserFromDb(credentials.email, credentials.password);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // return user object with the their profile data
        return user;
      },
    }),
  ],
});

// username: 'johnny_appleseed',
// password: 'test123',
// request_token: '1531f1a558c8357ce8990cf887ff196e8f5402ec'


// create Request Token
// {
//     "success": true,
//     "expires_at": "2024-05-13 20:06:35 UTC",
//     "request_token": "f4661c29ef27e27a1d0e448c98ad570956bb038b"
//   }
