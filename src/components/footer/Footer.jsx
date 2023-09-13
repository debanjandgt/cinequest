import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import {SiLeetcode,SiGeeksforgeeks} from "react-icons/si";
import {AiFillGithub} from "react-icons/ai";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { useHref } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                    Made with ❤️ by Debanjan Guha Thakurata
                </div>
                <div className="socialIcons">
                <span className="icon" onClick={() => window.location.href = 'https://www.instagram.com/thedebanjan/'}>
                <FaInstagram />
                </span>
                    <span className="icon" onClick={() => window.location.href = 'https://twitter.com/debanjandgt'}>
                        <FaTwitter />
                    </span>
                    <span className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/debanjan-guha-thakurata/'}>
                        <FaLinkedin />
                    </span>
                    <span className="icon" onClick={() => window.location.href = 'https://leetcode.com/debanjandgt/'}>
                        <SiLeetcode />
                    </span>
                    <span className="icon" onClick={() => window.location.href = 'https://auth.geeksforgeeks.org/user/debanjandgt/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user'}>
                        <SiGeeksforgeeks />
                    </span>
                    <span className="icon" onClick={() => window.location.href = 'https://github.com/debanjandgt'}>
                        <AiFillGithub />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;