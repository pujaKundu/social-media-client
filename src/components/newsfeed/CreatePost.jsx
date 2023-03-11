import { useRef, useState } from "react";
import { photos, live, feeling } from "./imports";
import share from "../../assets/share.png";
import cancel from "../../assets/close.png";
import axios from "axios";
import "./CreatePost.css";

const noUser =
  "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg";

const CreatePost = ({ user }) => {
  const postsUrl = "https://socialnetworkingsitebackend.onrender.com/api/posts";
  const uploadUrl =
    "https://socialnetworkingsitebackend.onrender.com/api/upload";
  //const { user } = useContext(AuthContext);
  const description = useRef();
  const [file, setFile] = useState(null);
  const [emojiVisible, setEmojiVisible] = useState(false);
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
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post(uploadUrl, data);
      } catch (err) {}
    }
    try {
      await axios.post(postsUrl, newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share -mt-44 bg-white " style={{width:'600px'}}>
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={profilePicture ? user.profilePicture : noUser}
            alt=""
          />
          <textarea
            placeholder={"What's in your mind " + username + "?"}
            className="shareInput pt-3 rounded-full pl-5 bg-slate-100 hover:bg-slate-200 text-slate-800"
            ref={description}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img
              className="shareImg w-64 m-auto"
              src={URL.createObjectURL(file)}
              alt=""
            />
            <img
              src={cancel}
              className="shareCancelImg w-4"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions -mt-2 pl-8">
            <label
              htmlFor="file"
              className="shareOption hover:bg-slate-200 p-2 rounded"
            >
              <img src={photos} alt="" className="w-6 h-6 mr-2" />
              <span className="shareOptionText text-slate-500">
                Photo/video
              </span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className="shareOption hover:bg-slate-200 p-2 rounded">
              <img src={live} alt="" className="w-6 h-6 mr-2" />
              <span className="shareOptionText text-slate-500">Live</span>
            </div>
            <div className="shareOption hover:bg-slate-200 p-2 rounded">
              <img src={feeling} alt="" className="w-6 h-6 mr-2" />
              <span className="shareOptionText text-slate-500">Feelings</span>
            </div>

            <button
              className="shareButton flex ml-3 bg-purple-700 hover:bg-purple-900 px-3"
              type="submit"
            >
              <img src={share} alt="" className="w-6 h-6 mr-2" />
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
