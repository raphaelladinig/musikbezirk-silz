import { createResource } from "solid-js";
import { db, schema } from "~/db/index";
import { template1, Template1 } from "~/components/template-1";
import { template2, Template2 } from "~/components/template-2";

export default function Index() {
  // const [data] = createResource(async () => {
  //   return (await db.select().from(schema.template_1)) as template1[];
  // });
  //
  // const template1Data = data();
  //
  return (
    <div>
      <Template1
        id="1"
        heading="test"
        body="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />
    </div>
  );
}
