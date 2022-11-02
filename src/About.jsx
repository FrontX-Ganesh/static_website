import React from "react";
import { useContext } from "react";
import { AppContext } from "./Context/ProductContext";

const About = (props) => {

  const { myName } = useContext(AppContext);

  return (
    <>
      <div className='container'>
        <h1>{myName}</h1>
        <h1>{props.HeadingName}</h1>
        <p>Working As Software developer in Tickleright Brain Eduacation.</p>
      </div>
    </>
  )
};

export default About;
