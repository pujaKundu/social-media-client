import { Header, Leftbar, Rightbar } from "../../components/index";
import Banner from "./Banner";
import Timeline from "./Timeline";

export default function Profile() {
  return (
    <div className="bg-slate-200 flex flex-col items-center justify-center">
      <Header />
      <Banner />
      <Timeline />
    </div>
  );
}
