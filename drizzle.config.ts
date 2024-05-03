import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgres://postgres@127.0.0.1:5432/mbs",
  },
} satisfies Config;
