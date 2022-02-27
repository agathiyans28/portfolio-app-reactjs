import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

const greeting = {
  title: "Agathiyan Sivakumar",
  logo_name: "< Agathiyan Sivakumar />",
  role: ["Web Developer", "Software Developer"],
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
    backgroundColor: "black",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/agathiyans28",
    icon: <FaLinkedinIn />,
    backgroundColor: "#0a5cd9",
  },
  {
    name: "Google",
    link: "mailto:agathiyans28@gmail.com",
    icon: <AiOutlineGoogle />,
    backgroundColor: "#d40f0f",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/agathiyans28",
    icon: <FaInstagram />,
    backgroundColor:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
  },
];

const skills = [
  [
    {
      title: "Full Stack Development",
    },
    {
      skills: [
        {
          name: "HTML",
          logo: "html5.png",
          percent: "96",
        },
        {
          name: "CSS",
          logo: "css3.png",
          percent: "93",
        },
        {
          name: "SASS",
          logo: "sass.png",
          percent: "91",
        },
        {
          name: "JavaScript",
          logo: "javascript.png",
          percent: "76",
        },
        {
          name: "ReactJS",
          logo: "react.png",
          percent: "67",
        },
        {
          name: "NodeJS",
          logo: "nodejs.png",
          percent: "64",
        },
        {
          name: "ExpressJS",
          logo: "express.png",
          percent: "65",
        },
        {
          name: "Python",
          logo: "python.png",
          percent: "79",
        },
        {
          name: "MongoDB",
          logo: "mongodb.png",
          percent: "71",
        },
        {
          name: "MySQL",
          logo: "mysql.png",
          percent: "78",
        },
      ],
    },
  ],
  [
    {
      title: "UI/UX Design",
    },
    {
      skills: [
        {
          name: "PhotoShop",
          logo: "photoshop.png",
          percent: "75",
        },
        {
          name: "Figma",
          logo: "figma.png",
          percent: "69",
        },
      ],
    },
  ],
];

const degrees = [
  {
    logo: "pondiuni.png",
    link: "https://www.pondiuni.edu.in/",
    title: "Pondicherry University",
    location: "Puducherry",
    subTitle: "Master of Computer Application",
    duration: "2018 - 2021",
    content: [
      "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      "Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    ],
  },
  {
    logo: "gackmu.png",
    link: "https://gacakum.ac.in/",
    title: "Government Arts College (Autonomous)",
    location: "Kumbakonam",
    subTitle: "Bachelor of Computer Application",
    duration: "2015 - 2018",
    content: [
      "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      "Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    ],
  },
];

const certificates = [
  {
    name: "Python",
    logo: "python.png",
    certifyName: "Python (Basic)",
    siteName: "HackerRank",
    about:
      "It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes.",
    link: "https://www.hackerrank.com/certificates/99149a863385",
  },
  {
    name: "CSS",
    logo: "css3.png",
    certifyName: "CSS",
    siteName: "HackerRank",
    about:
      "It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others.",
    link: "https://www.hackerrank.com/certificates/e1d110931304",
  },
  {
    name: "JavaScript",
    logo: "javascript.png",
    certifyName: "JavaScript",
    siteName: "freeCodeCamp",
    about:
      "JavaScript Algorithms and Data Structures Developer Certification, representing approximately 300 hours of coursework.",
    link: "https://freecodecamp.org/certification/agathiyans28/javascript-algorithms-and-data-structures",
  },
];

const project = [
  {
    thumb: "portfolio_thumb.png",
    title: "Portfolio app using ReactJS",
    date: "30-02-2022",
    details:
      "The Complete Customizable Software Developer Portfolio Template which lets you showcase your work and provides each and every detail about you as Software Developer. ",
    lang: ["html5.png", "css3.png", "javascript.png", "react.png"],
    link: "https://github.com/agathiyans28/portfolio-app-reactjs",
  },
  {
    thumb: "portfolio_thumb.png",
    title: "Portfolio app using ReactJS",
    date: "30-02-2022",
    details:
      "The Complete Customizable Software Developer Portfolio Template which lets you showcase your work and provides each and every detail about you as Software Developer.The Complete Customizable Software Developer Portfolio Template which lets you showcase your work and provides each and every detail about you as Software Developer. ",
    lang: ["html5.png", "css3.png", "javascript.png", "react.png"],
    link: "https://github.com/agathiyans28/portfolio-app-reactjs",
  },
];

export { greeting, socialMedia, skills, degrees, certificates, project };
