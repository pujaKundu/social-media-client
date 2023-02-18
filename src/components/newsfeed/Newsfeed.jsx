import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const Newsfeed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const urlFeed = `https://socialnetworkingsitebackend.onrender.com/api/posts/timeline/63e663695568738e982a18cf`;
  const urlProfile = `https://socialnetworkingsitebackend.onrender.com/api/posts/profile/${username}`;
  useEffect(() => {
    const fetchData = async () => {
      const res = username
        ? await axios.get(urlProfile)
        : await axios.get(urlFeed);
      setPosts(res.data);
      console.log("feed ", res.data);
    };
    fetchData();
  }, [username]);
  return (
    <div className="flex flex-col justify-center basis-1/2 px-16">
      {posts.map((post) => {
        return <Post key={post?._id} post={post} />;
      })}
    </div>
  );
};

export default Newsfeed;
