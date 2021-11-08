import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

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

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
