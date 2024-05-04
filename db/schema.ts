import { sql } from "drizzle-orm";
import { pgTable, integer, text, timestamp, serial } from "drizzle-orm/pg-core";

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  href: text("href").notNull(),
});

export const template1 = pgTable("template1", {
  id: serial("id").primaryKey(),
  pageId: integer("page_id").references(() => pages.id),
  title: text("title").notNull(),
  content: text("content").notNull(),
  creationDate: timestamp("creation_date").default(sql`(CURRENT_TIMESTAMP)`),
});
