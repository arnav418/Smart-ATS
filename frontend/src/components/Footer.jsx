import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} <strong>Smart ATS</strong>. All rights reserved.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/arnav418/Smart-ATS"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span>•</span>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Privacy
          </a>
          <span>•</span>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Contact
          </a>
        </div>
      </div>
       <p className="footer-made">
          Made with ❤️ by <strong>Arnav Priyadarshi</strong>
        </p>
    </footer>
  );
}

export default Footer;
