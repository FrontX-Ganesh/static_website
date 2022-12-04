import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavTabs from '../Api/NavTab';
import '../Css/Header.css';

const Header = () => {

  let [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <div className="header">
        <Link to="/" onClick={() => setActiveTab('home')}><img className='logo' alt='GDV' src="https://pps.whatsapp.net/v/t61.24694-24/294343466_418717420276315_3146848769320897367_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTqrD2a51yUNsUW1elqAyCHNUDnJOCcaFq_Dff1gghcZg&oe=6399DAF8" /></Link>
        <div className="header-right">
          {
            NavTabs.map((item,index) => {
             return <Link key={index} className={activeTab === item.onclick ? 'active' : ''} onClick={() => setActiveTab(item.onclick)} to={item.to}>{item.title}</Link>
            }) 
          }
        </div>
      </div>
    </>
  )
}

export default Header;