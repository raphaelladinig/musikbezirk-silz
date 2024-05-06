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

await db.insert(Schema.template1).values({
  pageId: 1,
  title: "Bezirksmusikfest 2024",
  content:
    "Das Bezirksmusikfest findet heuer vom 26. bis zum 28. Juli in Sölden statt.",
});

await db.insert(Schema.template2).values({
  pageId: 1,
  title: "Test",
  content:
    "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  imgs: ["img1.jpg", "img2.jpg", "img3.jpg"],
});

exit(0);
