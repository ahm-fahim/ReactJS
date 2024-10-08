import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="m-3 font-poppins ">
		  <Header></Header>
		  <div className="flex mt-10 ">
			  <Blogs></Blogs>
			  <Bookmarks></Bookmarks>
		  </div>
    </div>
  );
}

export default App;
