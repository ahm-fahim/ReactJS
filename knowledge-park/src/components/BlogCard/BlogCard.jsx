import PropTypes from "prop-types";
import { useState } from "react";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import { SlLike, SlDislike } from "react-icons/sl";

const BlogCard = ({ blog_data, handleBookmarks,handleReadingTime }) => {
  const {
    author,
    author_image,
    post_date,
    cover_image,
    blog_title,
    description,
    hashtag,
    reading_time,
  } = blog_data;

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div className="w-5/6 shadow-sm m-5 rounded-lg">
      <img className="rounded-lg" src={cover_image} alt="cover image" />

      {/* author start */}
      <div className="flex flex-row justify-between m-2">
        <div className="author flex">
          <img
            className="rounded-full w-12"
            src={author_image}
            alt="author image"
          />
          <div className="mx-1">
            <p className="text-lg font-bold">{author}</p>
            <p className="text-sm text-gray-500">{post_date}</p>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <p className="text-gray-500 text-sm mx-2">{reading_time}</p>
          <button
            onClick={() => handleBookmarks(blog_data)}
            className="relative group"
          >
            <CiBookmark className="text-2xl" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Bookmark
            </span>
          </button>
        </div>
      </div>
      {/* author end */}

      {/* title , description , hashtag */}
      <div className="m-5">
        <h1 className="text-2xl font-anton m-5">{blog_title}</h1>
        <p className="text-gray-700 mx-5 ">{description}</p>
        <p className="text-gray-500 text-sm mt-5 bg-gray-100 p-2 w-1/2 rounded-md">
          {hashtag}
        </p>
      </div>
      {/* reaction */}

      <hr className="mx-10" />
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-10 text-2xl m-5">
          <button
            className="flex gap-2 text-green-400"
            onClick={() => setLike((like) => like + 1)}
          >
            <SlLike />
            <span className="text-gray-500">{like}</span>
          </button>
          <button
            className="flex gap-2 text-red-400"
            onClick={() => setDislike((dislike) => dislike + 1)}
          >
            <SlDislike />
            <span className="text-gray-500">{dislike}</span>
          </button>
        </div>
        <button onClick={()=>handleReadingTime(reading_time)} className="m-5">
          <p className="flex items-center text-green-600">
            Mark as read <CiBookmarkCheck className="text-3xl text-green-500" />
          </p>
        </button>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog_data: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleReadingTime:PropTypes.func,
};

export default BlogCard;
