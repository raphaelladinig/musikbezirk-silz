import db from "@/db/drizzle";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import Post from "@/components/Post";

export default async function PostContainer(props: { page_id: number }) {
  const postsData = await db
    .select({ id: posts.id, title: posts.title })
    .from(posts)
    .where(eq(posts.page_id, props.page_id));

  return (
    <div>
      {postsData.map((post, index) => (
        <Post key={index} post_id={post.id} title={post.title} />
      ))}
    </div>
  );
}
