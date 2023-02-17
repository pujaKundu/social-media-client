import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import axios from "axios";

const Newsfeed = () => {
  const [posts, setPosts] = useState([]);
  const url = `https://socialnetworkingsitebackend.onrender.com/api/posts/newsfeed/63e663695568738e982a18cf`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setPosts(res.data);
      console.log("feed ", res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col mt-64 justify-center basis-1/2 px-16">
      <CreatePost />
      {posts.map((post) => {
        return <Post key={post?.userId} post={post} />;
      })}
    </div>
  );
};

export default Newsfeed;
