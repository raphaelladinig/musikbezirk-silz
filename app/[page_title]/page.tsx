import PostContainer from "@/components/PostContainer";

export default function Page({ params }: { params: { page_title: string } }) {
  return <PostContainer page_title={params.page_title} />;
}
