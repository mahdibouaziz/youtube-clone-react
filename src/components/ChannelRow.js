import React from "react";
import "../css/ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleRounded";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar alt={channel} src={image} className="channelRow__logo" />
      <div className="channelRow__text">
        <h4>
          {channel}{" "}
          {verified && <VerifiedIcon className="channelRow__text__verified" />}
        </h4>
        <p>
          {subs} subscribers - {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
