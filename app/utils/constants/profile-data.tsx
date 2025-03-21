import {
  iAward,
  iContact,
  iExperience,
  iProfileData,
  iSkill,
} from "../interfaces";

const Experience: iExperience[] = [
  {
    id: 10001,
    companyName: "Egen",
    companyLogo: "/logos/egen.png",
    isCurrent: true,
    startDate: new Date("2024-08-12"),
    projects: [
      {
        id: 1001,
        projectName: "IES - Symbol Identification Vision AI",
        projectUrl: "https://example.com/symbol-recognition",
        isCurrent: false,
        startDate: new Date("2024-08-27"),
        endDate: new Date("2024-12-27"),
        responsibilities: [
          "Developed an interactive UI in Angular for symbol recognition on PDFs.",
          "Enabled users to identify, draw, and select symbols using a canvas.",
          "Designed and implemented dashboards for Symbol Management and Program Management.",
        ],
        techStack: [
          { name: "Angular", logo: "/logos/angular.png" },
          { name: "Canvas" },
        ],
      },
      {
        id: 1002,
        projectName: "Albertsons - Symbol Recognition System",
        projectUrl: "https://example.com/albertsons-symbol-recognition",
        isCurrent: false,
        startDate: new Date("2024-10-14"),
        endDate: new Date("2024-10-25"),
        responsibilities: [
          "Developed an Angular-based UI for symbol recognition on PDFs.",
          "Integrated an AI-powered chat-like feature for user communication with the model.",
        ],
        techStack: [
          { name: "Angular", logo: "/logos/angular.png" },
          { name: "AI" },
        ],
      },
      {
        id: 1003,
        projectName: "FTI - Contract Assistance Platform",
        projectUrl: "https://example.com/fti-contract-assistance",
        isCurrent: false,
        startDate: new Date("2025-01-06"),
        endDate: new Date("2025-03-17"),
        responsibilities: [
          "Developed a Generative AI-based platform using React and Redux Toolkit.",
          "Enabled users to upload documents and receive AI-generated proposals.",
          "Implemented dynamic content generation using predefined prompts.",
        ],
        techStack: [
          { name: "React", logo: "/logos/react.png" },
          { name: "Redux Toolkit", logo: "/logos/redux.png" },
          { name: "Figma", logo: "/logos/figma.png" },
        ],
      },
    ],
  },
  {
    id: 10002,
    companyName: "TechSophy",
    companyLogo: "/logos/techsophy.png",
    isCurrent: false,
    startDate: new Date("2022-12-01"),
    endDate: new Date("2024-08-11"),
    projects: [
      {
        id: 1004,
        projectName: "Trovity Application",
        projectUrl: "https://example.com/trovity",
        isCurrent: false,
        startDate: new Date("2022-12-01"),
        endDate: new Date("2024-08-11"),
        responsibilities: [
          "Managed the UI project for Trovity, a ReactJS Single Page Application (SPA) for insurance policy management.",
          "Guided the development process and maintained existing features.",
          "Led a team of four individuals and trained new hires and interns.",
        ],
        techStack: [
          { name: "ReactJS", logo: "/logos/react.png" },
          { name: "GraphQL", logo: "/logos/graphql.png" },
          { name: "Google Analytics", logo: "/logos/google-analytics.png" },
        ],
      },
    ],
  },
  {
    id: 10003,
    companyName: "Kodem Legal Technologies",
    companyLogo: "/logos/kodem.png",
    isCurrent: false,
    startDate: new Date("2020-07-10"),
    endDate: new Date("2022-12-01"),
    projects: [
      {
        id: 1005,
        projectName: "Toorey",
        projectUrl: "https://example.com/toorey",
        isCurrent: false,
        startDate: new Date("2020-07-10"),
        endDate: new Date("2022-12-01"),
        responsibilities: [
          "Contributed to the development of Toorey, a web application optimizing case management for law firms.",
          "Enhanced functionalities and improved user experience.",
          "Mentored a team of six individuals.",
        ],
        techStack: [
          { name: "ReactJS", logo: "/logos/react.png" },
          { name: "JavaScript", logo: "/logos/javascript.png" },
          { name: "CSS", logo: "/logos/css.png" },
        ],
      },
    ],
  },
  {
    id: 10004,
    companyName: "Deloitte USI",
    companyLogo: "/logos/deloitte.png",
    isCurrent: false,
    startDate: new Date("2019-07-10"),
    endDate: new Date("2020-07-09"),
    projects: [
      {
        id: 1006,
        projectName: "Due Diligence Analysis",
        isCurrent: false,
        startDate: new Date("2017-01-01"),
        endDate: new Date("2017-12-31"),
        responsibilities: [
          "Performed due diligence on high-risk clients, analyzing financial sources and transactions.",
          "Prepared customer profiles highlighting involvement in sensitive industries.",
        ],
        techStack: [
          { name: "Excel", logo: "/logos/excel.png" },
          { name: "Data Analysis" },
        ],
      },
    ],
  },
];

const Skills: iSkill[] = [
  { name: "Leadership" },
  { name: "Angular", logo: "/logos/angular.png" },
  { name: "RxJs" },
  { name: "Bootstrap", logo: "/logos/bootstrap.png" },
  { name: "Material UI", logo: "/logos/material-ui.png" },
  { name: "ReactJS", logo: "/logos/react.png" },
  { name: "React Native", logo: "/logos/react-native.png" },
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "Figma", logo: "/logos/figma.png" },
  { name: "RESTful API" },
  { name: "MVC" },
  { name: "Git", logo: "/logos/git.png" },
  { name: "Jira", logo: "/logos/jira.png" },
  { name: "Agile" },
];

const Awards: iAward[] = [];

const Contact: iContact = {
  emailId: "manisaiprasoonbandi@example.com",
  mobileNumber: "+1234567890",
  linkedInUrl: "https://linkedin.com/in/manisaiprasoonbandi",
  githubUrl: "https://github.com/manisaiprasoonbandi",
  twitterUrl: "",
};

const ProfileData: iProfileData = {
  fullName: "Mani Sai Prasoon Bandi",
  dateOfBirth: new Date("1998-01-05"),
  jobHistory: Experience,
  skills: Skills,
  awards: Awards,
  contact: Contact,
  aboutMe:
    "I am a passionate software engineer with expertise in building scalable and user-friendly web applications. With a strong background in Angular, ReactJS, and AI-based platforms, I thrive in dynamic environments and enjoy solving complex problems. I am also a dedicated team leader and mentor, committed to fostering growth and innovation.",
};

export { Awards, Contact, Experience, ProfileData, Skills };
