import React, { useRef, useState } from "react";
import {
  Container, Row, Col, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const toggleLoginModal = () => setLoginModal(!loginModal);
  const toggleRegisterModal = () => setRegisterModal(!registerModal);

  const handleRegister = () => {
    // Implement your registration logic here
    console.log("Register button clicked");
    toggleRegisterModal();
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Login button clicked");
    toggleLoginModal();
  };

  return (
    <header className="header">
      {/* Header Top */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +230 52612062
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="login.php" onClick={toggleLoginModal} className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" onClick={toggleRegisterModal} className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Header Middle */}
      <div className="header__middle">
        <Container>
          <Row>
            {/* Logo */}
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Hype <br /> Rentals
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            {/* Location */}
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Mauritius</h4>
                  <h6>Eben, Mauritius</h6>
                </div>
              </div>
            </Col>

            {/* Opening Hours */}
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            {/* Request a Call Button */}
            <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
            <button className="header__btn btn">
            <a 
            href="https://wa.me/1234567890?text=Hi%20I%20would%20like%20to%20request%20a%20call%20from%20Hype%20Rentals." 
            target="_blank" 
            rel="noopener noreferrer"
            >
           <i className="ri-phone-line"></i> Request a call
           </a>
          </button>
          </Col>
          </Row>
        </Container>
      </div>

      {/* Main Navbar */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            {/* Mobile Menu Icon */}
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            {/* Navigation Links */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Login Modal */}
      <Modal isOpen={loginModal} toggle={toggleLoginModal}>
        <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your password" />
            </FormGroup>
            <Button color="danger" onClick={handleLogin}>Login</Button>
          </Form>
        </ModalBody>
      </Modal>

      {/* Register Modal */}
      <Modal isOpen={registerModal} toggle={toggleRegisterModal}>
        <ModalHeader toggle={toggleRegisterModal}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="fullName">Full Name</Label>
              <Input type="text" name="fullName" id="fullName" placeholder="Enter your full name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your password" />
            </FormGroup>
            <Button color="danger" onClick={handleRegister}>Register</Button>
          </Form>
        </ModalBody>
      </Modal>
    </header>
  );
};

export default Header;
