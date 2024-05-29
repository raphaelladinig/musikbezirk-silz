import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import db from "@/db/drizzle";
import { pages } from "@/db/schema";
import { Button } from "@/components/ui/button";

export default async function PostBuilder() {
  const pagesData = await db.select({ title: pages.title }).from(pages);

  return (
    <div className="m-4">
      <div className="flex gap-3 justify-between">
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
        <Button>Create Post</Button>
      </div>
      <div className="flex mt-2">
        <div className="border m-1 p-2 w-1/4">
          <h3>Components</h3>
        </div>
        <div className="border m-1 p-2 w-3/4">Drag and drop dingens</div>
      </div>
    </div>
  );
}
