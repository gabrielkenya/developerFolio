/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Eugene Gabriel",
  title: "Hi there, I am Eugene",
  subTitle: emoji(
    "I am a passionate Full Stack Software Developer 🚀 who has perfected the art of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KMttYAiNWN_9v0zPys5Syti95shQgrKD/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gabrielkenya",
  linkedin: "https://www.linkedin.com/in/eugene-mutembei-476248243/",
  gmail: "eugenegabriel.ke@gmail.com",
  gitlab: "https://gitlab.com/eugenegabriel.ke",
  facebook: "https://www.facebook.com/eugenegabriel",
  medium: "https://medium.com/eugenegabriel",
  stackoverflow: "https://stackoverflow.com/users/eugenegabriel",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jomo Kenyatta University of Agricukture and Technology",
      logo: require("./assets/images/jkuat.jfif"),
      subHeader: "Bachelor Degree in Mathematics and Computer Science",
      duration: "September 2022 - Present",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "OneHope International",
      companylogo: require("./assets/images/onehope.png"),
      date: "March 2023 – September 2023",
      desc: "I interned at OneHope International for six months to spread God's message to children globally by working under their Digital Integration Director to develop both Android and iOS versions of their mobile app."
    },
    {
      role: "Digital Director",
      company: "Prosoya Kenya",
      companylogo: require("./assets/images/prosoya.png"),
      date: "2021-2024",
      desc: " I worked at Prosoya Kenya Limited for three years as the Information Technology Director applying recent digital trends to the company's operations.",
    },
    {
      role: "ICT Teacher",
      company: "Consolata School",
      companylogo: require("./assets/images/consolataschool.png"),
      date: "April 2023 - September 2023",
      desc: "I utilized my natural teaching skills to impact knowledge to students at Consolata Primary school for all grades by planning, teaching and conducting all ICT lessons, assessments and exams at the school."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/technetium.png"),
      projectName: "Technetium Kenya",
      projectDesc: "As one third shareholder of Technetium Kenya; an upcoming technological solutions company, I contributed to the frontend development of the company's website, designed the company logo business cards and helped with digital integration.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://technetium.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "SQL Certification",
      subtitle:
        "I undertook a complete QSL certification course to help me work better wih databases.",
      image: require("./assets/images/sql.png"),
      imageAlt: "SQL Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1Y0Lh-9G031z-MRGVyIgCCACXIz1hH53r/view?usp=sharing"
        }
      ]
    },
        {
      title: "Linux Certification",
      subtitle:
        "There is a lot I learnt from this. Linux is a really cool operating system with tons of command line features that will blow your mind.",
      image: require("./assets/images/linux.png"),
      imageAlt: "Linux Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1pgUJ7Om5GcK8Fz_5wDCSD_j3VmpqHSfm/view?usp=sharing"
        }
      ]
    },
        {
      title: "Cybersecurity Certification",
      subtitle:
        "Unfortunately nobody is really safe on the internet. This course came in handy.!",
      image: require("./assets/images/cybersecurity.png"),
      imageAlt: "Cybersecurity Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1TRD7OjI6tMTm7dRnUZTyHTzEjzJLRPRF/view?usp=sharing"
        }
      ]
    },
        {
      title: "ChatGPT Certification",
      subtitle:
        "It goes without saying that Artificial Intelligence will soon be the core of almost all digital activities in the near future.",
      image: require("./assets/images/chatgpt.jpg"),
      imageAlt: "ChatGPT Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1-Joq-qc_YRczDU6CZfQjFH5TYVcErGkN/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@eugenegabriel.ke/how-to-start-your-programming-career-a-comprehensive-guide-8dfbcc8f3a45",
      title: "How to Start Your Programming Career: A Comprehensive Guide",
      description:
        "This comprehensive guide outlines the essential steps for starting a programming career, from choosing the right language and learning the basics to building projects and preparing for job applications."
    },
    {
      url: "https://medium.com/@eugenegabriel.ke/understanding-the-difference-between-back-end-and-front-end-development-cc7b2c68234b",
      title: "Understanding the Difference Between Back-End and Front-End Development",
      description:
        "This article gives a detailed description of both front-end and back-end development categories of web and app development and gives a clear definition of their differences."
    },
    {
      url: "https://medium.com/@eugenegabriel.ke/python-vs-r-which-language-is-best-for-data-science-d674fe47840b",
      title: "Python vs. R: Which Language is Best for Data Science?",
      description:
        "Read along as I demystify the intricacies of both Python and R programming languages used in data analysis and shed light on which one is the best."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254746152008",
  email_address: "eugenegabriel.ke@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "eugenius_kenya", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
