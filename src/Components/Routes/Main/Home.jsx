
import React from 'react';



import Experience from './sections/Experience/Experience';
import Achievements from './sections/Achievements/Achievements';
import Education from './sections/Education/Education';
import StudentActivities from './sections/StudentActivities/StudentActivities';
import Skills from './sections/Skills/Skills';
import CustomerReviews from './sections/CustomerReviews/CustomerReviews';
import AboutMe from './sections/AboutMe/AboutMe';
import MainPage from './sections/MainPage/MainPage';

const Home = () =>{
  return (
    <>
      {/* 1st Page. */}
      <MainPage />
      

      {/* 2nd Page. */}
      <AboutMe />


      {/* 3rd Page */}
      <Experience />


      {/* Hackathon 4th Page. */}
      <Achievements />

      {/*  5th Page. */}
      <Education />


      {/* 6th Page. */}
      <StudentActivities />



      {/* 8th Part Skills */}
      <Skills />

      <CustomerReviews />
     </>
  );
}

export default Home;