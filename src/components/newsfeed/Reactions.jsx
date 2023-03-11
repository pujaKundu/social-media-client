import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Reactions = ({ src, post }) => {
  const [reactCount, setReactCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post?.likes.includes(user?._id));
  }, [user?._id, post.likes]);

  const reactHandler = () => {
    try {
      axios.put(
        `https://socialnetworkingsitebackend.onrender.com/api/posts/${post._id}/like`,
        { userId: user?._id }
      );
    } catch (error) {}
    setReactCount(isLiked ? reactCount - 1 : reactCount + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="flex items-center ">
      {reactCount == 0 ? (
        ""
      ) : reactCount == 1 ? (
        <p className="pl-4">
          <span className="font-semibold">1</span> like
        </p>
      ) : (
        <p className="pl-4">
          <span className="font-semibold">{reactCount}</span> likes
        </p>
      )}

      <img
        onClick={reactHandler}
        className="w-6 h-6 mb-2"
        src={src}
        alt="love"
      />
    </div>
  );
};

export default Reactions;
