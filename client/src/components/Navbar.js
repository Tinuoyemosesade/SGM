import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.scrolled ? '#2c3e50' : 'white'};
  text-decoration: none;
  transition: color 0.3s ease;

  svg {
    margin-right: 10px;
    color: #667eea;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.3s ease;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? '#2c3e50' : 'white'};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #667eea;
  }

  &.active {
    color: #667eea;
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background: #667eea;
  }

  @media (max-width: 768px) {
    color: #2c3e50;
    font-size: 1.2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.scrolled ? '#2c3e50' : 'white'};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #2c3e50;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo to="/" scrolled={scrolled}>
          <img src="/logo.png" alt="Seat of God Ministry" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          Seat of God Ministry
        </Logo>

        <NavMenu isOpen={isOpen}>
          <CloseButton onClick={closeMenu}>
            <FaTimes />
          </CloseButton>
          
          <NavItem>
            <NavLink 
              to="/" 
              scrolled={scrolled}
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink 
              to="/about" 
              scrolled={scrolled}
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink 
              to="/sermons" 
              scrolled={scrolled}
              className={location.pathname === '/sermons' ? 'active' : ''}
              onClick={closeMenu}
            >
              Sermons
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink 
              to="/events" 
              scrolled={scrolled}
              className={location.pathname === '/events' ? 'active' : ''}
              onClick={closeMenu}
            >
              Events
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink 
              to="/contact" 
              scrolled={scrolled}
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink 
              to="/donate" 
              scrolled={scrolled}
              className={location.pathname === '/donate' ? 'active' : ''}
              onClick={closeMenu}
            >
              Donate
            </NavLink>
          </NavItem>
        </NavMenu>

        <MobileMenuButton onClick={toggleMenu} scrolled={scrolled}>
          <FaBars />
        </MobileMenuButton>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
