import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`blogs.json`)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 flex flex-col justify-center items-center border-l-2 border-r-2">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog_data={blog}></BlogCard>
      ))}
    </div>
  );
};

export default Blogs;
