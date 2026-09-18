import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { searchProudct } from "../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

function Header({ inLading }) {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="shadow-sm py-3">
      <Container className="d-flex flex-wrap align-items-center gap-2">
        <Navbar.Brand className="d-flex align-items-center gap-2 mb-0">
          <Link
            to={"/"}
            className="text-light text-decoration-none fw-semibold"
          >
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
            <span>E-cart</span>
          </Link>
        </Navbar.Brand>

        {inLading && (
          <Form className="order-3 order-md-2 flex-grow-1 mx-md-4 mt-2 mt-md-0">
            <input
              type="search"
              placeholder="Search products..."
              className="form-control"
              onChange={(e) => dispatch(searchProudct(e.target.value))}
            />
          </Form>
        )}

        <Nav className="order-2 order-md-3 ms-auto align-items-center gap-4">
          <Link
            to="/wishlist"
            className="d-flex align-items-center gap-1 p-0 text-decoration-none"
          >
            <CiHeart size={28} className="text-danger" />
            <span className="fs-4 text-light fw-bold">{wishlist.length}</span>
          </Link>

          <Link
            to="/cart"
            className="d-flex align-items-center gap-1 p-0 text-decoration-none"
          >
            <FaShoppingCart size={28} className="text-success" />
            <span className="fs-4 text-light fw-bold">0</span>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
