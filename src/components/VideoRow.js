import React from "react";
import "../css/VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img className="videoRow__image" src={image} alt={title} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} -{" "}
          <span className="videoRow_subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>{" "}
          <span className="videoRow__viewsNumber">{views}</span> - {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
