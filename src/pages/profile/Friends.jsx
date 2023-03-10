import React, {  useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const noUser =
  "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg";
const url = "https://socialnetworkingsitebackend.onrender.com/api";

const Friends = ({ id }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${url}/users/friends/${id}`);
      setFriends(res.data);
      console.log("friends", res.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="bg-slate-200 mt-20 mr-8">
      <h3 className="text-xl font-bold text-purple-900">Friends</h3>
      {friends.map((friend) => (
        <div className="bg-slate-300 rounded flex py-5 px-14" key={friend.id}>
          <img
            className="w-6 h-6 rounded-full mr-2"
            src={friend?.profilePicture || noUser}
            alt=""
          />
          <Link
            to={`/profile/${friend?.username}`}
            className="text-slate-900 uppercase"
          >
            {friend?.username}
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default Friends;
