import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by <strong> Elle Lynn</strong> and is
      open-sourced on
      <a
        href="https://github.com/ElleLynn08/weather-app-react"
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
        href="https://inquisitive-semifreddo-2ab583.netlify.app/"
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
