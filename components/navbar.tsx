import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full border-b p-2 text-xl sticky top-0">
      <div>
        <a href="/" className="text-2xl font-bold">
          Musikbezirk Silz
        </a>
        <p className="text-gray-400 text-xs italic">Es klingt Musik...</p>
      </div>
      <div className="flex gap-3">
        <a className="mx-2" href="https://www.facebook.com/mbsilz/">
          <img className="h-6 w-6" src="/facebook.svg" alt="facebook" />
        </a>
        <a href="mailto:alfred.lercher@gmail.com">
          <img className="h-6 w-6" src="/envelope-solid.svg" alt="GMail" />
        </a>
      </div>
    </nav>
  );
}
