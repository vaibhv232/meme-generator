import React from "react";
import logo from "./images/logo.png"
export default function Header() {
  return(
    <div className="header">
        <div className="header--head">
            <div>
            <img src = {logo} className="logo"/></div>
            <div><span id="mg">Meme Generator</span></div>
        </div>
        <div className="header--sidebar">
        <div><span id ="rp">React Project - III</span></div>
        </div>
    </div>

  )
}
