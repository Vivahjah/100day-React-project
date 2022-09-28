import React from "react";
import {BiSearch} from "react-icons/bi";
import {TbActivityHeartbeat} from "react-icons/tb";
import { GrLocation } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import { TbPhone } from 'react-icons/tb'
import { FiShield, FiLinkedin, FiFacebook, FiTwitter,FiInstagram, FiYoutube } from 'react-icons/fi'

export const nav = [
  {
    text: "About",
    path: "/about",
  },
  {
    text: "How it works",
    path: "/works",
  },
  {
    text: "Pricing",
    path: "/pricing",
  },
  {
    text: "Support",
    path: "/support",
  },
  {
    text: "Contact us",
    path: "/contacts",
  },
];
export const footerlinks = [
  
  {
    text: "SCAN",
    path: "/scan",
  },
  {
    text: "MONITOR",
    path: "/monitor",
  },
  {
    text: "PROTECT",
    path: "/protect",
  },
  {
    text: "TERMS AND CONDITIONS",
    path: "/terms",
  },
  {
    text: "PRIVACY",
    path: "/privacy",
  },
];
export const cards = [
  {
    icon: <BiSearch />,
    name: "SCAN",
    text: "Ensure comprehensive coverage of your assets' vulnerability with:",
    links: [
      " Static vulnerability assessment",
      "Dynamic vulnerability assessment",
    ],
  },
  {
    icon: <TbActivityHeartbeat />,
    name: "MONITOR",
    text: "Hasten the creation of your mobile applications or make your code commercially viable with:",
    links: [
      "App License User",
      "Analytics",
    ],
  },
  {
    icon: <FiShield />,
    name: "PROTECT",
    text: "Ensure that your mobile application is improved and secure for users with:",
    links: [
        "Reverse Engineering Protection.",
        "Tampering Protection.",
        "Runtime Potection.",
    ],
  },
];
export const footerIcon = [
  {
  icon : <FiLinkedin />,
  path : "/linkedln"
},
  {
  icon : <FiFacebook />,
  path : "/facebook"
},
  {
  icon : <FiTwitter />,
  path : "/twitter"
},
  {
  icon : <FiInstagram />,
  path : "/twitter"
},
  {
  icon : <FiYoutube />,
  path : "/twitter"
}]