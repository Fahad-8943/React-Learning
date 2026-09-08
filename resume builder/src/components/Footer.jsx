import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        style={{
          height: "400px",
          background: "#1976d2",
          color: "white",
        }}
        className="d-flex align-items-center justify-content-center text-center"
      >
        <div>
          <h1>contact us</h1>
          <h5 className="footer-header">
            <CiMail />
            resumebuilder@gafds.cos
          </h5>
          <h5>
            <FaPhoneAlt />
            84651574157
          </h5>
          <h3>connect with us</h3>
          <p>Designed & build with react</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
