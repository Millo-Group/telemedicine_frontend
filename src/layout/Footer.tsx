/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="sticky-footer-menu">
      <div className="d-flex justify-content-center">
        <div className="p-3 flex-fill text-center">
          <a
            href="#"
            className="footer-bottom-menu current"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Pre-Apps"
          >
            <span className="material-symbols-outlined footer-icon">app_registration</span>
          </a>
        </div>
        <div className="p-3 flex-fill text-center">
          <a
            href="#"
            className="footer-bottom-menu"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Notes"
          >
            <span className="material-symbols-outlined footer-icon">description</span>
          </a>
        </div>
        <div className="p-3 flex-fill text-center">
          <a
            href="#"
            className="footer-bottom-menu"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Announcement"
          >
            <span className="material-symbols-outlined footer-icon">campaign</span>
          </a>
        </div>
        <div className="p-3 flex-fill text-center">
          <a
            href="#"
            className="footer-bottom-menu"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Apps"
          >
            <span className="material-symbols-outlined footer-icon">apps</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
/* eslint-enable jsx-a11y/anchor-is-valid */
