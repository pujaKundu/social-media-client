import React from "react";
import {
  Feed,
  Friends,
  Recent,
  Groups,
  Saved,
  Events,
  Watch,
  Memories,
  Marketplace,
} from "./imports";
import Link from "./Link";
import FriendImg from "../../assets/leonard.webp";
import "./Leftbar.css";

const Leftbar = () => {
  return (
    <div className="h-screen scrollbar-thin text-slate-900 scrollbar-thumb-gray-400 scrollbar-track-gray-100 flex flex-col basis-1/4 pl-4 pt-4">
      <div>
        <div>
          <div>
            <Link key={Feed} src={Feed} text="Newsfeed" />
            <Link key={Friends} src={Friends} text="Friends" />
            <Link key={Recent} src={Recent} text="Most Recent" />
            <Link key={Groups} src={Groups} text="Groups" />
            <Link key={Events} src={Events} text="Events" />
            <Link key={Marketplace} src={Marketplace} text="Marketplace" />
            <Link key={Watch} src={Watch} text="Watch" />
            <Link key={Memories} src={Memories} text="Memories" />
            <Link key={Saved} src={Saved} text="Saved" />
          </div>

          <div>
            <button className="bg-blue-800 hover:bg-blue-900 border-0 outline-0 text-white font-semibold mb-5 py-2 px-3 rounded">
              Show more
            </button>
          </div>
          <div>
            <div className="flex items-center my-2">
              <img
                className="w-10 h-10 mr-2 rounded-full"
                src={FriendImg}
                alt=""
              />
              Leonard Hofsteder
            </div>
            <div className="flex items-center my-2">
              <img
                className="w-10 h-10 mr-2 rounded-full"
                src={FriendImg}
                alt=""
              />
              Leonard Hofsteder
            </div>
            <div className="flex items-center my-2">
              <img
                className="w-10 h-10 mr-2 rounded-full"
                src={FriendImg}
                alt=""
              />
              Leonard Hofstedar
            </div>
            <div className="flex items-center my-2">
              <img
                className="w-10 h-10 mr-2 rounded-full"
                src={FriendImg}
                alt=""
              />
              Leonard Hofsteder
            </div>
            <div className="flex items-center my-2">
              <img
                className="w-10 h-10 mr-2 rounded-full"
                src={FriendImg}
                alt=""
              />
              Leonard Hofsteder
            </div>
            <div className="flex items-center my-2">
              <img
                className="w-10 h-10 mr-2 rounded-full"
                src={FriendImg}
                alt=""
              />
              Leonard Hofsteder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
