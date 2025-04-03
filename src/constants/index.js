import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
 
  linkedin,
  twitter,
  instagram,
  facebook,
  github,
  
  threejs,
  voice,
  tracker,
  automation,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Development",
    company_name: "Self Learning",
    icon: web,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Learning and building projects using MongoDB, Express.js, React.js, and Node.js",
      "Developing full-stack applications with modern web technologies",
      "Implementing RESTful APIs and database management",
      "Creating responsive and interactive user interfaces",
    ],
  },
  {
    title: "AI & Machine Learning",
    company_name: "Personal Projects",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Building AI-powered applications using JavaScript and OpenAI",
      "Working with natural language processing and voice recognition",
      "Implementing real-time communication systems",
      "Developing intelligent automation solutions",
    ],
  },
  {
    title: "Web Development",
    company_name: "Freelance Projects",
    icon: creator,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Creating responsive websites using React and modern CSS frameworks",
      "Building subscription management and tracking systems",
      "Developing user-friendly interfaces with Material-UI",
      "Implementing data visualization with Chart.js",
    ],
  },
  {
    title: "Backend Development",
    company_name: "Learning Projects",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Building RESTful APIs with Node.js and Express",
      "Working with MongoDB for database management",
      "Implementing authentication and authorization systems",
      "Creating real-time applications with Socket.io",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Birat proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Birat does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Birat optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real-Time AI Voice Agent",
    description:
      "An advanced AI-powered voice agent that provides real-time conversation capabilities. Features include natural language processing, voice recognition, and intelligent response generation.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "websockets",
        color: "pink-text-gradient",
      },
      {
        name: "nlp",
        color: "blue-text-gradient",
      }
    ],
    image: voice,
    source_code_link: "https://github.com/birat04/Real_Time_AI_Voice_Agent",
  },
  {
    name: "Subscription Tracker",
    description:
      "A personal finance application that helps users manage and track their subscriptions. Features include expense tracking, renewal reminders, and subscription analytics.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      }
    ],
    image: tracker,
    source_code_link: "https://github.com/birat04/Subscription-tracking-api",
  },
  {
    name: "Intelibridge",
    description:
      "An intelligent bridge between different platforms and services, providing seamless integration and automation capabilities. Features include API integration, data synchronization, and workflow automation.",
    tags: [
      {
        name: "NEXT JS",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      }
    ],
    image: automation,
    source_code_link: "https://github.com/birat04/InteliBridge",
  },
  
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/birat-roka-01a7481b2",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/biratroka",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/birat.xyz",
  },
  {
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/birat.04",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/birat04",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
