import React from 'react';
import { Container, Image } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import headerStyle from './Header.module.css';

const Header = () => {
  return (
    <Container>
      {' '}
      <div>
        <Image src={logo} width={'200px'} /> <br></br>
        <h1 className={`${headerStyle.title} my-2 `}>Football Legends</h1>
      </div>
    </Container>
  );
};

export default Header;
