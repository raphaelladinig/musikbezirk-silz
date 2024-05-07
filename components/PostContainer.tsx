import db from "@/db/drizzle";
import * as Schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { Template1 } from "./Template1";

export default async function PostContainer(props: { pageId: number }) {
  const posts = await db
    .select()
    .from(Schema.posts)
    .fullJoin(Schema.templates, eq(Schema.posts.template, Schema.templates.id))
    .fullJoin(
      Schema.template1,
      eq(Schema.templates.template1_id, Schema.template1.id),
    )
    .where(eq(Schema.posts.pageId, props.pageId))
    .execute();

  return (
    <div>
      {posts.map((post) => (
        <Template1
          key={post.posts?.id}
          title={post.template1?.title}
          content={post.template1?.content}
        />
      ))}
    </div>
  );
}
