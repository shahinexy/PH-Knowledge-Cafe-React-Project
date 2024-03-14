import PropTypes from "prop-types";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Blog = ({ blog, handleBookmark, handleMinit }) => {
  const {
    cover,
    author,
    author_img,
    posted_date,
    title,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="p-5 ">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between gap-5  my-5">
        <div className="flex gap-5">
          <img className="w-12" src={author_img} alt="" />
          <div>
            <h3 className="text-xl font-semibold">{author}</h3>
            <p className="text-sm">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <p>{reading_time} min read</p>
          <button className="text-xl" onClick={() => handleBookmark(title)}>
            <MdOutlineBookmarkAdd></MdOutlineBookmarkAdd>
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <p className="my-5">
        {hashtags.map((has, idx) => (
          <span key={idx}>            
            <a href=""> #{has} </a>
          </span>
        ))}
      </p>
      <button onClick={()=> handleMinit(reading_time)} className="bg-purple-300 hover:bg-purple-400 py-2 px-5 rounded-xl border-[1px] border-purple-400">
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
};

export default Blog;
