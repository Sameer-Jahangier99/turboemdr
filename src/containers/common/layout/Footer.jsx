import React from "react";

// assets
import logo from "assets/img/logo.png";

function Footer() {
  return (
    <section className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-logo">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <div className="footer-menu">
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "#000" }}
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "#000" }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="footer-menu">
              <ul></ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <ul></ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="footer-copyright text-center">
            <p>&copy; 2022 Turbo EMDR LLC</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
