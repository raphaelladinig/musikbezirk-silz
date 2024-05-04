import db from "@/db/drizzle";
import { Template1 } from "./template1";
import { template1 } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function TemplateRenderer(props: { pageId: number }) {
  const articles = await db
    .select()
    .from(template1)
    .where(eq(template1.pageId, props.pageId));

  return (
    <div>
      {articles.map((article) => (
        <Template1
          key={article.id}
          title={article.title}
          content={article.content}
        />
      ))}
    </div>
  );
}
