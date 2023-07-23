import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by <strong> Míchelle Findley</strong> and is
      open-sourced on
      <a
        href="https://github.com/MFindley08/Vanilla_WeatherApp"
        className="reference-links"
        id="gitHub"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        GitHub{" "}
      </a>
      and hosted on{" "}
      <a
        href="https://weather-in-the-air5678.netlify.app/"
        className="reference-links"
        id="netlify"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
