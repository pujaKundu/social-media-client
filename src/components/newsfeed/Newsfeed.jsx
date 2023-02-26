import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Newsfeed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const urlFeed = `https://socialnetworkingsitebackend.onrender.com/api/posts/timeline/${user?._id}`;
  const urlProfile = `https://socialnetworkingsitebackend.onrender.com/api/posts/profile/${username}`;
  useEffect(() => {
    const fetchData = async () => {
      const res = username
        ? await axios.get(urlProfile)
        : await axios.get(urlFeed);
      setPosts(res.data);
      //console.log("feed ", res.data);
    };
    fetchData();
  }, [username, user?._id]);
  return (
    <div className="flex flex-col justify-center basis-1/2 px-16 text-slate-900">
      {posts.map((post) => {
        return <Post key={post?._id} post={post} />;
      })}
    </div>
  );
};

export default Newsfeed;
