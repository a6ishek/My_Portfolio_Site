import {
  faGithub,
  faLinkedin,
  faCodepen,
  faInstagram,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.github,
    url: Strings.githubLink,
    icon: faGithub,
    text: Strings.githubUsername,
  },
  {
    name: Strings.linkedIn,
    url: Strings.linkedInLink,
    icon: faLinkedin,
    text: Strings.linkedInUsername,
  },
  {
    name: Strings.cc,
    url: Strings.ccLink,
    icon: faCodepen,
    text: Strings.ccUsername,
  },
  {
    name: Strings.instagram,
    url: Strings.instagramLink,
    icon: faInstagram,
    text: Strings.instagramUsername,
  },
  {
    name: Strings.hr,
    url: Strings.hrLink,
    icon: faHackerrank,
    text: Strings.hrUsername,
  },
  {
    name: Strings.email,
    url: Strings.primaryEmailLink,
    icon: faEnvelope,
    text: Strings.primaryEmail,
  },
];

export default socialLinks;
