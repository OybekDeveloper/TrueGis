import React, { useState } from 'react';
import { truegis } from '../imgs';
import './navbar.scss';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className='navbar w-10/12 mx-auto max-w-[1440px] h-[88px] flex justify-between items-center'>
      <a href="/">
        <div className="logo flex justify-center items-center gap-[12px]">
          <img className='nav-img w-[40px] h-[40px]' src={truegis} alt="truegis" />
          <h1>TrueGis</h1>
        </div>
      </a>
      <ul className='links flex justify-center items-center gap-[40px]'>
        <li className={activeLink === 'bot_features' ? 'active-link' : ''}>
          <a href="#bot_features" onClick={() => handleLinkClick('bot_features')}>Bot xususiyatlari</a>
        </li>
        <li className={activeLink === 'clients' ? 'active-link' : ''}>
          <a href="#clients" onClick={() => handleLinkClick('clients')}>Bizning mijozlar</a>
        </li>
        <li className={activeLink === 'comments' ? 'active-link' : ''}>
          <a href="#comments" onClick={() => handleLinkClick('comments')}>Fikrlar</a>
        </li>
        <li className={activeLink === 'faq' ? 'active-link' : ''}>
          <a href="#faq" onClick={() => handleLinkClick('faq')}>Ko’p beriladigan savollar</a>
        </li>
      </ul>
      <button className='msg-btn'>
        Xabar qoldirish
      </button>
    </nav>
  );
}

export default Navbar;