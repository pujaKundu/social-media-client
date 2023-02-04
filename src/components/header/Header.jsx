import { useState } from "react";
import { menu, close } from "./imports";
import ProfileImage from "./ProfileImage";
import { Person, Notification, Chat } from "./icons";

const Search = () => (
  <>
    <div className="flex justify-between items-center">
      <input
        className="w-52 lg:w-96 md:w-60 p-3  bg-transparent rounded-full shadow-lg hover:shadow-xl hover:border-purple-400 border border-slate-300 "
        type="text"
        placeholder="Search for friend, post or video"
      />
    </div>
  </>
);

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // top navbar container
    <div className="top-0 fixed grid grid-cols-3 gap-4 justify-items-center content-center py-3 bg-gradient-to-r from-indigo-100 to-fuchsia-100 w-full">
      {/* left bar */}
      <div className=" text-center ">
        <span className="lg:text-3xl text-lg font-bold text-blue-900 font-mono">
          Social Media
        </span>
      </div>
      {/* middle bar */}
      <div className="hidden lg:block">
        <Search />
      </div>
      {/* right bar */}

      <div className="lg:flex items-center justify-center font-mono hidden ">
        {/* links */}
        <div>
          <span className="text-fuchsia-800 font-semibold hover:text-purple-900 cursor-pointer mr-3">
            Homepage
          </span>
          <span className="text-fuchsia-800 font-semibold hover:text-purple-900 cursor-pointer">
            Profile
          </span>
        </div>
        {/* icons */}
        <div className="lg:flex justify-center items-center text-fuchsia-900 hidden">
          <span className="ml-5">
            {/* person */}
            <Person />
          </span>
          <p className="bg-slate-600 text-white w-4 h-4 rounded-lg absolute mr-10 top-5">
            <span className="text-sm absolute  pl-1">1</span>
          </p>
          {/* chat */}
          <span className="ml-5">
            <Chat />
          </span>
          <p className="bg-slate-600 text-white w-4 h-4 rounded-lg absolute top-5 ml-14 ">
            <span className="text-sm absolute  pl-1">2</span>
          </p>
          {/* notification */}
          <span className="ml-5 ">
            <Notification />
          </span>

          <p className="bg-slate-600 text-white w-4 h-4 rounded-lg  absolute top-5 ml-36">
            <span className="text-sm absolute  pl-1">4</span>
          </p>
        </div>
        {/* profile picture */}
        <ProfileImage />
      </div>

      {toggle ? (
        <div className="block lg:hidden" onClick={() => setToggle(false)}>
          <img
            className="w-6 h-6 ml-44 md:ml-72 absolute"
            src={close}
            alt="close"
          />
        </div>
      ) : (
        <div className="block lg:hidden" onClick={() => setToggle(true)}>
          <img
            className="w-6 h-6 ml-44 md:ml-72 absolute"
            src={menu}
            alt="menu"
          />
        </div>
      )}
      {toggle && (
        <div className="flex flex-col justify-center mt-5">
          <div className="mr-36 my-4">
            <Search />
          </div>

          <div className="flex flex-col items-center justify-center">
            {/* links */}
            <div className="flex flex-col items-end justify-end">
              <span className="mr-5 text-fuchsia-800 font-semibold hover:text-slate-900 cursor-pointer">
                Homepage
              </span>
              <span className="mr-5 text-fuchsia-800 font-semibold hover:text-slate-900 cursor-pointer">
                Profile
              </span>
            </div>
            {/* icons */}
            <div className="flex flex-col justify-center items-end text-fuchsia-900 my-3">
              <span className="mr-3">
                {/* person */}
                <Person />
              </span>
              <p className="bg-slate-600 text-white w-4 h-4 rounded-lg absolute ml-12 -mt-20">
                <span className="text-sm absolute  pl-1">1</span>
              </p>
              {/* chat */}
              <span className="mr-3 mt-2">
                <Chat />
              </span>
              <p className="bg-slate-600 text-white w-4 h-4 rounded-lg absolute ml-14 -mt-4">
                <span className="text-sm absolute  pl-1">2</span>
              </p>
              {/* notification */}
              <span className="mr-3 mt-2">
                <Notification />
              </span>

              <p className="bg-slate-600 text-white w-4 h-4 rounded-lg  absolute mt-12 ml-36">
                <span className="text-sm absolute  pl-1">4</span>
              </p>
            </div>
            {/* profile picture */}
            <ProfileImage />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
