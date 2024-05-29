"use client";

import { Button } from "@/components/ui/button";
import { fetchPages } from "@/db/actions";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [pagesData, setPagesData] = useState<
    Array<{ title: string; id: number }>
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPages(); setPagesData(data);
    };

    fetchData();
  }, []);

  return (
    <nav className="flex items-center justify-between w-full border-b p-2 text-xl top-0 bg-white">
      <div>
        <a href="/" className="text-2xl font-bold">
          Musikbezirk Silz
        </a>
        <p className="text-gray-400 text-xs italic">Es klingt Musik...</p>
      </div>
      <div>
        {pagesData.map((page) => (
          <a href={page.title}>
            <Button variant="link">{page.title}</Button>
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
        <Button variant="ghost" size="icon">
          <a href="/editor">
            <img
              className="h-6 w-6"
              src="/screwdriver-wrench-solid.svg"
              alt="GMail"
            />
          </a>
        </Button>
      </div>
    </nav>
  );
}
