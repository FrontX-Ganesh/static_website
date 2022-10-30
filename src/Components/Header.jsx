import React, { useState, useReducer } from 'react';
import '../Css/Header.css';
import { Link } from "react-router-dom";

const Header = () => {

  let [activeTab, setActiveTab] = useState('home');

  const nav = {

  }

  return (
    <>
      <div className="header">
        <Link to="/" onClick={() => setActiveTab('home')}><img className='logo' src="https://pps.whatsapp.net/v/t61.24694-24/308716314_792466778712569_5199847584127189700_n.jpg?ccb=11-4&oh=01_AdTrUoCNAUgrxuJccvFN-gAI8AGFYWU7WNPVIMUICQ9XCw&oe=636A8C06" /></Link>
        <div className="header-right">
          <Link className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')} to="/">Home</Link>
          <Link className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')} to="/contact">Contact</Link>
          <Link className={activeTab === 'abouts' ? 'active' : ''} onClick={() => setActiveTab('abouts')} to="/abouts">About</Link>
          <Link className={activeTab === 'products' ? 'active' : ''} onClick={() => setActiveTab('products')} to="/products">Products</Link>
          <Link className={activeTab === 'cart' ? 'active' : ''} onClick={() => setActiveTab('cart')} to="/cart">Cart</Link>
        </div>
      </div>
    </>
  )
}

export default Header;