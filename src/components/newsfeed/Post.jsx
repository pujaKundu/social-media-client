import React from "react";
import Reactions from "./Reactions";
import { user, post, dots, close,love } from "./imports";
import Comment from "./Comment";

const Post = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg my-8 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full m-3" src={user} alt="user" />
          <p>Leonard Hofstader</p>
          <small className="text-slate-600 ml-1">5 mins ago</small>
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
        <p className="pl-3 pb-3">Beautiful sunset!!</p>
        <img className="w-full" src={post} alt="post" />
      </div>
      <div className="flex">
        <Reactions key="love" src={love} alt="love" />
        <Comment/>
      </div>
    </div>
  );
};

export default Post;
