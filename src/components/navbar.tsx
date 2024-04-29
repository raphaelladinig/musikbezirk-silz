import Dropdown from "~/components/dropdown";

export default function Navbar(props: {
  dropdowns: { id: string; title: string; subMenus: string[] }[];
}) {
  return (
    <nav class="flex items-center justify-between w-full border-b p-2 text-xl sticky top-0 bg-white">
      <div>
        <a href="/" class="text-2xl font-bold">
          Musikbezirk Silz
        </a>
        <p class="text-gray-400 text-xs italic">Es klingt Musik...</p>
      </div>
      {props.dropdowns.map((item) => (
        <div class="flex gap-2">
          <Dropdown id={item.id} title={item.title} subMenus={item.subMenus} />
        </div>
      ))}
    </nav>
  );
}
