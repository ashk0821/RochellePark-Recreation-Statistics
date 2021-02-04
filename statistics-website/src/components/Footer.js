import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Schedules</h2>
            <Link to="/league-schedules">Upcoming Games</Link>
            <Link to="/league-schedules">Past Games</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">
              Tel:
              <br />
              201-587-7743
            </Link>
            <Link to="/">
              Email:
              <br />
              contact@local.com
            </Link>
            <Link to="/">
              Location:
              <br />
              151 W. Passaic Street
              <br />
              Rochelle Park, NJ 07662
            </Link>
            <ExternalLink href="www.rochelleparknj.gov" />
          </div>
          <div class="footer-link-items">
            <h2>Leaderboards</h2>
            <Link to="/statistics">Player Leaderboards</Link>
            <Link to="/statistics">Team Leaderboards</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/sign-up">Upload Video</Link>
            <Link to="/">View Videos</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
