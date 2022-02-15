import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

const greeting = {
  title: "Agathiyan Sivakumar",
  logo_name: "AGATHIYAN",
  role: "Software Developer",
  subTitle:
    " I'm a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and leverage. I'm currently into Web Development and working on my MERN Website.",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMedia = [
  {
    name: "Github",
    link: "https://www.github.com/agathiyans28",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/agathiyans28",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Google",
    link: "mailto:agathiyans28@gmail.com",
    icon: <AiOutlineGoogle />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/agathiyans28",
    icon: <FaInstagram />,
  },
];

const skills = [
  [
    {
      name: "HTML",
      animation: "slide-up",
      icon: 'src/assets/vectors/css3.svg'
    },
    {
      name: "CSS",
      animation: "slide-down-delay",
    },
    {
      name: "SASS",
      animation: "rotate",
    },
    {
      name: "JS",
      animation: "scale",
    },
    {
      name: "ReactJS",
      animation: "flip",
    },
    {
      name: "NodeJS",
      animation: "skew",
    },
  ],
  [
    {
      name: "HTML",
      animation: "slide-up",
    },
    {
      name: "CSS",
      animation: "slide-down-delay",
    },
    {
      name: "SASS",
      animation: "rotate",
    },
    {
      name: "JS",
      animation: "scale",
    },
  ],
];

export { greeting, socialMedia, skills };
