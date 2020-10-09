import React from "react";
import "../css/SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import mahdi from "../images/mahdi.jpg";
import VideoRow from "./VideoRow";

import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";

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
        views="2.2M"
        subs="650K"
        description="This is another minimal theme for desktop. I tried to keep it kind of simple to match the beautiful wallpaper. Hope you guys like it."
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="How To Make Your Desktop Look Aesthetic"
        image={img1}
      />
      <VideoRow
        views="3.2M"
        subs="500K"
        description="La France a enregistré 66 décès supplémentaires dus au coronavirus, ce qui porte le bilan total à 32.365 morts depuis le début de l'épidémie, montrent les données quotidiennes publiées le 6 octobre par le ministère de la Santé. À Toulouse."
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Covid-19 : à l'hôpital de Toulouse, une situation tendue qui dure"
        image={img2}
      />{" "}
      <VideoRow
        views="820K"
        subs="429K"
        description="Do you want to become a web developer! it's your chance"
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Become a web developer"
        image={mahdi}
      />{" "}
      <VideoRow
        views="1.2M"
        subs="659K"
        description="Olivier Véran, ministre de la Santé, et Bruno Le Maire, en charge de l’Economie et des Finances, ont fait un point sur l’épidémie de Covid-19, les mesures de lutte contre le virus et de relance économique."
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="🔴Covid-19: Lille, Lyon, Grenoble et Saint-Étienne passent en ALERTE MAXIMALE"
        image={img3}
      />{" "}
      <VideoRow
        views="4.2M"
        subs="652K"
        description="'Heaven' - Bryan Adams
Acoustic Version by Dave Winkler and Jada Facer"
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Bryan Adams - Heaven (Cover by Dave Winkler & Jada Facer)"
        image={img5}
      />
      <VideoRow
        views="1M"
        subs="69K"
        description="10 SONGS YOU'VE HEARD BUT DON'T KNOW THE NAME OF."
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="10 songs you've heard but don't know the name of"
        image={img6}
      />
      <VideoRow
        views="2.2M"
        subs="650K"
        description="This is another minimal theme for desktop. I tried to keep it kind of simple to match the beautiful wallpaper. Hope you guys like it."
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="How To Make Your Desktop Look Aesthetic"
        image={img1}
      />
      <VideoRow
        views="3.2M"
        subs="500K"
        description="La France a enregistré 66 décès supplémentaires dus au coronavirus, ce qui porte le bilan total à 32.365 morts depuis le début de l'épidémie, montrent les données quotidiennes publiées le 6 octobre par le ministère de la Santé. À Toulouse."
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Covid-19 : à l'hôpital de Toulouse, une situation tendue qui dure"
        image={img2}
      />{" "}
      <VideoRow
        views="820K"
        subs="429K"
        description="Do you want to become a web developer! it's your chance"
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Become a web developer"
        image={mahdi}
      />{" "}
      <VideoRow
        views="1.2M"
        subs="659K"
        description="Olivier Véran, ministre de la Santé, et Bruno Le Maire, en charge de l’Economie et des Finances, ont fait un point sur l’épidémie de Covid-19, les mesures de lutte contre le virus et de relance économique."
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="🔴Covid-19: Lille, Lyon, Grenoble et Saint-Étienne passent en ALERTE MAXIMALE"
        image={img3}
      />{" "}
      <VideoRow
        views="4.2M"
        subs="652K"
        description="'Heaven' - Bryan Adams
Acoustic Version by Dave Winkler and Jada Facer"
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="Bryan Adams - Heaven (Cover by Dave Winkler & Jada Facer)"
        image={img5}
      />
      <VideoRow
        views="1M"
        subs="69K"
        description="10 SONGS YOU'VE HEARD BUT DON'T KNOW THE NAME OF."
        timestamp="60 seconds ago"
        channel="Mahdi Bouaziz"
        title="10 songs you've heard but don't know the name of"
        image={img6}
      />
    </div>
  );
}

export default SearchPage;
