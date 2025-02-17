import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import React from "react";

export const metadata = {
  title: "NexaBlog | Blogs",
};

const BlogPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] mx-auto my-4">
      {blogs.map((blog: Blog) => {
        return <BlogCard key={blog.id} blog={blog} />;
      })}
    </div>
  );
};

export default BlogPage;
