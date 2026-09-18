import Container from "react-bootstrap/Container";
import { BiSolidCartAdd } from "react-icons/bi";
import { RiHeartAddFill } from "react-icons/ri";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { addToWishlist } from "../redux/slice/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const wishlist = useSelector((state) => state.wishlist);
  useEffect(() => {
    if (localStorage.getItem("products")) {
      const allProducts = JSON.parse(localStorage.getItem("products"));
      setProduct(allProducts?.find((item) => item.id === Number(id)) || {});
    }
  }, [id]);

  const handleWishlist = () => {
    let existingProduct = wishlist.find((pro) => pro.id === product.id);
    if (existingProduct) {
      alert("Already in your wishlist");
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <>
      <Header />
      <main className="bg-light min-vh-100 py-5">
        <Container>
          <Row className="bg-white rounded-4 shadow-sm overflow-hidden align-items-center">
            <Col lg={6} className="p-4 p-lg-5 bg-body-tertiary">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid w-100 rounded-3"
              />
            </Col>

            <Col lg={6} className="p-4 p-lg-5">
              <p className="text-uppercase text-success fw-semibold small mb-2">
                Premium collection
              </p>
              <h1 className="display-6 fw-bold mb-3">{product.title}</h1>
              <p className="text-secondary fs-5 mb-4">{product.category}</p>

              <div className="d-flex align-items-center gap-3 mb-4">
                <h2 className="h3 fw-bold text-success mb-0">
                  ${product.price}
                </h2>
                <span className="badge text-bg-success rounded-pill">
                  In stock
                </span>
              </div>

              <p className="text-secondary mb-4">{product.description}</p>

              <div className="d-flex flex-wrap gap-3">
                <button type="button" className="btn btn-success px-4 py-2">
                  <BiSolidCartAdd className="me-2" size={20} />
                  Add to cart
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger px-4 py-2"
                  aria-label="Add French Collection watch to wishlist"
                  onClick={handleWishlist}
                >
                  <RiHeartAddFill className="me-2" size={20} />
                  Wishlist
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Products;
