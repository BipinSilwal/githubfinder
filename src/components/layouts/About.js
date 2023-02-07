import React from 'react';

const About = () => {
  return (
    <>
      <div className="text-6xl mb-4">Github Finder</div>
      <div className="text-2xl mb-4">{process.env.REACT_APP_GITHUB_TOKEN}</div>
    </>
  );
};

export default About;
