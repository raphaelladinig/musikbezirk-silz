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

export default async function PostBuilder() {
  const pagesData = await db.select({ title: pages.title }).from(pages);

  return (
    <div className="m-4">
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
    </div>
  );
}
