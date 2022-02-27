// Modules Imports
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdHome,
  MdOutlineTextSnippet,
  MdViewInAr,
  MdSkateboarding,
  MdOutlineContactPage,
  MdAttachMoney,
} from 'react-icons/md';

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center justify-items-center mb-2 border-y border-black">
      <div className="left-section">
        <ul>
          {[
            [<MdHome className="inline" />, '/'],
            [<MdOutlineTextSnippet className="inline" />, '/entrys'],
            [<MdViewInAr className="inline" />, '/'],
          ].map(([title, url], i) => {
            return (
              <li key={i} className="inline text-center">
                <Link
                  to={url}
                  className="underline hover:text-sky-500 font-bold pr-6 pl-1 text-2xl"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="center-section">
        <ul>
          <li className="main-text text-6xl">Doom Blog</li>
        </ul>
      </div>
      <div className="right-section">
        <ul>
          {[
            [<MdSkateboarding className="inline" />, '/about'],
            [<MdOutlineContactPage className="inline" />, '/contact'],
            [<MdAttachMoney className="inline" />, '/donate'],
          ].map(([title, url], i) => {
            return (
              <li key={i} className="inline text-center">
                <Link
                  to={url}
                  className="underline hover:text-sky-500 font-bold inline pe-1 pl-6 text-2xl"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
