import React from "react";
import LogoLetterPNG from "../assets/images/logo-letter.png";
import LogoTextPNG from "../assets/images/logo-light-text.png";
import ProfilePictureAvatar from "../assets/images/profile-picture-avatar.png";
import NotificationIcon from "../assets/images/notification-icon.svg";
import SettingsIcons from "../assets/images/settings-icon.svg";
import { Menu, Search, Maximize } from "react-feather";
type HeaderProps = {
  toggleLeftBarHandler: any;
};

const Header: React.FC<HeaderProps> = ({ toggleLeftBarHandler }) => {
  return (
    <>
      <header className="main-header">
        <div className="d-flex align-items-center logo-box justify-content-start">
          <a href="index.html" className="logo">
            <div className="logo-mini width-50">
              <span className="light-logo">
                <img src={LogoLetterPNG} alt="logo" />
              </span>
              <span className="dark-logo">
                <img src={LogoLetterPNG} alt="logo" />
              </span>
            </div>
            <div className="logo-lg">
              <span className="light-logo">
                <img src={LogoTextPNG} alt="logo" />
              </span>
              <span className="dark-logo">
                <img src={LogoTextPNG} alt="logo" />
              </span>
            </div>
          </a>
        </div>
        <nav className="navbar navbar-static-top ps-0">
          <div className="app-menu">
            <ul className="header-megamenu nav">
              <li className="btn-group nav-item">
                <div
                  className="waves-effect waves-light nav-link push-btn btn-primary-light d-flex justify-content-center align-items-center"
                  onClick={toggleLeftBarHandler}
                >
                  <Menu className="icon-menu" />
                </div>
              </li>
              <li className="btn-group d-lg-inline-flex d-none">
                <div className="app-menu">
                  <div className="search-bx mx-3">
                    <form>
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn"
                            type="submit"
                            id="button-addon3"
                          >
                            <Search size={18} />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="navbar-custom-menu r-side">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a
                  href="/"
                  className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow under text-decoration-none"
                  data-bs-toggle="dropdown"
                  title="User"
                >
                  <div className="d-flex pt-1 align-items-center">
                    <div className="text-end me-10 mobile-account-name">
                      <p className=" fs-12 mb-0 fw-700 text-primary">
                        Johen Doe
                      </p>
                      <small className="fs-10 mb-0 text-uppercase text-mute">
                        Admin
                      </small>
                    </div>
                    <img
                      src={ProfilePictureAvatar}
                      className="avatar rounded-10 bg-primary-light h-40 w-40"
                      alt=""
                    />
                  </div>
                </a>
                <ul className="dropdown-menu animated flipInX">
                  <li className="user-body">
                    <a className="dropdown-item" href="extra_profile.html">
                      <i className="ti-user text-muted me-2"></i> Profile
                    </a>
                    <a className="dropdown-item" href="auth_login.html">
                      <i className="ti-lock text-muted me-2"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
              <li className="btn-group nav-item d-lg-inline-flex d-none">
                <a
                  href="/"
                  data-provide="fullscreen"
                  className="waves-effect waves-light nav-link full-screen btn-warning-light d-flex align-items-center justify-content-center"
                  title="Full Screen"
                >
                  <Maximize size={23} />
                </a>
              </li>
              <li className="dropdown notifications-menu">
                <a
                  href="/"
                  className="waves-effect waves-light dropdown-toggle btn-info-light d-flex align-items-center justify-content-centerd-flex align-items-center justify-content-center"
                  data-bs-toggle="dropdown"
                  title="Notifications"
                >
                  <img
                    src={NotificationIcon}
                    alt="notification"
                    className="w-23"
                  />
                </a>
                <ul className="dropdown-menu animated bounceIn">
                  <li className="header">
                    <div className="p-20">
                      <div className="flexbox">
                        <div>
                          <h4 className="mb-0 mt-0">Notifications</h4>
                        </div>
                        <div>
                          <a href="/" className="text-danger">
                            Clear All
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <ul className="menu sm-scrol">
                      <li>
                        <a href="/">
                          <i className="fa fa-users text-info"></i> Curabitur id
                          eros quis nunc suscipit blandit.
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-warning text-warning"></i> Duis
                          malesuada justo eu sapien elementum, in semper diam
                          posuere.
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-users text-danger"></i> Donec at
                          nisi sit amet tortor commodo porttitor pretium a erat.
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-shopping-cart text-success"></i>{" "}
                          In gravida mauris et nisi
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-user text-danger"></i> Praesent eu
                          lacus in libero dictum fermentum.
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-user text-primary"></i> Nunc
                          fringilla lorem
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-user text-success"></i> Nullam
                          euismod dolor ut quam interdum, at scelerisque ipsum
                          imperdiet.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="/">View all</a>
                  </li>
                </ul>
              </li>
              <li className="btn-group nav-item">
                <a
                  href="/"
                  data-toggle="control-sidebar"
                  title="Setting"
                  className="waves-effect full-screen waves-light btn-danger-light d-flex align-items-center justify-content-center"
                >
                  <img src={SettingsIcons} alt="settings" className="w-23" />
                </a>
              </li>
              <li className="btn-group nav-item">
                <a
                  href="/"
                  className="waves-effect waves-light nav-link push-btn btn-success-light"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-original-title="Patient PHR"
                  title=""
                >
                  <span className="material-symbols-outlined">
                    admin_panel_settings
                  </span>
                </a>
              </li>
              <li className="btn-group nav-item">
                <a
                  href="/"
                  className="waves-effect waves-light nav-link push-btn btn-danger-light css_switch"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-original-title="Change Theme"
                  title=""
                >
                  <span className="material-symbols-outlined">palette</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
