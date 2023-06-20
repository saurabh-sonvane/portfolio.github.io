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
      link: 'https://1drv.ms/b/s!Akq8ktDdIMsVh20w82V9m_sztbFS?e=GRFVOK', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://www.linkedin.com/in/saurabh-sonvane-64106017b/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://github.com/s17200',
      icon: 'fa fa-github',
      label: 'github',
    },
  
   
  ],
  bio: "Analytical and detail-oriented Full Stack Developer capable of writing production-ready code using React JS, Redux, and CSS on the Front-End & NodeJS ,Express,MongoDB on the Backend to build an application .",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
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
 
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
 
};
