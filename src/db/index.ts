import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";

const sqlite = new Database("mbs.db");
const db = drizzle(sqlite);

export { db, schema };
