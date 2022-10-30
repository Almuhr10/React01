import React from "react";

function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="index.html">Web design</a>
                </li>
                <li>
                  <a href="index.html">Development</a>
                </li>
                <li>
                  <a href="index.html">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="index.html">Company</a>
                </li>
                <li>
                  <a href="index.html">Team</a>
                </li>
                <li>
                  <a href="index.html">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Company Name</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="col item social">
              <a href="index.html">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="index.html">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="index.html">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="index.html">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">Tuwaiq Academy © 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
