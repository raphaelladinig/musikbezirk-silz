import Navbar from "../components/navbar";
import { MetaProvider, Title } from "@solidjs/meta";

export default function Index() {
  return (
    <>
      <MetaProvider>
        <Title>Musikbezirk Silz</Title>
      </MetaProvider>
      <Navbar />
    </>
  );
}
