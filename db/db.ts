import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres("postgres://postgres@127.0.0.1:5432/mbs");
const db = drizzle(queryClient);

export default db;
