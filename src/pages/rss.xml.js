import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { getAllPost } from "@utils/post";

export async function GET(context) {
  const posts = await getAllPost();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      //   ...post.data,
      title: post.data.title,
      pubDate: post.data.date,
      //   description: post.data.description,
      //   customData: post.data.customData,
      link: `/${post.data.permalink}/`,
    })),
  });
}
