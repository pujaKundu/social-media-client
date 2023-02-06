import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Newsfeed = () => {
  return (
    <div className="flex flex-col mt-64 justify-center basis-1/2 px-16">
      <CreatePost />
      <Post />
    </div>
  );
};

export default Newsfeed;
