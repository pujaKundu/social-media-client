import { useRef, useState } from "react";
import { photos, live, feeling } from "./imports";
import share from "../../assets/share.png";
import axios from "axios";

const noUser =
  "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg";
const CreatePost = ({ user }) => {
  //const { user } = useContext(AuthContext);
  const description = useRef();
  const [file, setFile] = useState(null);
  const { profilePicture, username } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post(
          "https://socialnetworkingsitebackend.onrender.com/api/upload",
          data
        );
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post(
        "https://socialnetworkingsitebackend.onrender.com/api/posts",
        newPost
      ),
        { withCredentials: true };
    } catch (error) {}
  };
  return (
    <form
      className="bg-white h-36 shadow-lg px-2 rounded-lg -mt-44 w-2/3"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <img
          className="w-10 h-10 rounded-full m-3"
          src={profilePicture ? profilePicture : noUser}
          alt={username}
        />
        <textarea
          className="w-full pt-5 h-14 pl-2 mt-3 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-900"
          type="text"
          ref={description}
          placeholder={`What's on your mind ${username}?`}
        />
      </div>
      <div className="w-full  h-1 bg-slate-200 my-2"></div>
      <div className="flex justify-between ">
        
          <div className="flex items-center mb-3 hover:bg-slate-200 rounded p-2">
            <img className="w-6 h-6 mr-2" src={live} alt="live video" />
            <p className="text-gray-500 font-semibold ">Live video</p>
          </div>
          <label
            htmlFor="file"
            className="flex items-center mb-3 hover:bg-slate-200 rounded p-2"
          >
            <img className="w-6 h-6  mr-2" src={photos} alt="photos" />
            <p className="text-gray-500 font-semibold ">Photo/video</p>
            <input
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              style={{
                display: "none",
              }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        
        <div className="flex items-center mb-3 hover:bg-slate-200 rounded p-2">
          <img className="w-6 h-6  mr-2" src={feeling} alt="feeling" />
          <p className="text-gray-500 font-semibold ">Feeling/activity</p>
        </div>
        <button className="flex items-center mb-3 bg-slate-200 hover:bg-slate-300 rounded p-2">
          <img className="w-6 h-6  mr-2" src={share} alt="share" />
          <p className="text-gray-500 font-semibold " type="submit">
            Post
          </p>
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
