import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    idToken?: string;
    error?: "RefreshTokenError";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string;
    expires_at?: number;
    refresh_token?: string;
    error?: "RefreshTokenError";
  }
}
