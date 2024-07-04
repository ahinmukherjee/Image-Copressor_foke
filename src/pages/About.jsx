import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

// import profile1 from "../media/ForAboutPage/profile1.jpg";
import profile1 from "../media/ForAboutPage/ahinDp.jpg";
// import profile2 from "../media/ForAboutPage/profile2.jpg";
import profile2 from "../media/ForAboutPage/myDp.jpg";
// import profile3 from "../media/ForAboutPage/profile3.jpg";
import profile3 from "../media/ForAboutPage/sayandipDp.jpg";
// import profile4 from "../media/ForAboutPage/profile4.jpg";
import profile4 from "../media/ForAboutPage/rabiDp.jpg";

import "../style/About.css";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen);

    return (
        <div id="about_page">
            <div id="first_container">
                <div id="slides_container">
                    <div id="slide">
                        <div id="thanks">
                            Thank you for choosing us. We appreciate your
                            support !
                        </div>
                        <p>
                            Your experience is highly valued by us, and we would
                            greatly appreciate your feedback through a star
                            rating. Your input helps us improve and serve you
                            better. If you enjoyed your time here, please
                            consider sharing our website with others to help
                            them discover the value we offer. Your support means
                            the world to us. Thank you for being a part of our
                            community !
                        </p>
                        {/* <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rat_btn"
                            >
                            Let's Try{" "}
                            <MdKeyboardArrowRight className="rat_iconStyle" />
                        </button> */}
                        {/* <div
                            className={`about_feedback  ${isOpen ? "show" : ""
                            }`}
                            >
                            {" "}
                            </div> */}
                        <Link to="/compress" className="rat_btn">
                            Let's Try{" "}
                            <MdKeyboardArrowRight className="rat_iconStyle" />        
                        </Link>
                    </div>

                </div>
                <div id="slide_p_and_botton_for_mobile"> {/* this div only use in mobile view */}
                    <p>
                        Your experience is highly valued by us, and we would
                        greatly appreciate your feedback through a star
                        rating. Your input helps us improve and serve you
                        better. If you enjoyed your time here, please
                        consider sharing our website with others to help
                        them discover the value we offer. Your support means
                        the world to us. Thank you for being a part of our
                        community !
                    </p>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="mobile_rat_btn"
                    >
                        Let's Try{" "}
                        <MdKeyboardArrowRight className="mobile_rat_iconStyle" />
                    </button>
                </div>

                <div id="background"></div>
            </div>

            <div id="second_container">
                <h1>Our Team</h1>
                <div id="team_container">
                    <div id="team_card">
                        <center id="profile">
                            <img src={profile1} />
                        </center>
                        <div id="name_container">
                            <p id="name">AHIN MUKHERJEE</p>
                            <hr></hr>
                            <p id="post">
                                Software And Webdeveloper, Graphic Designer,
                                Photo Video editor
                            </p>
                            <div id="bio">
                                Hello my name is Ahin Mukherjee. I am from
                                Kolkata. I have 1 complete full stack
                                development experience. I have a basic
                                photo,video editing skill. And also i have some
                                drawing skills like portrait drawing, digital
                                painting. I finish my graduation on BCA form
                                Panskura Banamali college in West Bengal. My
                                programming skills are C, C++, Java, Python,
                                Javascript, Css, Html etc.
                            </div>
                            <div id="persion_contact">
                                <FiMail className="persion_cont_link_mail" />
                                <FaGithub id="persion_cont_link" />
                                <FaFacebookSquare id="persion_cont_link" />
                                <FiInstagram id="persion_cont_link" />
                            </div>
                        </div>
                    </div>
                    <div id="team_card">
                        <center id="profile">
                            <img src={profile2} />
                        </center>
                        <div id="name_container">
                            <p id="name">SUSANTA SAMANTA</p>
                            <hr></hr>
                            <p id="post">
                                Software And Webdeveloper, Graphic Designer,
                                Photo Video editor
                            </p>
                            <div id="bio">
                                Hello my name is Susanta Samanta. I am from
                                Kolkata. I have 1 complete full stack
                                development experience. I have a basic
                                photo,video editing skill. And also i have some
                                drawing skills like portrait drawing, digital
                                painting. I finish my graduation on BCA form
                                Panskura Banamali college in West Bengal. My
                                programming skills are C, C++, Java, Python,
                                Javascript, Css, Html etc.
                            </div>
                            <div id="persion_contact">
                                <FiMail className="persion_cont_link_mail" />
                                <FaGithub id="persion_cont_link" />
                                <FaFacebookSquare id="persion_cont_link" />
                                <FiInstagram id="persion_cont_link" />
                            </div>
                        </div>
                    </div>
                    <div id="team_card">
                    <center id="profile">
                            <img src={profile3} />
                        </center>
                        <div id="name_container">
                            <p id="name">SAYANDIP BAG</p>
                            <hr></hr>
                            <p id="post">
                                Software And Webdeveloper, Graphic Designer,
                                Photo Video editor
                            </p>
                            <div id="bio">
                                Hello my name is Sayandip Bag. I am from
                                Kolkata. I have 1 complete full stack
                                development experience. I have a basic
                                photo,video editing skill. And also i have some
                                drawing skills like portrait drawing, digital
                                painting. I finish my graduation on BCA form
                                Panskura Banamali college in West Bengal. My
                                programming skills are C, C++, Java, Python,
                                Javascript, Css, Html etc.
                            </div>
                            <div id="persion_contact">
                                <FiMail className="persion_cont_link_mail" />
                                <FaGithub id="persion_cont_link" />
                               <a href="https://www.facebook.com/share/AH9Znm55mEqETcpf/?mibextid=qi2Omg"><FaFacebookSquare id="persion_cont_link" /></a>
                                <FiInstagram id="persion_cont_link" />
                            </div>
                        </div>
                    </div>
                    <div id="team_card">
                    <center id="profile">
                            <img src={profile4} />
                        </center>
                        <div id="name_container">
                            <p id="name">RABI SAMANTA</p>
                            <hr></hr>
                            <p id="post">
                                Software And Webdeveloper, Graphic Designer,
                                Photo Video editor
                            </p>
                            <div id="bio">
                                Hello my name is Rabi Samanta. I am from
                                Kolkata. I have 1 complete full stack
                                development experience. I have a basic
                                photo,video editing skill. And also i have some
                                drawing skills like portrait drawing, digital
                                painting. I finish my graduation on BCA form
                                Panskura Banamali college in West Bengal. My
                                programming skills are C, C++, Java, Python,
                                Javascript, Css, Html etc.
                            </div>
                            <div id="persion_contact">
                                <FiMail className="persion_cont_link_mail" />
                                <FaGithub id="persion_cont_link" />
                                 <a href="https://www.facebook.com/share/iYFWd5qN4zSo4K2B/?mibextid=qi2Omg"><FaFacebookSquare id="persion_cont_link" /></a>
                                <a href="https://www.instagram.com/rabi.samanta_129?igsh=MWxibzh6MmJ6cDNjNg=="><FiInstagram id="persion_cont_link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="third_container">
                <h1>Contact Us</h1>
                <div id="contact_link_container">
                    <div id="logo_container">
                        <FaGoogle />
                    </div>
                    <div id="logo_container">
                        <SiWhatsapp />
                    </div>
                    <div id="logo_container">
                        <FaXTwitter />
                    </div>
                    <div id="logo_container">
                        <FaFacebookF />
                    </div>
                    <div id="logo_container">
                        <FiInstagram />
                    </div>
                    <div id="logo_container">
                        <FaLinkedinIn />
                    </div>
                </div>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Security Policy</p>
                <p>Cookie Policy</p>
                <div id="background_2"></div>
                <div id="background_3"></div>
            </div>
        </div>
    );
};

export default About;
