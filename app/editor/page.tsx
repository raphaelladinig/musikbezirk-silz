"use client"

import { useEffect, useState } from "react"; import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchPages, insertPost } from "@/db/actions";

export default function PostBuilder() {
  const [pagesData, setPagesData] = useState<
    Array<{ title: string; id: number }>
  >([]);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPages();
      setPagesData(data);
    };

    fetchData();
  }, []);

  const handleSelect = (value: string) => {
    setSelectedPage(value);
  };

  return (
    <div className="m-4">
      <div className="flex gap-3">
        <Select onValueChange={handleSelect}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select a page" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {pagesData.map((page, index) => (
                <SelectItem key={index} value={page.id.toString()}>
                  {page.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={() => selectedPage && insertPost({ page_id: Number(selectedPage) })}>
          Create Post
        </Button>
      </div>
      <div className="flex gap-3 mt-2">
        <Input type="label" placeholder="post_id" />
        <Input type="label" placeholder="position" />
        <Input type="label" placeholder="type" />
        <Input type="label" placeholder="content" />
        <Button>Submit</Button>
      </div>
      <div className="flex gap-3 mt-2">
        <Button>Export DB</Button>
        <Button>Import DB</Button>
      </div>
    </div>
  );
}
