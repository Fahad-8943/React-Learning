import Header from "../components/Header";
import { FaHeartCircleXmark } from "react-icons/fa6";
import { BiSolidCartAdd } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import heroImage from "../assets/hero.png";
import { useSelector } from "react-redux";
import Products from "./Products";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <>
      <Header />

      <main className="bg-body-tertiary min-vh-100 py-4 py-md-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 fw-bold mb-0">My Wishlist</h1>
            <span className="badge text-bg-danger rounded-pill">
              {wishlist.length} items
            </span>
          </div>

          <div className="row g-4">
            {wishlist.length > 0 ? (
              wishlist.map((product) => (
                <div className="col-12 col-sm-6 col-lg-3">
                  <Card className="h-100 border-0 shadow-sm overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={product.thumbnail}
                      alt="French Collection watch"
                      className="bg-white object-fit-cover p-3"
                      style={{ height: "220px" }}
                    />
                    <Card.Body className="d-flex flex-column p-4">
                      <p className="small text-success fw-semibold text-uppercase mb-2">
                        Watches
                      </p>
                      <Card.Title className="h5 fw-bold">
                        French Collection
                      </Card.Title>
                      <Card.Text className="text-secondary mb-4">
                        A classic round-dial watch for everyday style.
                      </Card.Text>
                      <div className="d-flex gap-2 mt-auto">
                        <Button
                          type="button"
                          variant="outline-danger"
                          aria-label="Remove French Collection watch from wishlist"
                        >
                          <FaHeartCircleXmark size={20} />
                        </Button>
                        <Button
                          type="button"
                          variant="success"
                          className="flex-grow-1"
                        >
                          <BiSolidCartAdd className="me-2" size={20} />
                          Add to cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="bg-white rounded-4 shadow-sm text-center py-5 px-3">
                  <FaHeartCircleXmark size={56} className="text-danger mb-3" />
                  <h2 className="h4 fw-bold">Your wishlist is empty</h2>
                  <p className="text-secondary mb-0">
                    Save products you love and they will appear here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </main>
    </>
  );
}

export default Wishlist;
