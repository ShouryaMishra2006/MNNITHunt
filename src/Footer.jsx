import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h2>About Us</h2>
          <p>
            We are the first motis to create such a platform for MNNITians to dive into real world fun at our campus along with gaining insights into history, culture, and much more.
          </p>
        </div>
        <div style={sectionStyle}>
          <h2>Contact</h2>
          <p>Email: shouryamishra55@gmail.com</p>
          <p>Phone: +91 7388831199</p>
          <p>Address: Air Force Colony, Gorakhpur UP</p>
        </div>
        <div style={sectionStyle}>
          <h2>Follow Us</h2>
          <div style={iconContainerStyle}>
            <a href="#" style={iconStyle}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" style={iconStyle}><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" style={iconStyle}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" style={iconStyle}><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>

      <div style={bottomStyle}>
        <p>&copy; 2024 www.MNNITHunt.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '40px 0',
  textAlign: 'center',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: 'auto',
};

const sectionStyle = {
  flex: '1 1 250px',
  margin: '10px',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
};

const iconStyle = {
  color: '#bbb',
  fontSize: '1.5em',
  textDecoration: 'none',
};

const bottomStyle = {
  padding: '20px 0',
  backgroundColor: '#222',
  color: '#aaa',
  fontSize: '0.9em',
};

export default Footer;
