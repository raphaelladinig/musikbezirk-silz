import { createResource } from "solid-js";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { MetaProvider, Title } from "@solidjs/meta";
import { db, schema } from "../db/index";
import Template_1 from "../components/template_1";

type Post = {
  id: number;
  heading: string | null;
  body: string | null;
};

export default function Index() {
  const [posts, setPosts] = createResource(async () => {
    return (await db.select().from(schema.template_1)) as Post[];
  });

  return (
    <>
      <MetaProvider>
        <Title>Musikbezirk Silz</Title>
      </MetaProvider>
      <Navbar />
      <div>
        {posts() ? (
          posts().map((post) => (
            <Template_1 heading={post.heading} body={post.body} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
}
