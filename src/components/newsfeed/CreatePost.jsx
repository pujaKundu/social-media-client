import { photos, live, feeling } from "./imports";

const CreatePost = ({ user }) => {
  const { username, profilePicture } = user;
  return (
    <div className=" bg-white h-36 shadow-lg px-2 rounded-lg -mt-44">
      <div className="flex">
        <img
          className="w-10 h-10 rounded-full m-3"
          src={profilePicture}
          alt={username}
        />
        <textarea
          className="w-full pt-5 h-14 pl-2 mt-3 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-900"
          type="text"
          placeholder="What's on your mind?"
        />
      </div>
      <div className="w-full  h-1 bg-slate-200 my-2"></div>
      <div className="flex justify-between ">
        <div className="flex items-center mb-3 hover:bg-slate-200 rounded p-2">
          <img className="w-6 h-6 mr-2" src={live} alt="live video" />
          <p className="text-gray-500 font-semibold ">Live video</p>
        </div>
        <div className="flex items-center mb-3 hover:bg-slate-200 rounded p-2">
          <img className="w-6 h-6  mr-2" src={photos} alt="photos" />
          <p className="text-gray-500 font-semibold ">Photo/video</p>
        </div>
        <div className="flex items-center mb-3 hover:bg-slate-200 rounded p-2">
          <img className="w-6 h-6  mr-2" src={feeling} alt="feeling" />
          <p className="text-gray-500 font-semibold ">Feeling/activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
