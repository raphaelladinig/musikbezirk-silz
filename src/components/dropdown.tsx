import { createSignal } from "solid-js";

export default function Dropdown(props: { title: string; subMenus: string[] }) {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggle = () => setIsOpen(!isOpen());

  return (
    <div>
      <button
        onClick={toggle}
        class="align-middle font-bold border-gray-300 border-2 px-2 hover:bg-gray-50"
      >
        {props.title}
      </button>
      {isOpen() && (
        <ul class="absolute z-10 bg-gray-200 p-2 m-1 border border-white">
          {props.subMenus.map((subMenu) => (
            <li class="block text-start">
              <a href={subMenu}>{subMenu}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
