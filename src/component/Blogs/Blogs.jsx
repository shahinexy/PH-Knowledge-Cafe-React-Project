import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog.jsx/Blog";

const Blogs = ({handleBookmark}) => {
  const [bologs, setBologs] = useState([]);

  useEffect(() => {
    fetch("bologs.json")
      .then((res) => res.json())
      .then((data) => setBologs(data));
  }, []);

  return (
    <div className="w-2/3">
      <div>
        {
            bologs.map(blog => {
                return (
                    <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}></Blog>
                )
            })
        }
      </div>
    </div>
  );
};

export default Blogs;
