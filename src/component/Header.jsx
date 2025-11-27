"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Header = () => {
  const images = [
    {
      original: "/asset/patrick-tomasso-QMDap1TAu0g-unsplash.jpg",
      thumbnail: "/asset/patrick-tomasso-QMDap1TAu0g-unsplash.jpg",
      description: "Digital Dream",
    },
    {
      original: "/asset/evie-s-kqJfP-lrl-8-unsplash.jpg",
      thumbnail: "/asset/evie-s-kqJfP-lrl-8-unsplash.jpg",
      description: "Retro",
    },
    {
      original: "/asset/birmingham-museums-trust-5EUh-tq31eA-unsplash.jpg",
      thumbnail: "/asset/birmingham-museums-trust-5EUh-tq31eA-unsplash.jpg",
      description: "Forest Whisper",
    },
    {
      original: "/asset/birmingham-museums-trust-pWVJHDiAonU-unsplash.jpg",
      thumbnail: "/asset/birmingham-museums-trust-pWVJHDiAonU-unsplash.jpg",
      description: "Silence",
    },
    {
      original: "/asset/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg",
      thumbnail: "/asset/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg",
      description: "Blossom Sculpture",
    },
  ];

  return (
    <div className="max-w-full  mx-auto mt-4 rounded-2xl overflow-hidden shadow-lg">
      <ImageGallery
        items={images}
        showThumbnails={true}
        showPlayButton={false}
        showFullscreenButton={true}
        autoPlay={true}
        slideInterval={4000}
        showNav={true}
        showBullets={true}
      />
    </div>
  );
};

export default Header;
