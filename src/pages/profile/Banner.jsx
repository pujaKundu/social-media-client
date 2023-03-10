import { useState } from "react";
import follow from "../../assets/follow.png";
import following from "../../assets/following.png";

const noUser =
  "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg";

const Banner = ({ user }) => {
  const [isFollwoing, setIsFollowing] = useState(false);

  const {
    username,
    profilePicture,
    coverPicture,
    description,
    currentCity,
    hometown,
  } = user;

  const handleFollow = (e) => {
    e.preventDefault();
    setIsFollowing(true);
  };
  return (
    <div className="mb-64 bg-gradient-to-b from-gray-700 to-white pb-4 overflow-x-hidden ">
      <div>
        <div className="mx-60">
          <img
            style={{ height: "400px", width: "100vw", zIndex: "1" }}
            src={coverPicture}
            alt=""
          />
          <img
            style={{
              zIndex: "2",
            }}
            className="lg:-mt-28 rounded-full lg:w-52 lg:h-52 sm:w-20 sm:h-20 sm:-mt-12 sm:mr-12 ml-5 border-2"
            src={profilePicture ? profilePicture : noUser}
            alt=""
          />
        </div>
        <div
          style={{ marginLeft: "36%" }}
          className="flex flex-col -mt-20 pb-10 text-slate-900"
        >
          <p className="font-bold text-xl">{username}</p>
          <p className="text-slate-500 font-semibold">{description}</p>
          <button
            className="px-3 py-1 w-32 my-2 bg-gradient-to-r  from-violet-700 to-fuchsia-600 "
            onClick={handleFollow}
          >
            {isFollwoing ? (
              <span className="flex items-center justify-around text-slate-200">
                <img className="w-5 h-5 rounded-full" src={following} alt="" />
                Following
              </span>
            ) : (
              <span className="flex items-center justify-around text-slate-200">
                <img className="w-5 h-5 rounded-full" src={follow} alt="" />
                Follow
              </span>
            )}
          </button>
          <p>
            <span className="font-semibold mr-2">From:</span>
            {hometown}
          </p>
          <p>
            <span className="font-semibold mr-2">Live in:</span>
            {currentCity}
          </p>
          <p>
            <span className="font-semibold mr-2">Relationship:</span>
            Single
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
