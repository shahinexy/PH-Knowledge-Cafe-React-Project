import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog.jsx/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark, handleMinit }) => {
  const [bologs, setBologs] = useState([]);

  useEffect(() => {
    fetch("bologs.json")
      .then((res) => res.json())
      .then((data) => setBologs(data));
  }, []);

  return (
    <div className="w-2/3">
      <div>
        {bologs.map((blog) => {
          return (
            <Blog
              key={blog.id}
              blog={blog}
              handleBookmark={handleBookmark}
              handleMinit={handleMinit}
            ></Blog>
          );
        })}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleMinit: PropTypes.func.isRequired,
};

export default Blogs;
