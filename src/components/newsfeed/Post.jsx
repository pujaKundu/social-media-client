import { useState, useEffect } from "react";
import Reactions from "./Reactions";
import { dots, close, love } from "./imports";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";

const noUser =
  "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg";

const Post = ({ post, setPosts }) => {
  const [user, setUser] = useState({});
  const [imgSrc, setImgSrc] = useState("");

  const url = `https://socialnetworkingsitebackend.onrender.com/api/users/${post?.userId}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setUser(res.data);
      //console.log("post ", res.data);
    };
    fetchData();
  }, [post?.userId]);

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(post?.img, {
        responseType: "arraybuffer",
      });
      const blob = new Blob([res?.data], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      setImgSrc(url);
    };
    fetchImage();
  }, [post?.img]);

  //delete handler
  const deletePost = async () => {
    try {
      await axios.delete(
        `https://socialnetworkingsitebackend.onrender.com/api/posts/${post._id}`
      );
      setPosts((prevPosts) => prevPosts.filter((p) => p._id !== post._id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg my-8">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center m-2">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={user.profilePicture || noUser}
            alt="user"
          />
          <Link
            to={`/profile/${user.username}`}
            className="text-lg font-medium hover:underline"
          >
            {user.username}
          </Link>
        </div>
        <img className="w-6 h-6" src={dots} alt="options" />
      </div>
      <div className="my-4">
        <img className="object-cover w-full h-80" src={imgSrc} alt="post" />
      </div>
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center">
          {/* <img className="w-6 h-6 mr-2" src={love} alt="like" /> */}
          <Reactions post={post} src={love} />
        </div>
        <div className="flex items-center">
          <span className="text-sm mr-4">{format(post.createdAt)}</span>
          <img
            className="w-4 h-4 cursor-pointer"
            src={close}
            alt="delete"
            onClick={deletePost}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Post;
