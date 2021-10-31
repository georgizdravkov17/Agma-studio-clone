import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMedia = () => {
  return(
      <div className="social-media">
          <Link to="#"><FacebookIcon /></Link>
          <Link to="#"><LinkedInIcon /></Link>
          <Link to="#"><InstagramIcon /></Link>
          <Link to="#"><TwitterIcon /></Link>
          <Link to="#"><YouTubeIcon /></Link>
      </div>
  );
}

export default SocialMedia;