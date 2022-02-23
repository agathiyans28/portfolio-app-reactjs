import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

const greeting = {
  title: "Agathiyan Sivakumar",
  logo_name: "< Agathiyan Sivakumar />",
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
    backgroundColor: 'red'
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/agathiyans28",
    icon: <FaLinkedinIn />,
    backgroundColor: 'blue'
  },
  {
    name: "Google",
    link: "mailto:agathiyans28@gmail.com",
    icon: <AiOutlineGoogle />,
    backgroundColor: 'green'
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/agathiyans28",
    icon: <FaInstagram />,
    backgroundColor: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
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
        },
        {
          name: "CSS",
          logo: "css3.png",
        },
        {
          name: "SASS",
          logo: "sass.png",
        },
        {
          name: "JavaScript",
          logo: "javascript.png",
        },
        {
          name: "ReactJS",
          logo: "react.png",
        },
        {
          name: "NodeJS",
          logo: "nodejs.png",
        },
        {
          name: "ExpressJS",
          logo: "express.png",
        },
        {
          name: "Python",
          logo: "python.png",
        },
        {
          name: "MongoDB",
          logo: "mongodb.png",
        },
        {
          name: "MySQL",
          logo: "mysql.png",
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
        },
        {
          name: "Figma",
          logo: "figma.png",
        },
      ],
    },
  ],
];

const degrees = [
  {
    logo: 'pondiuni.png',
    link: 'https://www.pondiuni.edu.in/',
    title: 'Pondicherry University',
    location: 'Puducherry',
    subTitle: 'Master of Computer Application',
    duration: '2018 - 2021',
    content: [
      'I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.',
      'Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.'
    ]
  },
  {
    logo: 'gackmu.png',
    link: 'https://gacakum.ac.in/',
    title: 'Government Arts College (Autonomous)',
    location: 'Kumbakonam',
    subTitle: 'Bachelor of Computer Application',
    duration: '2015 - 2018',
    content: [
      'I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.',
      'Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.'
    ]
  }
]

export { greeting, socialMedia, skills, degrees };
