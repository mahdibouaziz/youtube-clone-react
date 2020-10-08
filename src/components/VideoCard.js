import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../css/VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img
        className="videoCard__thumbnail"
        src={image}
        alt={`${title} video`}
      />
      <div className="videoCard__info">
        <Avatar alt={channel} src={channelImage} className="videoCard_avatar" />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} - {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
