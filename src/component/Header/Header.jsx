import Profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="container mx-auto py-5 border-b-2 border-gray-300 flex justify-between items-center">
      <h1 className="text-3xl text-purple-500 font-bold">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
