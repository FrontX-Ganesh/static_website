import React from 'react';
import './Css/HomeAbout.css';

const Home = (props) => {
  return (
    <>
      <div className='people'>
       <div> <h1>{props.HeadingName}</h1></div>
        <div> <p>Working As Software developer in Tickleright Brain Eduacation.</p></div>
      </div>
    </>
  )
}

export default Home;