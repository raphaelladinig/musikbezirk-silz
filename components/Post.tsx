import db from "@/db/drizzle";
import { postContents } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function Post(props: {
  title: string;
  post_id: number;
  creation_date: Date;
}) {
  const postContentsData = await db
    .select()
    .from(postContents)
    .where(eq(postContents.post_id, props.post_id))
    .orderBy(postContents.position);

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
