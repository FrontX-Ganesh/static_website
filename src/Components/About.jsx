import React from "react";

const About = (props) => {
  
  return (
    <>
      <div className='container'>
        {/* <h1>{myName}</h1> */}
        <h1>{props.HeadingName}</h1>
        <p>Working As Software developer in Tickleright Brain Eduacation.</p>
      </div>
    </>
  )
};

export default About;
