import notification from "../../assets/bday.png";
import ad from "../../assets/ad.avif";
import FriendImg from "../../assets/leonard.webp";

const Rightbar = () => {
  return (
    <div className="h-screen scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex flex-col basis-1/4 pl-4 pt-4">
      
        <div className="flex items-center my-2">
          <img className="w-8 h-8 mr-2" src={notification} alt="notification" />
          <p>
            <span className="font-semibold">Florida</span> &{" "}
            <span className="font-semibold">3 others </span>have birthday today!
          </p>
        </div>
      
      <div className="my-2">
        <img src={ad} alt="" className="w-72 rounded" />
      </div>
      <div>
        <p className="text-xl font-bold my-2">Online friends</p>
        <div className="flex items-center my-2">
          <img className="w-10 h-10 mr-2 rounded-full" src={FriendImg} alt="" />
          Leonard Hofsteder
        </div>
        <div className="flex items-center my-2">
          <img className="w-10 h-10 mr-2 rounded-full" src={FriendImg} alt="" />
          Leonard Hofsteder
        </div>
        <div className="flex items-center my-2">
          <img className="w-10 h-10 mr-2 rounded-full" src={FriendImg} alt="" />
          Leonard Hofstedar
        </div>
        <div className="flex items-center my-2">
          <img className="w-10 h-10 mr-2 rounded-full" src={FriendImg} alt="" />
          Leonard Hofsteder
        </div>
        <div className="flex items-center my-2">
          <img className="w-10 h-10 mr-2 rounded-full" src={FriendImg} alt="" />
          Leonard Hofsteder
        </div>
        <div className="flex items-center my-2">
          <img className="w-10 h-10 mr-2 rounded-full" src={FriendImg} alt="" />
          Leonard Hofsteder
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
