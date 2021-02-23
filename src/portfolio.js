﻿/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Martí Riera Vila',
  title: "Hello world, this is Martí",
  subTitle: emoji(
    'Officially I am a Telecom Engineer 📡 but I prefer to describe myself as a a technology 👨‍💻, software development 🚀 and music 🎸 enthusiast.'
  ),
  resumeLink:
    'https://www.dropbox.com/s/pajkxnhehv08qpg/CV.pdf?dl=0',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/martiriera',
  linkedin: 'https://www.linkedin.com/in/martiriera/',
  gmail: 'martirieravila@gmail.com',
  gitlab: 'https://gitlab.com/martiriera',
  stackoverflow: 'https://stackoverflow.com/users/14983877/reir',
  medium: 'https://martiriera.medium.com/',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What can I do?',
  subTitle: 'Languages ​​and tools I have worked with (at least once)',
  skills: [
    emoji('⚡ Software development using several tools, languages and frameworks'),
    emoji('⚡ Front end and Back end integration. Database management'),
    emoji('⚡ Work cooperatively and always looking for creativity'),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'Java',
      fontAwesomeClassname: 'fab fa-java',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'html5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'fab fa-git',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Universitat Politèncnica de Catalunya',
      logo: require('./assets/images/upcLogo.png'),
      subHeader: 'Master\'s degree in Advanced Telecommunication Technologies',
      duration: 'Now',
      desc: 'Multidisciplinary track with subjects related to ML, DL, cybersecurity and networks.',
      // descBullets: [
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      // ],
    },
    {
      schoolName: 'Universitat Politèncnica de Catalunya',
      logo: require('./assets/images/upcLogo.png'),
      subHeader: 'Bachelor\'s degree in Telecommunications',
      duration: 'June 2020',
      desc:
        'Major in Telematics Systems',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Front-End Developer Intern',
      company: 'Tracktio Group',
      companylogo: require('./assets/images/tracktioLogo.jpeg'),
      date: 'January 2019 – September 2020',
      desc:
        'Co-developement of a web-app used to manage and control business activity. Working with IoT solutions.',
      descBullets: [
        'Adding contents and features to the web-app, bug-hunting, deployment.',
        'Configuration, installation and usage of tracking devices such as tags or gateways.',
        'Performing local and remote demos and PoC\'s to customers.'
      ],
    }
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'martiriera', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'false', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://saayahealth.com/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://nextu.se/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements and certifications'),
  subtitle:
    '',

  achievementsCards: [
    {
      title: 'Certified LabVIEW Associate Developer',
      subtitle:
        'National Instruments (Expired February 2020)',
      image: require('./assets/images/cladLogo.jpg'),
      footerLink: [
        // {
        //   name: 'Google Code-in Blog',
        //   url:
        //     'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        // },
      ],
    },
    {
      title: 'First Certificate (B2)',
      subtitle:
        'University Of Cambridge',
      image: require('./assets/images/cambridgeLogo.jpeg'),
      footerLink: [
      ],
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Projects',
  subtitle:
    'Some projects and challenges where I was involved during the degree and master courses',

  blogs: [
    {
      url:
        'https://upcommons.upc.edu/handle/2117/329276',
      title: 'Data synchronization for a fingerprinting-based mobile location app',
      description:
        'Implementation of a server with a database that synchronizes the data from and to a multi-device fingerprinting location app',
    },
    {
      url: 'https://dislexiaupc.github.io/',
      title: 'Dyscaperoom',
      description:
        'Co-creation of a functional VR experience that simulates dyslexia and generates empathy towards it,using multiple audio-visual effects',
    },
    {
      url: 'https://www.dropbox.com/s/dltblxv1y0slokk/Kaggle%20Competition%20Paper%20by%20Riera-Wasmer%20Fall%202020.pdf?dl=0',
      title: 'Kaggle Competition - Anomaly detection in 4G cellular networks',
      description:
        'Solve a classification problem proposed as a competition hosted by Kaggle platform. ',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embedded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact me'),
  subtitle:
    '',
  number: '+34 618 78 21 49',
  emailAddress: 'martirieravila@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
};