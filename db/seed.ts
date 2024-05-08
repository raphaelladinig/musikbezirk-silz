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
  page_id: 1,
  title: "Test",
});
await db.insert(Schema.posts).values({
  page_id: 1,
  title: "Bezirksmusikfest 2024",
});

await db.insert(Schema.post_contents).values({
  post_id: 1,
  type: "text",
  position: 1,
  content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
});
await db.insert(Schema.post_contents).values({
  post_id: 1,
  type: "text",
  position: 2,
  content: "/imgs/example.jpg",
});
await db.insert(Schema.post_contents).values({
  post_id: 2,
  type: "text",
  position: 1,
  content: "Das Bezirksmusikfest findet heuer vom 26. bis zum 28. Juli in Sölden statt. ",
});

exit(0);
