import { useState,useEffect } from "react";
import CreatePost from "../../components/newsfeed/CreatePost";
import Post from "../../components/newsfeed/Post";
import axios from "axios";

const Timeline = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const url = `https://socialnetworkingsitebackend.onrender.com/api/posts/profile/${user?.username}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setPosts(res.data);
      console.log("feed ", res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col mr-96 justify-center">
      <CreatePost />
      {posts.map((post) => {
        return <Post key={post?.userId} post={post} />;
      })}
    </div>
  );
};

export default Timeline;
