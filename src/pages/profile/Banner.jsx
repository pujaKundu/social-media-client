import ProfileImg from '../../assets/sheldon.jfif'

const Banner = () => {
  return (
    <div className=" mb-64 bg-gradient-to-b from-gray-700 to-white pb-4 ">
      <div className="mx-60">
        <img
          style={{ height: "400px", width: "100vw", zIndex: "1" }}
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y292ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
          alt=""
        />
        <img
          style={{
            zIndex: "2",
          }}
          className="-mt-28 rounded-full w-52 h-52 ml-5"
          src={ProfileImg}
          alt=""
        />
      </div>
      <div style={{ marginLeft: "36%" }} className="flex flex-col -mt-20 pb-10">
        <p className="font-bold text-xl">Sheldon Cooper</p>
        <p className="text-slate-500 font-semibold">232 friends</p>
      </div>
    </div>
  );
};

export default Banner;
