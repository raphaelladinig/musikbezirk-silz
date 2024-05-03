import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  connectionString: "postgres://postgres@127.0.0.1:5432/mbs",
});

await client.connect();
const db = drizzle(client);

export { db };
