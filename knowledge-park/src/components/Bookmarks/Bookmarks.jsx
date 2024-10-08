import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime }) => {
    
  return (
    <div className="w-full md:w-1/3 pl-2">
      <div className="border border-green-200 rounded-lg bg-green-50 p-4 px-6 text-center">
        <p className="text-green-600 text-sm "> Spent time on read : {readingTime} </p>
      </div>
      <div className="bg-gray-100 mt-5 rounded-lg p-4">
        <h1 className="text-2xl font-anton my-4">
          Total Bookmarks : {bookmarks.length}{" "}
              </h1>
              {bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number,
};
export default Bookmarks;
