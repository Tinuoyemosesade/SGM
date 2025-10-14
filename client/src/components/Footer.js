import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 60px 0 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterSection = styled.div`
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #667eea;
  }

  p, li {
    line-height: 1.8;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #667eea;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  svg {
    margin-right: 10px;
    color: #667eea;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #34495e;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background: #667eea;
      transform: translateY(-2px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding-top: 20px;
  text-align: center;
  color: #bdc3c7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>
            <img src="/logo.png" alt="Seat of God Ministry" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            Seat of God Ministry
          </h3>
            <p>
              A place where faith, hope, and love come together. Join us in worship 
              and fellowship as we grow in our relationship with God and each other at 
              the Seat of God Ministry.
            </p>
          <SocialLinks>
            <a href="https://www.facebook.com/SEATOFGODMINISTRY" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/seatofgod" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/sermons">Sermons</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/donate">Donate</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Service Times</h3>
          <p><strong>Sunday Service:</strong></p>
          <p>Service: 8:00 AM</p>
          <br />
          <p><strong>Wednesday Miracle Hour:</strong></p>
          <p>5:30 PM - 7:30 PM</p>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <ContactInfo>
            <FaMapMarkerAlt />
            <span>Abuja-Kaduna Expressway</span>
          </ContactInfo>
          <ContactInfo>
            <FaPhone />
            <span>+234 816 745 1984</span>
          </ContactInfo>
          <ContactInfo>
            <FaEnvelope />
            <span>info@seatofgodministry.ng</span>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2024 Seat of God Ministry. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
