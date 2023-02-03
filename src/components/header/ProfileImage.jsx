import React from "react";
import { userImg } from "./imports";

const ProfileImage = () => {
  return (
    <>
      <img
        className="w-10 h-10 rounded-full ml-5 shadow-xl"
        src={userImg}
        alt="user image"
      />
    </>
  );
};

export default ProfileImage;
