import loginWithGoogle from "@/services/loginWithGoogle";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      // Google requires "offline" access_type to provide a `refresh_token`
      authorization: { params: { access_type: "offline", prompt: "consent" } },
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        // First-time login, save the `access_token`, its expiry and the `refresh_token`
        return {
          ...token,
          idToken: account.id_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          refresh_token: account.refresh_token,
        };
      } else if (Date.now() < token.expires_at! * 1000) {
        // Subsequent logins, but the `access_token` is still valid
        return token;
      } else {
        // Subsequent logins, but the `access_token` has expired, try to refresh it
        if (!token.refresh_token) throw new TypeError("Missing refresh_token");

        try {
          // The `token_endpoint` can be found in the provider's documentation. Or if they support OIDC,
          // at their `/.well-known/openid-configuration` endpoint.
          // i.e. https://accounts.google.com/.well-known/openid-configuration
          const body = new URLSearchParams({
            client_id: process.env.GOOGLE_CLIENT_ID!,
            client_secret: process.env.GOOGLE_CLIENT_SECRET!,
            grant_type: "refresh_token",
            refresh_token: token.refresh_token!,
          });

          const response = await axios({
            url: "https://oauth2.googleapis.com/token",
            method: "POST",
            data: body,
          });

          const tokensOrError = await response.data;

          if (response.statusText !== "OK") throw tokensOrError;

          console.log("Token refresh successful");

          const newTokens = tokensOrError as {
            access_token: string;
            expires_in: number;
            refresh_token?: string;
            id_token: string;
          };

          token.access_token = newTokens.access_token;
          token.expires_at = Math.floor(
            Date.now() / 1000 + newTokens.expires_in
          );
          token.idToken = newTokens.id_token;

          // Some providers only issue refresh tokens once, so preserve if we did not get a new one
          if (newTokens.refresh_token)
            token.refresh_token = newTokens.refresh_token;
          return token;
        } catch (error) {
          console.error("Error refreshing access_token", error);
          // If we fail to refresh the token, return an error so we can handle it on the page
          token.error = "RefreshTokenError";
          return token;
        }
      }
    },
    async session({ session, token }) {
      const data = await loginWithGoogle(token.idToken as string);
      if (data) {
        session.idToken = token.idToken as string;
      }
      session.error = token.error;
      return session;
    },
  },
};
