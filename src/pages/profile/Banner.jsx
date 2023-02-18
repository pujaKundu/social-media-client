const Banner = ({ user }) => {
  const {
    username,
    profilePicture,
    coverPicture,
    description,
    currentCity,
    hometown,
    relationship,
    followers,
  } = user;
  return (
    <div className="mb-64 bg-gradient-to-b from-gray-700 to-white pb-4 ">
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
          className="-mt-28 rounded-full w-52 h-52 ml-5 border-2"
          src={profilePicture}
          alt=""
        />
      </div>
      <div style={{ marginLeft: "36%" }} className="flex flex-col -mt-20 pb-10">
        <p className="font-bold text-xl">{username}</p>
        <p className="text-slate-500 font-semibold">{description}</p>
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
  );
};

export default Banner;
