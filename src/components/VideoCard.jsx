const VideoCard = ({ info }) => {
  return (
    <div className="m-2 p-2 w-60 bg-gray-400 hover:shadow-xl rounded-lg">
      {/* Now we will generate youtube video card using the info prop */}

      <img
        className="rounded-lg "
        src={info?.snippet?.thumbnails?.medium?.url}
        alt={info?.snippet?.title}
      />
      <h3 className="font-bold ">{info?.snippet?.title}</h3>
      {/* <p className=" ">{info?.snippet?.channelTitle}</p> */}
    </div>
  );
};

export default VideoCard;
