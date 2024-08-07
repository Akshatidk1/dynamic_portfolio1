import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import data from '../assets/json/profile.json'
import {
  FaFacebookF,
  FaGithub,
  FaHackerrank,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialData = [
  {
    Icon: FaLinkedinIn,
    href: data.linkedin,
    label: "LinkedIn",
  },
  {
    Icon: FaGithub,
    href: data.github,
    label: "Github",
  },
  {
    Icon: SiLeetcode,
    href: "https://leetcode.com/",
    label: "LeetCode",
  },
  {
    Icon: FaHackerrank,
    href: "https://www.hackerrank.com/",
    label: "HackerRank",
  },
  {
    Icon: BsInstagram,
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
];

const SocialMedia = () => {
  return (
    <div className="app__social">
      {socialData.map((item) => (
        <div key={item.label}>
          <a href={item.href} target="_blank">
            <item.Icon />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
