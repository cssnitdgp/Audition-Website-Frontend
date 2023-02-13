import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
const landingPage = () => {
  return (
    <>
      <img src="../logo.png" />
      <div className="mainContainer">
        <div className="leftContent">
          <h1 className="headBlack">WE</h1>
          <h1 className="headPurple">ARE CSS</h1>
          <h2 className="headBlack">Auditions are Live</h2>
        </div>
        <div className="rightContent">
          <p className="aboutContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptates exercitationem ut. Tenetur ipsam odio deserunt porro
            reprehenderit minus consequuntur laborum, repellat ex ipsum quo
            voluptates delectus fugiat sapiente ducimus a non ut quae voluptate
            vitae ea facere id. Veniam quaerat ex id harum ipsam exercitationem
            assumenda dolores, necessitatibus at.
          </p>
          <div className="socialIconDiv">
            <button className="btn primary">
              {" "}
              <span className="btn_content">
                <span className="btn_text">Register</span>
                <span className="btn_icon">
                  <FiArrowUpRight />
                </span>
              </span>
            </button>
            <AiOutlineInstagram className="socialIcons" />
            <AiOutlineLinkedin className="socialIcons" />
            <AiOutlineTwitter className="socialIcons" />
            <AiOutlineYoutube className="socialIcons" />
          </div>
        </div>
      </div>
    </>
  );
};

export default landingPage;
