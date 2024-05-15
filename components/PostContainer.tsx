import db from "@/db/drizzle";
import { pages, posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import Post from "@/components/Post";

export default async function PostContainer(props: { page_title: string }) {
  const posts_data = await db
    .select({ id: posts.id })
    .from(posts)
    .where(eq(posts.page_id, db.select({ id: pages.id }).from(pages).where(eq(pages.title, props.page_title))));

  return (
    <div>
      {posts_data.map((post, index) => (
        <Post key={index} post_id={post.id} />
      ))}
    </div>
  );
}
