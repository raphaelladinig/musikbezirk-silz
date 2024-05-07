import { sql } from "drizzle-orm";
import { pgTable, integer, text, timestamp, serial } from "drizzle-orm/pg-core";

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  href: text("href").notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  pageId: integer("page_id").references(() => pages.id),
  template: integer("template").references(() => templates.id),
  creationDate: timestamp("creation_date").default(sql`(CURRENT_TIMESTAMP)`),
});

export const templates = pgTable("templates", {
  id: serial("id").primaryKey(),
  template1_id: integer("template1_id").references(() => template1.id),
});

export const template1 = pgTable("template1", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
});
