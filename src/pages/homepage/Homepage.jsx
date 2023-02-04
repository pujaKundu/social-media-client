import { Header, Newsfeed, Leftbar, Rightbar } from "../../components/index";

const Homepage = () => {
  return (
    <div className="mr-0 bg-gradient-to-r from-fuchsia-100 to-slate-100">
      <Header />
      <div className="w-screen flex">
        <Leftbar />
        <Newsfeed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Homepage;
