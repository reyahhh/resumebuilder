import React from 'react';
import { ResumeHeader, Contact, Education, Experience, Skills, Summary } from '../resume';

// default template
const Resume = () => {
  return (
    <div>
        <ResumeHeader />
        <Contact />
        <Education />
        <Experience />
        <Skills />
        <Summary />
    </div>
  )
}

export default Resume