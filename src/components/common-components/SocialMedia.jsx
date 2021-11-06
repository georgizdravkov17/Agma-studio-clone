import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   icon: {
     backgroundColor: "black",
     padding: "0.3rem",
     color: "white",
     marginRight: "0.2rem",
     borderRadius: "0.2rem", 
     "&:hover": {
       backgroundColor: "aqua"
     }
   }
})

const SocialMedia = () => {

  const classes = useStyles();

  return(
      <div className="social-media">
          <Link to="#"><FacebookIcon className={classes.icon}  /></Link>
          <Link to="#"><LinkedInIcon className={classes.icon}  /></Link>
          <Link to="#"><InstagramIcon className={classes.icon}  /></Link>
          <Link to="#"><TwitterIcon className={classes.icon}  /></Link>
          <Link to="#"><YouTubeIcon className={classes.icon}  /></Link>
      </div>
  );
}

export default SocialMedia;