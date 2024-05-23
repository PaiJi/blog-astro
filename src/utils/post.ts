import { getCollection } from "astro:content";
import { PAGE_SIZE } from "src/consts";

export async function getAllPost() {
  return (await getCollection("blog", (post) => !post.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

export async function getFirstPage() {
  const posts = await getAllPost();
  return posts.slice(0, PAGE_SIZE);
}

export async function getTargetPage(page: number) {
  const posts = await getAllPost();
  return posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
}

export async function getTagPage(tag: string, page: number) {
  const posts = (
    await getCollection("blog", (p) => p.data.tags?.includes(tag))
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
}

export async function getAllTag(): Promise<string[]> {
  const posts = await getAllPost();
  const tagsSet: Set<string> = new Set();

  posts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((c) => tagsSet.add(c));
    }
  });

  return Array.from(tagsSet);
}

export async function getAllCategory(): Promise<string[]> {
  const posts = await getAllPost();
  const tagsSet: Set<string> = new Set();

  posts.forEach((post) => {
    if (post.data.categories) {
      post.data.categories.forEach((c) => tagsSet.add(c));
    }
  });

  return Array.from(tagsSet);
}

export async function getTagPosts(tag: string) {
  const posts = (
    await getCollection("blog", (p) => {
      return p.data.tags?.includes(tag);
    })
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return posts;
}

export async function getCategoryPosts(category: string) {
  const posts = (
    await getCollection("blog", (p) => {
      return p.data.categories?.includes(category);
    })
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return posts;
}
