"use client";

import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchPages, insertPost, insertPostContents } from "@/db/actions";

export default function PostBuilder() {
  const [pagesData, setPagesData] = useState<
    Array<{ title: string; id: number }>
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPages();
      setPagesData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="m-4">
      <div className="flex gap-3">
        <Select>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select a page" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {pagesData.map((page, index) => (
                <SelectItem key={index} value={page.title}>
                  {page.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={() => insertPost({})}>Create Post</Button>
      </div>
      <div className="flex gap-3 mt-2">
        <Input type="label" placeholder="post_id" />
        <Input type="label" placeholder="position" />
        <Input type="label" placeholder="type" />
        <Input type="label" placeholder="content" />
        <Button onClick={() => insertPostContents({})}>Submit</Button>
      </div>
    </div>
  );
}
