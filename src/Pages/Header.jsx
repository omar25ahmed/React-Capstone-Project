import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { IconContext } from 'react-icons';
import { MdArrowBackIosNew, MdOutlineMic, MdSettings } from 'react-icons/md';

function Header() {
  return (
    <nav>
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <Link to="/" className="d-flex">
          <MdArrowBackIosNew />
          {' '}
          <strong>2022</strong>
        </Link>
        <div><strong> 🇨🇦 Canada&apos;s Companies</strong></div>
        <div>
          <MdOutlineMic />
          {' '}
          <MdSettings />
          {' '}
        </div>
      </IconContext.Provider>
    </nav>
  );
}

export default Header;
