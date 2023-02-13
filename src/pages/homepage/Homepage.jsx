import { Header, Newsfeed, Leftbar, Rightbar } from "../../components/index";

const Homepage = () => {
  return (
    <div className="flex flex-row bg-slate-200 mt-16">
      <Leftbar />
      <Newsfeed />
      <Rightbar />
    </div>
  );
};

export default Homepage;
