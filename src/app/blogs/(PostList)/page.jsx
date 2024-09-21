import setCookiesOnReq from "@/utils/setCookieOnReq";
import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

// export const experimental_ppr = true; // STATIC + DYNAMIC => PPR

async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(searchParams)
  const cookieStore = cookies()
  const options = setCookiesOnReq(cookieStore)
  const posts = await getPosts(queries, options);
  const { q } = searchParams

  return (
    <>
      {
        q ?
          <p className='mb-4 text-secondary-700'>
            {
              posts.length === 0 ?
                "هیچ پستی با این مشخصات پیدا نشد" :
                `نشان دادن ${posts.length} نتیجه برای`
            }
            <span className='font-bold'>&quot;{q}&quot;</span>
          </p>
          : null
      }
      <PostList posts={posts} />
    </>
  );
}
export default BlogPage;
