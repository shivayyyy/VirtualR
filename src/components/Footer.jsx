import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index";

const Footer = () => {
  return (
    <footer className="border-t py-10 border-neutral-700 mt-20">
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="mb-4 text-md font-semibold">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((list, index) => (
              <li key={index}>
                <a
                  className="transition duration-200 hover:text-white text-neutral-600"
                  href={list.href}
                >
                  {list.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-md font-semibold">Platforms</h3>
          <ul className="space-y-2">
            {platformLinks.map((list, index) => (
              <li key={index}>
                <a
                  className="transition duration-200 hover:text-white text-neutral-600"
                  href={list.href}
                >
                  {list.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h3 className="mb-4 text-md font-semibold">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((list, index) => (
              <li key={index}>
                <a
                  className="transition duration-200 hover:text-white text-neutral-600"
                  href={list.href}
                >
                  {list.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
