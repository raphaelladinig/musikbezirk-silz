"use server";

import { eq } from "drizzle-orm";
import db from "./drizzle";
import { pages, post_contents, posts } from "./schema";

type post = typeof posts.$inferInsert;
type post_content = typeof post_contents.$inferInsert;

export async function insertPost(post: post) {
  await db.insert(posts).values(post);
}

export async function insertPostContents(post_content: post_content) {
  await db.insert(post_contents).values(post_content);
}

export async function fetchPages() {
  return await db.select({ title: pages.title, id: pages.id }).from(pages);
}

export async function fetchPostContents(post_id: number) {
  return await db
    .select({ type: post_contents.type, content: post_contents.content })
    .from(post_contents)
    .where(eq(post_contents.post_id, post_id))
    .orderBy(post_contents.position);
}

export async function fetchPosts(page_title: string) {
  return await db
    .select({ id: posts.id })
    .from(posts)
    .where(
      eq(
        posts.page_id,
        db
          .select({ id: pages.id })
          .from(pages)
          .where(eq(pages.title, page_title)),
      ),
    );
}
