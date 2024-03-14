import Header from "./component/Header/Header";
import Blogs from "./component/Blogs/Blogs";
import Bookmark from "./component/Bookmark/Bookmark";
import { useState } from "react";
function App() {
  const [titles, setTitle] = useState([])

  const handleBookmark = title =>{
    const newtitle = [...titles, title]
    setTitle(newtitle)
  }
console.log(titles);
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex my-5 gap-5 ">
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmark></Bookmark>
      </div>
    </div>
  );
}

export default App;
