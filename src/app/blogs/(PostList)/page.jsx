import setCookiesOnReq from "@/utils/setCookieOnReq";
import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import { getPosts } from "@/services/postServices";

// export const experimental_ppr = true; // STATIC + DYNAMIC => PPR

async function BlogPage() {
  const cookieStore = cookies()
  const options = setCookiesOnReq(cookieStore)
  const posts = await getPosts(options);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}
export default BlogPage;
