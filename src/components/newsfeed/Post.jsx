import { useState, useEffect, useContext } from "react";
import Reactions from "./Reactions";
import { dots, close, love } from "./imports";
import Comment from "./Comment";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const noUser =
  "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg";

const Post = ({ post }) => {
  const [user, setUser] = useState({});
  const url = `https://socialnetworkingsitebackend.onrender.com/api/users/${post?.userId}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setUser(res.data);
      console.log("post ", res.data);
    };
    fetchData();
  }, [post?.userId]);

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg my-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full m-3"
            src={user?.profilePicture ? user?.profilePicture : noUser}
            alt={user?.username}
          />
          <Link to={`profile/${user?.username}`}>
            <p className="font-bold mr-2 text-black hover:text-indigo-900">
              {user?.username}
            </p>
          </Link>

          <small className="text-slate-600 ml-1">
            {" "}
            {format(post?.createAt)}{" "}
          </small>
        </div>
        <div className="flex">
          <img
            className="mr-2 w-4 h-4 cursor-pointer"
            src={dots}
            alt="sub-menu"
          />
          <img
            className="mr-3 w-4 h-4 cursor-pointer"
            src={close}
            alt="close"
          />
        </div>
      </div>
      <div>
        <p className="pl-3 pb-3">{post?.description}</p>
        <img className="w-full" src={post?.img} alt="post" />
      </div>
      <div className="flex">
        <Reactions key={post?._id} src={love} post={post} alt="love" />
        <Comment />
      </div>
    </div>
  );
};

export default Post;
