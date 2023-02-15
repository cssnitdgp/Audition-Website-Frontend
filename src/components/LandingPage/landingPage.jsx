import React, { useState } from "react";

import { FaYoutube, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import axios from "axios";
import { FiArrowUpRight } from "react-icons/fi";
import { useGoogleLogin } from "@react-oauth/google";

const Social = ({ Icon, theme, href }) => {
  return (
    <div className='social'>
      <a href={href}>
        <Icon />
      </a>
    </div>
  );
};

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
      {/* <div className='header'>
        <img src={logo} alt='CSS' className='csslogo' />
        {isUserLoggedIn ? (
          <p>
            Hi, <strong>{currentUser.name}</strong>
          </p>
        ) : (
          <button className='btn primary'>
            <span className='btn_content'>
              <span className='btn_text' onClick={login}>
                {isUserLoggedIn ? "Fill the Form" : "Register"}
              </span>
              <span className='btn_icon'>
                <FiArrowUpRight />
              </span>
            </span>
          </button>
        )}
      </div> */}
      <section className='nav'>
        <div className='nav_item'>
          <h4 className='nav_link'>Web Design</h4>
        </div>
        <div className='nav_item'>
          <h4 className='nav_link'>Graphic Design</h4>
        </div>
        <div className='nav_item'>
          <a href='/' className='nav_logo'>
            <img height='60' width='60' src='/favicon.png' />
          </a>
        </div>
        <div className='nav_item'>
          <h4 className='nav_link'>Alumni Interaction</h4>
        </div>
        <div className='nav_item'>
          <h4 className='nav_link'>Event Management</h4>
        </div>
      </section>
      <div className='home_first'>
        <div>
          <h1 className='color-secondary'>We</h1>
          <h1>
            Are CSS<span className='color-secondary'>!</span>
          </h1>
          <div className='auditions_live margin-top-medium'>
            <svg height='50' width='50' className='blinking'>
              <circle cx='25' cy='25' r='5' fill='red' />
              Sorry, your browser does not support inline SVG.
            </svg>
            <h2 className='headBlack'>
              Auditions&nbsp;are&nbsp;
              <span className='color-secondary'>Live</span>!
            </h2>
          </div>
        </div>
        <div className='home_first_secondary'>
          <p className='home_first_text margin-top-large'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            dolor tempus, tincidunt purus in, venenatis magna. Curabitur
            scelerisque sem sed ex convallis ultricies. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Integer tempor lorem ornare sagittis efficitur. Ut quis maximus
            turpis. Sed molestie libero nunc, id tincidunt arcu egestas non.
          </p>

          <div className='home_first_cta margin-top-medium margin-bottom-medium'>
            {isUserLoggedIn ? null : (
              <div onClick={login} className='btn btn_primary'>
                <span className='btn_content'>
                  <span className='btn_text'>Register</span>
                  <span className='btn_icon'>
                    <FiArrowUpRight />
                  </span>
                </span>
              </div>
            )}

            <div
              onClick={isUserLoggedIn ? () => null : login}
              className='btn btn_secondary'
            >
              <span className='btn_content'>
                <span className='btn_text'>Fill the Form</span>
                <span className='btn_icon'>
                  <FiArrowUpRight />
                </span>
              </span>
            </div>
            <div className='home_first_social'>
              <Social
                href='https://www.facebook.com/profile.php?id=100089945320887'
                theme='primary'
                Icon={FaFacebookF}
              />
              <Social
                href='https://www.instagram.com/css_nitdgp/'
                theme='primary'
                Icon={SiInstagram}
              />
              <Social
                href='https://www.linkedin.com/company/css-nitdgp/'
                theme='primary'
                Icon={FaLinkedinIn}
              />
              <Social
                href='https://www.youtube.com/@cssnitdgp'
                theme='primary'
                Icon={FaYoutube}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='home_second'>
        <img className='home_second_img' src='/home.jpeg' />
      </div>
    </>
  );
};

export default LandingPage;
