import { useState, useEffect } from "react";
import { Header, Leftbar, Newsfeed, Rightbar } from "../../components/index";
import Banner from "./Banner";
import Timeline from "./Timeline";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;
  const url = `https://socialnetworkingsitebackend.onrender.com/api/users?username=${username}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setUser(res.data);
      console.log("post ", res.data);
    };
    fetchData();
  }, [user?.userId]);
  return (
    <div className="bg-slate-200 flex flex-col items-center justify-center">
      <Header />
      <Banner />
      <Newsfeed key={user?._id} username={username} />
    </div>
  );
}
