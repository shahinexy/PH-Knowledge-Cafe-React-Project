import Header from "./component/Header/Header";
import Blogs from "./component/Blogs/Blogs";
import Bookmark from "./component/Bookmark/Bookmark";
import { useState } from "react";
function App() {
  const [titles, setTitle] = useState([])
  const [counter, setCounter] = useState(0)

  const handleBookmark = title =>{
    const newCount = counter + 1;
    setCounter(newCount);
    const newtitle = [...titles, title]
    setTitle(newtitle)
  }

  const [minits, setMinit] = useState(0)
  
  const handleMinit = minit => {
    const totalMinit = minits + minit;
    setMinit(totalMinit)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex my-5 gap-5 ">
        <Blogs handleBookmark={handleBookmark} handleMinit={handleMinit}></Blogs>
        <Bookmark title={titles} minit={minits} counter={counter}></Bookmark>
      </div>
    </div>
  );
}

export default App;
