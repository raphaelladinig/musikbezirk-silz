import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const template_1 = sqliteTable("template_1", {
  id: integer("id").primaryKey(),
  heading: text("heading").notNull(),
  body: text("body").notNull(),
});
