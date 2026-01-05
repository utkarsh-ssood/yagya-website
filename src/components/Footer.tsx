import React from "react";
import "../styles/footer.css";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">
          <h3>Shri Siddheshwar Shiv Mandir Charitable Trust (Regd)</h3>
          <p>Dedicated to service, devotion, and community welfare.</p>
        </div>

        {/* Center: Contacts */}
        <div className="footer-contacts">
          <h4>Contact Us</h4>
          <p>Swami Udaigiri Ji Maharaj: 94643-17490</p>
          <p>Dr. Harshvinder Singh Pathania: 78373-79537</p>
          <p>Shri Narveer Singh Nandi: 94175-43033</p>
          <p>Shri Anurag Sood: 98151-61332</p>
        </div>

        {/* Right: Socials */}
        <div className="footer-socials">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Shri Siddheshwar Shiv Mandir Charitable Trust (Regd). All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
