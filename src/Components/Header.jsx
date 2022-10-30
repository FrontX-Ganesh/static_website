import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavTabs from '../Api/NavTab';
import '../Css/Header.css';

const Header = () => {

  let [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <div className="header">
        <Link to="/" onClick={() => setActiveTab('home')}><img className='logo' alt='Vicky More' src="https://pps.whatsapp.net/v/t61.24694-24/308716314_792466778712569_5199847584127189700_n.jpg?ccb=11-4&oh=01_AdTrUoCNAUgrxuJccvFN-gAI8AGFYWU7WNPVIMUICQ9XCw&oe=636A8C06" /></Link>
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