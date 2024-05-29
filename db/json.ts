import db from "@/db/drizzle";
import * as Schema from "@/db/schema";

export async function importDataFromJsonFile(filePath: string) {
  try {
    const data = await Bun.file(filePath).json();
    const { pages, posts, postContents } = data;

    await db.insert(Schema.pages).values(pages);
    await db.insert(Schema.posts).values(posts);
    await db.insert(Schema.post_contents).values(postContents);

    console.log("Data imported from JSON file successfully.");
  } catch (err) {
    console.error("Error importing data from JSON file:", err);
  }
}

export async function exportDataToJsonFile(filePath: string) {
  const pages = await db.select().from(Schema.pages);
  const posts = await db.select().from(Schema.posts);
  const postContents = await db.select().from(Schema.post_contents);

  const data = {
    pages,
    posts,
    postContents,
  };

  try {
    await Bun.write(filePath, JSON.stringify(data, null, 2));
    console.log("Data exported to JSON file successfully.");
  } catch (err) {
    console.error("Error exporting data to JSON file:", err);
  }
}
