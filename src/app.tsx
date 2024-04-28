import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./app.css";
import { MetaProvider, Title } from "@solidjs/meta";

export default function App() {
  return (
    <>
      <MetaProvider>
        <Title>Musikbezirk Silz</Title>
      </MetaProvider>
      <Router
        root={(props) => (
          <Suspense>
            <Navbar
              dropdowns={[
                {
                  id: "test",
                  title: "test",
                  subMenus: ["events", "ueber-uns", "jugend"],
                },
                {
                  id: "test2",
                  title: "test2",
                  subMenus: ["events", "ueber-uns", "jugend"],
                },
              ]}
            />
            {props.children}
            <Footer />
          </Suspense>
        )}
      >
        <FileRoutes />
      </Router>
    </>
  );
}
