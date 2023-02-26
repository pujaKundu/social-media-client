import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const noUser =
  "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg";

const ProfileImage = () => {
  const { user } = useContext(AuthContext);
 // const { username, profilePicture } = user;
  return (
    <Link to={`/profile/${user?.username}`}>
      <img
        className="w-10 h-10 rounded-full ml-5 shadow-xl"
        src={user?.profilePicture ? user?.profilePicture : noUser}
        alt="user image"
      />
    </Link>
  );
};

export default ProfileImage;
