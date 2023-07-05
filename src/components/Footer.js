import React from 'react';
import "../style/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className="footer">
    <div className="socialMedia">
      <InstagramIcon />
      <TwitterIcon />
      
      <LinkedInIcon />
    </div>
    <p> &copy; 2023 mudavath.com</p>
  </div>
  )
}

export default Footer