export function Template1(props: {
  title: string | undefined;
  content: string | undefined;
}) {
  return (
    <div className="m-4 p-2 bg-gray-200">
      <h1 className="text-xl text-red-700 underline">{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
