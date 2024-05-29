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
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [postId, setPostId] = useState("");
  const [position, setPosition] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");

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
        <Button
          onClick={() =>
            selectedPage && insertPost({ page_id: Number(selectedPage) })
          }
        >
          Create Post
        </Button>
      </div>
      <div className="flex gap-3 mt-2">
        <Input
          type="label"
          placeholder="post_id"
          onChange={(e) => setPostId(e.target.value)}
        />
        <Input
          type="label"
          placeholder="position"
          onChange={(e) => setPosition(e.target.value)}
        />
        <Input
          type="label"
          placeholder="type"
          onChange={(e) => setType(e.target.value)}
        />
        <Input
          type="label"
          placeholder="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          onClick={() =>
            insertPostContents({
              post_id: Number(postId),
              position: Number(position),
              type,
              content,
            })
          }
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
