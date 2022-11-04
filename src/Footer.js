// import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="col-12 p-2 text-center bottom-item">
      <a
        href="https://github.com/lenaMarilenahttps://github.com/lenaMarilena/ReactHomework1"
        target="_blank"
        rel="noopener noreferrer"
        className="source-link"
      >
        Open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://fancy-fairy-a4a57b.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="source-link"
      >
        hosted on Netlify
      </a>{" "}
      <br />
      Coded by Olena Ovcharenko
    </div>
  );
}