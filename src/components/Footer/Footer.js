import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <a href="/">
          <img src="https://www.svgrepo.com/show/238317/refresh-reload.svg" />
          Refresh
        </a>
        <a href="/stopwatch">
          <img src="https://cdn-icons-png.flaticon.com/512/31/31048.png" />
          Stopwatch
        </a>
        <a href="/timer">
          <img src="http://cdn.onlinewebfonts.com/svg/img_568889.png" />
          Timer
        </a>
      </div>
    </div>
  );
}

export default Footer;
