import React, { useState } from "react";
import {
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineFacebook,
	AiOutlineYoutube,
} from "react-icons/ai";
import axios from "axios";
import { FiArrowUpRight } from "react-icons/fi";
import { useGoogleLogin } from "@react-oauth/google";

const LandingPage = () => {
	const [currentUser, setCurrentUser] = useState("");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	const login = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			const res = await axios.get(
				"https://www.googleapis.com/oauth2/v3/userinfo",
				{
					headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
				}
			);

			setCurrentUser(res.data);
			setIsUserLoggedIn(true);
		},
		onError: (errorResponse) => {
			console.log(errorResponse);
		},
	});

	console.log(currentUser);
	return (
		<>
      <section className='nav'>
		<div className="leftnav">
			<div className='nav_item'>
			<h4 className='nav_link one'>Web Design</h4>
			</div>
			<div className='nav_item'>
			<h4 className='nav_link two'>Graphic Design</h4>
			</div>
		</div>
        <div className='nav_item'>
          <a href='/' className='nav_logo'>
            <img height='60' width='60' src='/favicon.png' alt="CSS" />
          </a>
        </div>
		<div className="rightnav">
			<div className='nav_item'>
			<h4 className='nav_link three'>Alumni Interaction</h4>
			</div>
			<div className='nav_item'>
			<h4 className='nav_link four'>Event Management</h4>
			</div>
		</div>

      </section>
			<div className="mainContainer">
				<div className="leftContent">
					<h1 className="headPurple">We</h1>
					<h1 className="headBlack">Are&nbsp;CSS<span className="headPurple">!</span></h1>
					<div className="auditions_live">
						<svg height="50" width="50" className="blinking">
							<circle cx="25" cy="25" r="5" fill="red" />
							Sorry, your browser does not support inline SVG.
						</svg>
						<h2 className="headBlack">Auditions&nbsp;are&nbsp;<span className="headPurple">Live</span>!</h2>
					</div>
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
						<button className="btn primary regorfill" onClick={login}>
							{" "}
							<span className="btn_content">
								<span className="btn_text" >
									{isUserLoggedIn ? "Fill the Form" : "Register"}
								</span>
								<span className="btn_icon">
									<FiArrowUpRight />
								</span>
							</span>
						</button>
						<a
							target="_blank"
							href="https://www.linkedin.com/company/css-nitdgp/"
							rel="noreferrer"
						>
							<AiOutlineLinkedin className=" socialIcons" />
						</a>
						<a
							target="_blank"
							href="https://www.instagram.com/css_nitdgp/"
							rel="noreferrer"
						>
							<AiOutlineInstagram className="socialIcons" />
						</a>
						<a
							target="_blank"
							href="https://www.facebook.com/profile.php?id=100089945320887"
							rel="noreferrer"
						>
							<AiOutlineFacebook className=" socialIcons" />
						</a>
						<a
							target="_blank"
							href="https://www.youtube.com/@cssnitdgp"
							rel="noreferrer"
						>
							<AiOutlineYoutube className=" socialIcons" />
						</a>
					</div>
				</div>
			</div>
			<div className='home_second'>
        		<img className='home_second_img' src='/home.jpeg' alt="homeimg" />
      		</div>
		</>
	);
};

export default LandingPage;
