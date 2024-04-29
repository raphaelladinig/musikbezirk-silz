import Carousel from "~/components/carousel";

export type template2 = {
  id: number;
  heading: string;
  body: string;
  images: string[];
};

export function Template2(props: template2) {
  return (
    <div class="m-4 p-2 bg-gray-200">
      <h1 class="text-xl text-red-700 underline">{props.heading}</h1>
      <p>{props.body}</p>
      <br />
      <Carousel images={props.images} />
    </div>
  );
}
