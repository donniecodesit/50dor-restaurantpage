import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://github.com/donniecodesit"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/donovanlaws/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2022 Donovan Laws</p>
    </div>
  );
}
