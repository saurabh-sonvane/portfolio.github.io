import self from '../img/self.jpg';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Saurabh',
  lastName: 'Sonvane',
  initials: 'Mr', // the example uses first and last, but feel free to use three or more if you like.
  position: 'Full Stack Web Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🏠',
      text: 'Gangakhed, Maharashtra',
    },
    {
      emoji: '💻',
      text: 'MERN Stack Developer',
    },
    {
      emoji: '📧 ',
      text: 'sonvanesaurabh7@gmail.com',
    },
    {
      emoji: '📞',
      text: '+91 9588680004',
    },
  ],
  socials: [
    {
      link: 'https://drive.google.com/drive/folders/1F-SpOg_Fq8ILpzlSgrVWBuboyyRYM3xh', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://www.linkedin.com/in/saurabh-sonvane-64106017b/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://github.com/saurabh-sonvane/',
      icon: 'fa fa-github',
      label: 'github',
    },
  
   
  ],
  bio: "Full Stack Developer with 2+ years of experience in building scalable web and mobile apps. Skilled in writing clean, production-ready code with strong problem-solving skills. Eager to contribute to impactful projects and team success.",
  skills: {
    Technical_Skills: ['Express', 'Node JS', 'JavaScript', 'Mongo DB', 'JAVA', 'JSON' ,'DSA', 'React JS', 'Redux', 'Next JS', 'C++', 'HTML', 'Chakra UI', 'CSS', 'GIT'],
    Soft_Skills:['Observation','Problem-Solving','Adaptability','Multi-tasking ']
  
  },

  Education: [
    "Full Stack Web Development (Part-Time)" 
 
  ],

  hobbies: [
    {
      label: 'Watching Movies',
      emoji: '🎥',
    },
   
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Exploring New Places',
      emoji: '✈️',
    },

  ],

  Experience: [
    {
      companyName:'Ajackus',
      Location:'Remote',
      From:'Feb 2024',
      To:"July 2025",
      position:"Associate Software Engineer",
    }
  ],

  Projects: [
    {
       ProjectName:"Placeprep",
    }
  ]

 
};
