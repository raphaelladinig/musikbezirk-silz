import { pgTable, integer, text, serial } from "drizzle-orm/pg-core";

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  href: text("href").notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  page_id: integer("page_id").references(() => pages.id),
  title: text("title").notNull(),
});

export const post_contents = pgTable("post_contents", {
  id: serial("id").primaryKey(),
  post_id: integer("post_id").references(() => posts.id),
  type: text("type").notNull(),
  position: integer("position").notNull(),
  content: text("content").notNull(),
});
