import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";

const sqlite = new Database("mbs.db");
const db = drizzle(sqlite);

await db.insert(schema.template_1).values({
  heading: "Hello",
  body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
});

const result = await db.select().from(schema.template_1);
console.log(result);
