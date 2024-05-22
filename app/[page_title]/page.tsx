import PostContainer from "@/components/PostContainer";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { page_title: string };
}): Promise<Metadata> {
  const decodedTitle = decodeURIComponent(params.page_title);
  return {
    title: decodedTitle,
  };
}

export default function Page({ params }: { params: { page_title: string } }) {
  return <PostContainer page_title={params.page_title} />;
}
