import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.svg";

function Header({ inLading }) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="position-relative d-flex align-items-center">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{
                filter:
                  "invert(24%) sepia(68%) saturate(7484%) hue-rotate(355deg) brightness(92%) contrast(121%)",
              }}
            />
            E-cart
          </Navbar.Brand>

          {inLading && (
            <Form
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <input
                type="search"
                placeholder="Search products..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                style={{
                  width: isSearchFocused ? "280px" : "140px",
                  transition: "width 0.3s ease",
                  padding: "7px 14px",
                  borderRadius: "20px",
                  border: "none",
                  outline: "none",
                }}
              />
            </Form>
          )}

          <Nav className="ms-auto">
            <Nav.Link href="/wishlist">
              <CiHeart size={25} style={{ color: "red" }} />
              <span>0</span>
            </Nav.Link>

            <Nav.Link href="/cart">
              <FaShoppingCart size={22} style={{ color: "limegreen" }} />
              <span>0</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
