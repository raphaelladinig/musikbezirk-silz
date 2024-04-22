import { createResource } from "solid-js";
import { db, schema } from "../db/index";
import { template1, Template1 } from "../components/template-1";

export default function Index() {
  const [data] = createResource(async () => {
    return (await db.select().from(schema.template_1)) as template1[];
  });

  const template1Data = data();

  return (
    <>
      <div>
        {template1Data ? (
          template1Data.map((data) => (
            <Template1 id={data.id} heading={data.heading} body={data.body} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
