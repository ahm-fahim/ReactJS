import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleReadingTime = (id,time) => {
    const newTime = readingTime + time;
	  setReadingTime(newTime);
	  
	  const remainingBookmark = bookmarks.filter(bookmark => bookmark.id != id);
	  setBookmarks(remainingBookmark);
  };
  return (
    <div className="m-3 font-poppins ">
      <Header></Header>
      <div className="flex mt-10 flex-col-reverse lg:flex-row ">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
