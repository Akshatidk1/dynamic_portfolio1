import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import data from '../../assets/json/profile.json';

const About = () => { 

  return (
    <>
      <h2 className="head-text font_style">
        <span>{data.about.first}</span>{data.about.second} <br />
        {data.about.third} <span>{data.about.fourth}</span>
      </h2>

      <div className="app__profiles">
        {data.experience.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item card bg-dark"
            key={data.about + index}
          >
           
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.position}
            </h2>
            <h6 className="" style={{ marginTop: 5 }}>
              {about.location}
            </h6>
            <h6 className="" style={{ marginTop: 5 }}>
              {about.duration}
            </h6>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.responsibilities}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
