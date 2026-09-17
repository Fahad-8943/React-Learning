import Container from "react-bootstrap/Container";
import { Link } from "react-router";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto">
      <Container className="py-4 py-md-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <Link
              to="/"
              className="d-inline-flex align-items-center gap-2 text-decoration-none text-light fw-bold fs-5"
            >
              <img src={logo} alt="E-cart" width="32" height="32" />
              E-cart
            </Link>
            <p className="text-secondary mb-0 mt-2">
              Everyday essentials, delivered simply.
            </p>
          </div>

          <nav className="col-md-6 d-flex flex-wrap justify-content-md-end gap-3" aria-label="Footer navigation">
            <Link to="/" className="link-light text-decoration-none">
              Home
            </Link>
            <Link to="/wishlist" className="link-light text-decoration-none">
              Wishlist
            </Link>
            <Link to="/cart" className="link-light text-decoration-none">
              Cart
            </Link>
          </nav>
        </div>

        <div className="border-top border-secondary mt-4 pt-3 text-secondary small">
          Copyright {new Date().getFullYear()} E-cart. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
