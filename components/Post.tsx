import db from "@/db/drizzle";
import { post_contents } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function Post(props: {
  title: string;
  post_id: number;
  creation_date: Date;
}) {
  const postContentsData = await db
    .select()
    .from(post_contents)
    .where(eq(post_contents.post_id, props.post_id))
    .orderBy(post_contents.position);

  return (
    <div className="m-4 p-2 bg-gray-200">
      <h1 className="text-xl text-red-700 underline">{props.title}</h1>
      {postContentsData.map((content, index) => (
        <div key={index}>{renderContent(content)}</div>
      ))}
    </div>
  );
}

function renderContent(content: { type: string; content: string }) {
  switch (content.type) {
    case "text":
      return <p>{content.content}</p>;
    case "image":
      return <img src={content.content} />;
    default:
      return null;
  }
}
