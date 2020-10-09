import React from "react";
import "../css/SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import mahdi from "../images/mahdi.jpg";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={mahdi}
        channel="Mahdi Bouaziz"
        verified
        subs="654K"
        noOfVideos={235}
        description="You can find awesome videos programming and learning guitars, I'am a web developper, a data scientest and a guitar player."
      />
      <hr />
      <VideoRow
        views="1.2M"
        subs="659K"
        description="Do you want to become a web developer! it's your chance"
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Become a web developer"
        image={mahdi}
      />
      <VideoRow
        views="1.2M"
        subs="659K"
        description="Do you want to become a web developer! it's your chance"
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Become a web developer"
        image={mahdi}
      />{" "}
      <VideoRow
        views="1.2M"
        subs="659K"
        description="Do you want to become a web developer! it's your chance"
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Become a web developer"
        image={mahdi}
      />{" "}
      <VideoRow
        views="1.2M"
        subs="659K"
        description="Do you want to become a web developer! it's your chance"
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Become a web developer"
        image={mahdi}
      />{" "}
      <VideoRow
        views="1.2M"
        subs="659K"
        description="Do you want to become a web developer! it's your chance"
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Become a web developer"
        image={mahdi}
      />
    </div>
  );
}

export default SearchPage;
