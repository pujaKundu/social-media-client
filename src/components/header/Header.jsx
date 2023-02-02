import { useState } from "react";
import userImg from "../../assets/sheldon.jfif";
import menu from "../../assets/menu.png";
import close from '../../assets/close.png'

// navbar icons
const Person = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  </>
);

const Chat = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    </svg>
  </>
);

const Notification = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
    />
  </svg>
);

const Search = () => (
  <>
    <div className="flex justify-between items-center">
      <input
        className="w-52 lg:w-96 md:w-60 p-3  bg-transparent rounded-full shadow-lg hover:shadow-xl hover:border-purple-400 border border-slate-300"
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
    <div className="top-0 absolute grid grid-cols-3 gap-4 justify-items-center content-center w-screen py-3 bg-gradient-to-r from-indigo-100 to-fuchsia-100">
      {/* left bar */}
      <div className=" text-center ">
        <span className="lg:text-3xl text-lg font-bold text-blue-900 font-mono">
          Social Media
        </span>
      </div>
      {/* middle bar */}
      <div className="hidden md:block lg:block">
        <Search />
      </div>
      {/* right bar */}

      <div className="lg:flex items-center justify-center font-mono hidden">
        {/* links */}
        <div>
          <span className="mr-5 text-fuchsia-800 font-semibold hover:text-purple-900 cursor-pointer">
            Homepage
          </span>
          <span className="mr-5 text-fuchsia-800 font-semibold hover:text-purple-900 cursor-pointer">
            Profile
          </span>
        </div>
        {/* icons */}
        <div className="flex justify-center items-center text-fuchsia-900 md:hidden">
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
        <img
          className="w-10 h-10 rounded-full ml-5 shadow-xl hover:scale-125 transition delay-150 duration-300 ease-in-out"
          src={userImg}
          alt="user image"
        />
      </div>

      {toggle ? (
        <div onClick={() => setToggle(false)}>
          <img
            className="w-6 h-6 right-0 absolute mr-3"
            src={close}
            alt="close"
          />
        </div>
      ) : (
        <div onClick={() => setToggle(true)}>
          <img
            className="w-6 h-6 right-0 absolute mr-3"
            src={menu}
            alt="menu"
          />
        </div>
      )}
      {toggle && (
        <div className="flex flex-col justify-center align mt-5">
          <div className="mr-10 my-4">
            <Search />
          </div>

          <div className="flex flex-col items-center justify-center font-mono">
            {/* links */}
            <div className="flex flex-col items-end justify-end">
              <span className="mr-5 text-fuchsia-800 font-semibold hover:text-purple-900 cursor-pointer">
                Homepage
              </span>
              <span className="mr-5 text-fuchsia-800 font-semibold hover:text-purple-900 cursor-pointer">
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
            <img
              className="w-10 h-10 rounded-full ml-5 shadow-xl hover:scale-125 transition delay-150 duration-300 ease-in-out"
              src={userImg}
              alt="user image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
