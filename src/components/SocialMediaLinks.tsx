// components/SocialMediaLinks.tsx
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 fixed right-20 top-1/4 z-50">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 hover:text-blue-600"
      >
        <FaFacebook size={40} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 hover:text-[#775d9c]"
      >
        <FaInstagram size={40} />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 hover:text-blue-600"
      >
        <FaLinkedin size={40} />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 hover:text-red-700"
      >
        <FaYoutube size={40} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
