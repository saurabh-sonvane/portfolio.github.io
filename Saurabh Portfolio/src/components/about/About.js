import React from 'react';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { Box } from '@mui/material';
import { info } from '../../assets/info/Info';

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat about{firstName}{' '}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  const skillsSection = (skill) => {
    const keyName = Object.keys(skill)[0];
    const values = skill[keyName];

    return (
      <div key={keyName}>
        <p style={{ color: info.baseColor }}> {keyName}</p>
        <ul className={Style.skills}>
          {values.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd skills
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        {Object.keys(info.skills).map((key) => {
          return skillsSection({ [key]: info.skills[key] });
        })}
      </>
    );
  }

  function ExperienceText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd work experience
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            work experience <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.Experience.map((experience, index) => (
            <li key={index}>
              <p>{experience.position}</p>
              {/* <p>{experience.companyName}</p> */}
              <p>{experience.companyName +" | "+ experience.Location +" | "+ experience.From+ " - " + experience.To}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }

  function educationText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat Education
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Education <span className={Style.green}>(main)</span> ${' '}
          </span>
          ls
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Full Stack Web Development (Part-Time)
          </span>

        </p>
        <p>
          <span style={{ marginLeft: "30px" }}>Masai School, Bangalore</span> <br />
          <span style={{ marginLeft: "30px" }}>August 2022 – present</span>

        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Bachelor Of Engineering
          </span>

        </p>
        <p>
          <span style={{ marginLeft: "30px" }}>Information Technology</span> <br />
          <span style={{ marginLeft: "30px" }}>Sanjivani College Of Engineering,</span> <br />
          <span style={{ marginLeft: "30px" }}>Kopargaon</span> <br />
          <span style={{ marginLeft: "30px" }}>June 2017 – June 2022</span>
        </p>

        <p>
          <span style={{ color: info.baseColor }}>
            High School
          </span>

        </p>
        <p>
          <span style={{ marginLeft: "30px" }}>Tulsiramji Patil Science College,</span> <br />
          <span style={{ marginLeft: "30px" }}>Gangakhed</span> <br />
          <span style={{ marginLeft: "30px" }}>June 2015 – March 2017</span>
        </p>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={'span'} mr={'1rem'}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={ExperienceText()} />
      <Terminal text={educationText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
