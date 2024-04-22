export type template1 = {
  id: number;
  heading: string;
  body: string;
};

export function Template1(props: template1) {
  return (
    <div class="m-4 p-2 bg-gray-200">
      <h1 class="text-red-700 underline">{props.heading}</h1>
      <p>{props.body}</p>
      <br />
    </div>
  );
}
