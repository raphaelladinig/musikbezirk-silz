import { db, schema } from "./index";

await db.insert(schema.template_1).values([
  { heading: "Hello", body: "World" },
  { heading: "Goodbye", body: "World" },
  { heading: "Hello", body: "Universe" },
]);
