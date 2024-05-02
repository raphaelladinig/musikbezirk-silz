import { Template1 } from "@/components/template1";
import { Template2 } from "@/components/template2";

export default function Home() {
  return (
    <div>
      <Template1
        id={1}
        heading="Hello"
        body="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />
      <Template2
        id={2}
        heading="Hello"
        body="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        image={[" ", " ", " "]}
      />
    </div>
  );
}
