import Dropdow from "./dropdown";

export default function Navbar() {
  return (
    <nav class="flex items-center justify-between w-full border-b p-2 text-xl sticky top-0 bg-white">
      <a href="/" class="text-2xl font-bold">
        Musikbezirk Silz
      </a>
      <div>
        <Dropdow title="test" subMenus={["afs", "events"]} />
      </div>
    </nav>
  );
}
