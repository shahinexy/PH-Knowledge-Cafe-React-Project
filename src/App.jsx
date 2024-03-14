import Header from "./component/Header/Header";
import Blogs from "./component/Blogs/Blogs";
import Bookmark from "./component/Bookmark/Bookmark";
function App() {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto md:flex my-5 ">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App;
