import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  console.log(snippet);
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-1 m-3 w-60 cursor-pointer shadow ">
      <img
        alt="thumbnail"
        src={thumbnails?.medium?.url}
        className="rounded-lg hover:rounded-none"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;