import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { Redis } from "@upstash/redis";
import "dotenv/config";

export default NextAuth({
  adapter: UpstashRedisAdapter(
    new Redis({
      url: 'https://eu2-evident-terrier-30975.upstash.io',
      token: process.env.UPSTASH_REDIS_TOKEN,
    }),
     { baseKeyPrefix: "app-specific-prefix-1:" }
  ),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
     }),
  ],
    secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "dark",
  },
 
}
);
