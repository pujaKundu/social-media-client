import { Header, Newsfeed, Leftbar, Rightbar } from "../../components/index";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row bg-slate-200 mt-16">
        <Leftbar />
        <Newsfeed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Homepage;
