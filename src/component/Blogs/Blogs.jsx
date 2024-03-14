import { useEffect } from "react";
import { useState } from "react";
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
    </div>
  );
};

export default Blogs;
