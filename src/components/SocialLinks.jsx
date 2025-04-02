import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../constants';

const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 mt-4">
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center cursor-pointer"
          onClick={() => window.open(social.link, "_blank")}
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-5 h-5 object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks; 