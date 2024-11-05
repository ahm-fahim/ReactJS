import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmarks,handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`blogs.json`)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-full md:w-2/3 flex flex-col justify-center items-center border-l-2 border-r-2">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog_data={blog} handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></BlogCard>
      ))}
    </div>
  );
};
Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadingTime : PropTypes.func,
};

export default Blogs;
