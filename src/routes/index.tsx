import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Template_1 from "../components/template_1";
import { MetaProvider, Title } from "@solidjs/meta";

export default function Index() {
  return (
    <>
      <MetaProvider>
        <Title>Musikbezirk Silz</Title>
      </MetaProvider>
      <Navbar />
      <Template_1 />
      <Template_1 />
      <Template_1 />
      <Template_1 />
      <Template_1 />
      <Footer />
    </>
  );
}
