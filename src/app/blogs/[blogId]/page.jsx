import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const BlogDetailPage = async ({ params }) => {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();
  console.log(blog);
  return (
    <div className="my-10">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailPage;
