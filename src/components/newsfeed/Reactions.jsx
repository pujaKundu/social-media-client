import React, { useState } from "react";

const Reactions = ({ src }) => {
  const [reactCount, setReactCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const reactHandler = () => {
    setReactCount(isLiked ? reactCount - 1 : reactCount + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="flex items-center">
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
        className="w-6 h-6 m-2"
        src={src}
        alt="love"
      />
    </div>
  );
};

export default Reactions;
