"use client"

import Post from "@/components/Post";
import { fetchPosts } from "@/db/actions";
import { useEffect, useState } from "react";

export default function PostContainer(props: { page_title: string }) {
  const [postsData, setPostsData] = useState<Array<{ id: number }>>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      setPostsData(await fetchPosts(props.page_title));
    };

    fetchData();
  }, []);

  return (
    <div>
      {postsData.map((post, index) => (
        <Post key={index} post_id={post.id} />
      ))}
    </div>
  );
}
