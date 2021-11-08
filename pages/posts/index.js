import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-slug",
    title: "dfsdfsdfsd",
    image: "getting-started-nextjs.png",
    excerpt: "dfdsfsdsdds",
    date: "2022-02-10",
  },
  {
    slug: "getting-slug1",
    title: "dfsdfsdfsd",
    image: "getting-started-nextjs.png",
    excerpt: "dfdsfsdsdds",
    date: "2022-02-10",
  },
  {
    slug: "getting-slug2",
    title: "dfsdfsdfsd",
    image: "getting-started-nextjs.png",
    excerpt: "dfdsfsdsdds",
    date: "2022-02-10",
  },
  {
    slug: "getting-slug3",
    title: "dfsdfsdfsd",
    image: "getting-started-nextjs.png",
    excerpt: "dfdsfsdsdds",
    date: "2022-02-10",
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
