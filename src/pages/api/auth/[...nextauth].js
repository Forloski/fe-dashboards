import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { serverHttp } from "services/http";
import requestIp from "request-ip";

export default async function auth(req, res) {
  const ip = requestIp.getClientIp(req) || "ipError";

  return await NextAuth(req, res, {
    providers: [
      CredentialProvider({
        name: "credentials",
        credentials: {
          username: {
            type: "username",
          },
          password: {
            label: "password",
            type: "password",
          },
        },
        authorize: async (credentials) => {
          const { username, password } = credentials;

          try {
            const { data } = await serverHttp.post(
              "/authentication/login",
              {
                username,
                password,
              },
              { headers: { "x-real-ip": ip } }
            );

            return data;
          } catch (e) {
            return null;
          }
        },
      }),
    ],
    callbacks: {
      jwt: async ({ token, user }) => {
        const accessToken = user ? user.accessToken : token.accessToken;
        const refreshToken = user ? user.refreshToken : token.refreshToken;

        if (user) {
          token.user = { id: user.id, username: user.username };
          token.accessToken = accessToken;
          token.refreshToken = refreshToken;
        }

        const accessTokenRemainingMinutes = (accessToken.exp - accessToken.iat) / 60;

        if (accessTokenRemainingMinutes < 10.1) {
          const { data } = await serverHttp.post("/authentication/refreshTokens", { refreshToken });
          token.accessToken = data.accessToken;
          token.refreshToken = data.refreshToken;
        }

        return token;
      },
      session: ({ session, token }) => {
        if (token) {
          session.user = token.user;
        }

        return session;
      },
    },
    secret: "testSecret",
    jwt: {
      secret: "testSecret",
    },
  });
}
