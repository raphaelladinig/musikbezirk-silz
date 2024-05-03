import { Button } from "@/components/ui/button";

export default function Navbar() {
  const menus: { title: string; href: string }[] = [
    { title: "Start", href: "/" },
    { title: "Events", href: "/" },
    { title: "Rückblick", href: "/" },
    { title: "Jugend", href: "/" },
    { title: "Über Uns", href: "/-uns" },
  ];

  return (
    <nav className="flex items-center justify-between w-full border-b p-2 text-xl sticky top-0">
      <div>
        <a href="/" className="text-2xl font-bold">
          Musikbezirk Silz
        </a>
        <p className="text-gray-400 text-xs italic">Es klingt Musik...</p>
      </div>
      <div>
        {menus.map((menu) => (
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href={menu.href}
          >
            <Button variant="link">{menu.title}</Button>
          </a>
        ))}
      </div>
      <div className="flex gap-3">
        <Button variant="ghost" size="icon">
          <a className="mx-2" href="https://www.facebook.com/mbsilz/">
            <img className="h-6 w-6" src="/facebook.svg" alt="facebook" />
          </a>
        </Button>
        <Button variant="ghost" size="icon">
          <a href="mailto:alfred.lercher@gmail.com">
            <img className="h-6 w-6" src="/envelope-solid.svg" alt="GMail" />
          </a>
        </Button>
      </div>
    </nav>
  );
}
