import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { blog_title, post_date } = bookmark;
  return (
    <div className="bg-white rounded-lg p-3 my-5">
      <h1>{blog_title}</h1>
      <p className="text-gray-500 text-sm">Post Date : {post_date}</p>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
