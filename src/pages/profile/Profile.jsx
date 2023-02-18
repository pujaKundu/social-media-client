import { useState, useEffect } from "react";
import { Header,  Newsfeed} from "../../components/index";
import Banner from "./Banner";
import axios from "axios";
import { useParams } from "react-router-dom";
import CreatePost from "../../components/newsfeed/CreatePost";


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
      <Banner key={user._id} user={user} />
      <CreatePost key={user._id} user={user} />
      <div className="mx-48">
        <Newsfeed key={user?._id} username={username} />
      </div>
    </div>
  );
}
