import * as Schema from "./schema";
import db from "./drizzle";
import { exit } from "process";

await db.insert(Schema.pages).values({ title: "Start", href: "/" });
await db.insert(Schema.pages).values({ title: "Events", href: "/events" });
await db
  .insert(Schema.pages)
  .values({ title: "Rückblick", href: "/rueckblick" });
await db.insert(Schema.pages).values({ title: "Jugend", href: "/jugend" });
await db.insert(Schema.pages).values({ title: "Über Uns", href: "/ueber-uns" });

exit(0);
