const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video w-full pt-[20%] p-10 lg:py-34 sm:mt-4 sm:py-8 md:py-10 lg:py-32 absolute text-white bg-gradient-to-r from-black flex flex-col justify-center items-start">
      <h1 className="text-3xl md:text-2xl md:mt-12 pb-3 font-bold">{title}</h1>
      <p className="flex cs:invisible  sm:visible text-xs w-1/4  lg:w-1/4 md:flex md:flex-wrap md:text-xs sm:text-xs ">
        {overview}
      </p>
      <div className="justify-between gap-5  lg:py-34 md:m-0 flex pt-4 w-[15rem]">
        <button className="bg-white text-black md:inline-block md:mt-2 p-4 px-12 text-xl bg-opacity-500 rounded-lg">
          ▶️ Play
        </button>
        <button className="md:inline-block md:mt-2 md:ml-1 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;


