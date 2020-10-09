import React from "react";
import "../css/RecommendedVideos.css";
import VideoCard from "./VideoCard";
import mahdi from "../images/mahdi.jpg";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recomended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="How To Make Your Desktop Look Aesthetic"
          views="1.3M Views"
          timestamp="17 days ago"
          image={img1}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="Covid-19 : à l'hôpital de Toulouse, une situation tendue qui dure"
          views="256K Views"
          timestamp="10 days ago"
          image={img2}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="🔴Covid-19: Lille, Lyon, Grenoble et Saint-Étienne passent en ALERTE MAXIMALE"
          views="48K Views"
          timestamp="12 days ago"
          image={img3}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="Bryan Adams - Heaven (Cover by Dave Winkler & Jada Facer)"
          views="2.3M Views"
          timestamp="27 days ago"
          image={img5}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="10 songs you've heard but don't know the name of"
          views="53K Views"
          timestamp="13 days ago"
          image={img6}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="Become a front-end web developer"
          views="2.6M Views"
          timestamp="7 days ago"
          image={mahdi}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="How To Make Your Desktop Look Aesthetic"
          views="1.3M Views"
          timestamp="17 days ago"
          image={img1}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="Covid-19 : à l'hôpital de Toulouse, une situation tendue qui dure"
          views="256K Views"
          timestamp="10 days ago"
          image={img2}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="🔴Covid-19: Lille, Lyon, Grenoble et Saint-Étienne passent en ALERTE MAXIMALE"
          views="48K Views"
          timestamp="12 days ago"
          image={img3}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="Bryan Adams - Heaven (Cover by Dave Winkler & Jada Facer)"
          views="2.3M Views"
          timestamp="27 days ago"
          image={img5}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="10 songs you've heard but don't know the name of"
          views="53K Views"
          timestamp="13 days ago"
          image={img6}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="How To Make Your Desktop Look Aesthetic"
          views="1.3M Views"
          timestamp="17 days ago"
          image={img1}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="Covid-19 : à l'hôpital de Toulouse, une situation tendue qui dure"
          views="256K Views"
          timestamp="10 days ago"
          image={img2}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="10 songs you've heard but don't know the name of"
          views="53K Views"
          timestamp="13 days ago"
          image={img6}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="🔴Covid-19: Lille, Lyon, Grenoble et Saint-Étienne passent en ALERTE MAXIMALE"
          views="48K Views"
          timestamp="12 days ago"
          image={img3}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
        <VideoCard
          title="Bryan Adams - Heaven (Cover by Dave Winkler & Jada Facer)"
          views="2.3M Views"
          timestamp="27 days ago"
          image={img5}
          channel="Mahdi Bouaziz"
          channelImage={mahdi}
        />{" "}
      </div>
    </div>
  );
}

export default RecommendedVideos;
