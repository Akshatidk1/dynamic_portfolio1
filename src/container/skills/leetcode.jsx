import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Skills.scss";

const Leetcode = () => {
  const [leetcode, setLeetcode] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch('/leetcodeData.json')
      .then(response => response.json())
      .then(data => setLeetcode(data))
      .catch(error => console.error('Error fetching leetcode data:', error));
  }, []);

  return (
    <div className="app__skills-acc-leet aligned-img-container">
      {leetcode.map((code) => (
        <motion.div
          whileHover={{ scale: [1, 1.05] }}
          transition={{ duration: 0.25 }}
          className="app__skills-acc-leet-item"
          key={code.name}
        >
          <img className={code.name == 'Python' ? 'width-75' : ''} src={code.icon} alt={code.name} />
          <p className="p-text">{code.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Leetcode;
