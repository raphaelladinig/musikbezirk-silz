"use client";

import { fetchPostContents } from "@/db/actions";
import { useEffect, useState } from "react";

export default function Post(props: { post_id: number }) {
  const [postContentsData, setPostContentsData] = useState<Array<{ type: string; content: string }>>([]);

  useEffect(() => {
    const fetchData = async () => {
      setPostContentsData(await fetchPostContents(props.post_id));
    }

    fetchData();
  }, []);

  return (
    <div className="m-4 p-2 bg-gray-200">
      {postContentsData.map((content, index) => (
        <div key={index}>{renderContent(content)}</div>
      ))}
    </div>
  );
}

function renderContent(content: { type: string; content: string }) {
  switch (content.type) {
    case "title":
      return (
        <h1 className="text-xl text-red-700 underline">{content.content}</h1>
      );
    case "text":
      return <p>{content.content}</p>;
    case "image":
      return <img src={content.content} />;
    default:
      return null;
  }
}
