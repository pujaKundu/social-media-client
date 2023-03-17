import { useState, useEffect } from "react";
import { Header, Newsfeed } from "../../components";
import Banner from "./Banner";
import axios from "axios";
import { useParams } from "react-router-dom";
import CreatePost from "../../components/newsfeed/CreatePost";
import Friends from "./Friends";
import loader from '../../assets/loader.webp'

export default function Profile() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const url = buildUrl(username);
        const res = await axios.get(url);
        setUser(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [username]);

  const buildUrl = (username) => {
    return `https://socialnetworkingsitebackend.onrender.com/api/users?username=${username}`;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen bg-slate-100 h-screen">
        <img className=" w-30 h-30 rounded-full" src={loader} alt="" />
      </div>
    );
  }
  
  return (
    <div className="bg-slate-200 flex flex-col items-center justify-center  bg-gradient-to-r from-indigo-200 via-slate-200 to-purple-300">
      <Header />
      <Banner key={user._id} user={user} />
      <CreatePost key={user.username} user={user} />
      <h2 className="font-semibold text-3xl text-slate-800 mt-7 uppercase">
        <span>{username}</span>'s timeline
      </h2>
      <div className="mx-48 flex justify-between ">
        <Newsfeed key={user?._id} username={username} />
        <Friends key={user?._id} id={user?._id} />
      </div>
    </div>
  );
}
