import React from "react";
import "./Home.css"
import GalleryWrapper from "./GalleryWrapper";
export default function Home() {
    return (
      <div className="Homediv">
        <div className="Banner">
          <img className="BannerImage" src="https://picsum.photos/id/1018/1000/600/" alt="Banner"></img>
          <div className="BannerText">
            <h2>Lol Lmao even</h2>
          </div>
        </div>
        <GalleryWrapper />
      </div>
    )
  }