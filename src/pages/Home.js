import React from "react";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Pawan Kumar</h2>
        <div className="prompt">
          <p>I am a Software Developer with a strong foundation in Full Stack Web 
            Development, experienced in building modern, scalable, and cloud-native 
            applications.
             My expertise spans across both frontend and backend development, 
            with a passion for delivering robust and user-centric software solutions.</p>
        </div>
        <div class="download">
  
  <a href="https://drive.google.com/file/d/151wMlJeYJO3kPwvOSL4Wi0TAoO1h48OW/view?usp=drive_link" download="PawanCV">
    <button>DownloadCV</button>
  </a>

 </div>
      </div>
    </div>
  );
}

export default Home;
