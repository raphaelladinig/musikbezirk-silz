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

await db.insert(Schema.posts).values({
  pageId: 1,
  title: "Test",
});

await db.insert(Schema.postContents).values({
  post_id: 1,
  type: "text",
  position: 1,
  content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
});

exit(0);
