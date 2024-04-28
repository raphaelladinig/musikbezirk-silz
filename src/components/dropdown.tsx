import { createEffect, createSignal, onCleanup } from "solid-js";

export default function Dropdown(props: {
  id: string;
  title: string;
  subMenus: string[];
}) {
  const [isOpen, setIsOpen] = createSignal(false);

  createEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById(props.id);
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen()) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    onCleanup(() => {
      document.removeEventListener("click", handleClickOutside);
    });
  });

  const toggle = () => setIsOpen(!isOpen());

  return (
    <div class="relative inline-block text-left">
      <div id={props.id}>
        <button
          onClick={toggle}
          type="button"
          class="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          aria-expanded={isOpen()}
          aria-haspopup="true"
        >
          {props.title}
          <svg
            class="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen() && (
        <div
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={props.id}
          tabindex="-1"
        >
          {props.subMenus.map((subMenu, index) => (
            <a
              href={subMenu}
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabindex={index === 0 ? "0" : "-1"}
              id={`${props.id}-item-${index}`}
              onClick={toggle}
            >
              {subMenu}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
