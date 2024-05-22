import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres(process.env.DB_URL || "");
const db = drizzle(queryClient);

console.log("openend db connection");

export default db;
