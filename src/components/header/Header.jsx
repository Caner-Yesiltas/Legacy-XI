import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import headerStyle from "./Header.module.css"

const Header = () => {
  return (
    <div>
      <Image src={logo} width={'12.5rem'} />
      <h1 className={headerStyle.title} >Football Legends</h1>
    </div>
  );
};

export default Header;
