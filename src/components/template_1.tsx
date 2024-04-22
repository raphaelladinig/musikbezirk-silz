export default function Template_1(props) {
  return (
    <div class="m-4 p-2 bg-gray-200">
      <h1 class="text-red-700 underline">{props.heading}</h1>
      <p>{props.body}</p>
      <br />
    </div>
  );
}
