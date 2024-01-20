import React from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";

const nav__link = [
  {
    display: "Home",
    path : '/home'
  },
  {
    display: "Foods",
    path : '/foods'
  },
  {
    display: "Cart",
    path : '/cart'
  },
  {
    display: "Contact",
    path : '/contact'
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          <div className="navigation">
            <div className="menu"></div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
