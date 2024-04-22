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
            <Navbar />
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
