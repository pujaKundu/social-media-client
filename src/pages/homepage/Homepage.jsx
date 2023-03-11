import { Header, Newsfeed, Leftbar, Rightbar } from "../../components/index";

const Homepage = () => {
  return (
    <div className="flex flex-row bg-gradient-to-r from-indigo-100 via-purple-300 to-indigo-200 mt-16">
      <Leftbar />
      <Newsfeed />
      <Rightbar />
    </div>
  );
};

export default Homepage;
