import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog.jsx/Blog";
const Blogs = () => {
  const [bologs, setBologs] = useState([]);

  useEffect(() => {
    fetch("bologs.json")
      .then((res) => res.json())
      .then((data) => setBologs(data));
  }, []);

  return (
    <div className="w-2/3">
      <h2 className="text-2xl ">There are {bologs.length} blog</h2>
      <div>
        {
            bologs.map(blog => {
                return (
                    <Blog key={blog.id} blog={blog}></Blog>
                )
            })
        }
      </div>
    </div>
  );
};

export default Blogs;
