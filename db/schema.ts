import { sql } from "drizzle-orm";
import { pgTable, integer, text, timestamp, serial } from "drizzle-orm/pg-core";

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  href: text("href").notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  page_id: integer("page_id").references(() => pages.id),
  title: text("title").notNull(),
  creation_date: timestamp("creation_date").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});

export const postContents = pgTable("postContents", {
  id: serial("id").primaryKey(),
  post_id: integer("post_id").references(() => posts.id),
  type: text("type").notNull(),
  position: integer("position").notNull().unique(),
  content: text("content").notNull(),
});
