import React from "react";
import "./FooterStyles.css"; // Use the style below

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} <span>Sundara Siva Sreerag</span> | Portfolio
    </footer>
  );
}
