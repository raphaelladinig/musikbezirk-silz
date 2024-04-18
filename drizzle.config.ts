import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  driver: "better-sqlite", // bun:sqlite not yet supported
  dbCredentials: {
    url: "./mbs.db",
  },
} satisfies Config;
