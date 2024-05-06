import db from "@/db/drizzle";
import { Template1 } from "./template1";
import { Template2 } from "./template2";
import { template1, template2 } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function TemplateRenderer(props: { pageId: number }) {
  const template_1 = await db
    .select()
    .from(template1)
    .where(eq(template1.pageId, props.pageId));

  const template_2 = await db
    .select()
    .from(template2)
    .where(eq(template2.pageId, props.pageId));

  return (
    <div>
      {template_1.map((template_1) => (
        <Template1
          key={template_1.id}
          title={template_1.title}
          content={template_1.content}
        />
      ))}
      {template_2.map((template_2) => (
        <Template2
          key={template_2.id}
          title={template_2.title}
          content={template_2.content}
          images={template_2.imgs}
        />
      ))}
    </div>
  );
}
