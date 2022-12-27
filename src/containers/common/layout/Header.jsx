import React from "react";
import { useLocation, useNavigate} from 'react-router-dom';

// assets
import logo from "assets/img/logo.png";

function HeaderTopArea() {
  const navigate = useNavigate();
  const {  pathname } = useLocation();

  const handleNavigate = () => {
    navigate('/register')
  }

  // constants
  const isNotHomePage = pathname.includes('/register');
  return (
    <>
      <div
        className="offcanvas offcanvas-start w-100"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <a  className="mobile-logo">
            <img src={logo} alt="" />
          </a>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body mx-auto">
          <ul>
            <li>
              <a href="" className="text-decoration-none offcanvas-link">Home</a>
            </li>

            <li>
              <a href="" className="text-decoration-none offcanvas-link">Contact</a>
            </li>
          </ul>
          <div className="header-right">
            <a className="register-btn text-decoration-none" href="#">
              Register
            </a>
          </div>
        </div>
      </div>
      <section className={`header-top-area ${isNotHomePage ? 'position-relative': ""}`}>
        <div className="container">
          <div className="row blur-bg">
            <div className="col-lg-4 col-md-4">
              <div className="logo cursor-pointer">
                <a  onClick={()=> navigate('/')}>
                  <img src={logo} alt="TurboEMDR_Logo" />
                </a>
              </div>
              <a
                className="menu-trigger"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
            <div className="col-lg-4 tnone">
              <div className="mainmenu">
                <ul>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Faq
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="header-right cursor-pointer">
                <a className="register-btn text-decoration-none" onClick={handleNavigate}>
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderTopArea;
