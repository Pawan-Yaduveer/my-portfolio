import React from "react";
//import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       
        <a href="https://github.com/Pawan-Yaduveer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/pawan-kumar81/">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; Pawan Kumar</p>
    </div>
  );
}

export default Footer;
