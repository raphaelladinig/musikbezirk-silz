export type template2 = {
  id: number;
  heading: string;
  body: string;
  image: string[];
};

export function Template2(props: template2) {
  return (
    <div class="m-4 p-2 bg-gray-200">
      <h1 class="text-xl text-red-700 underline">{props.heading}</h1>
      <p>{props.body}</p>
      <div class="flex gap-2">
        {props.image.map((image) => (
          <img src={image} class="size-5" />
        ))}
      </div>
    </div>
  );
}
