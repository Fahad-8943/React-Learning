import Header from "../components/Header";
import { FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/slice/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );
  const totalAmount = cart.reduce(
    (total, product) => total + product.totalPrice,
    0,
  );

  const checkout = () => {
    if (cart.length > 0) {
      alert("Order Placed");
      dispatch(clearCart());
    } else {
      alert("Cart is Empty Add Some Products");
    }
  };

  return (
    <>
      <Header />

      <main className="bg-body-tertiary min-vh-100 py-4 py-md-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 fw-bold mb-0">Cart Summary</h1>
            <span className="badge text-bg-success rounded-pill">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </div>

          <div className="d-flex flex-wrap gap-2 mb-4">
            <Button as={Link} to="/" variant="outline-success">
              Shop more
            </Button>
            <Button
              type="button"
              variant="outline-danger"
              disabled={cart.length === 0}
              onClick={() => dispatch(clearCart())}
            >
              Empty cart
            </Button>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-8">
              {cart.length > 0 ? (
                <div className="bg-white border rounded-3 shadow-sm overflow-hidden">
                  <Table responsive hover className="align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="ps-4 py-3">Product</th>
                        <th className="py-3 text-center">Quantity</th>
                        <th className="py-3 text-end">Total</th>
                        <th className="pe-4 py-3 text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((product) => (
                        <tr key={product.id}>
                          <td className="ps-4 py-3">
                            <div className="d-flex align-items-center gap-3">
                              <img
                                src={product.thumbnail}
                                alt={product.title}
                                width="72"
                                height="72"
                                className="rounded object-fit-cover"
                              />
                              <span className="fw-semibold">
                                {product.title}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 text-center">
                            <div className="d-inline-flex align-items-center border rounded">
                              <Button
                                type="button"
                                variant="light"
                                size="sm"
                                className="border-0 px-2"
                                aria-label="Decrease quantity"
                                onClick={() =>
                                  dispatch(decreaseQuantity(product.id))
                                }
                              >
                                -
                              </Button>
                              <span className="px-2 fw-semibold">
                                {product.quantity}
                              </span>
                              <Button
                                type="button"
                                variant="light"
                                size="sm"
                                className="border-0 px-2"
                                aria-label="Increase quantity"
                                onClick={() =>
                                  dispatch(increaseQuantity(product.id))
                                }
                              >
                                +
                              </Button>
                            </div>
                          </td>
                          <td className="py-3 text-end fw-bold text-success">
                            ${product.totalPrice.toFixed(2)}
                          </td>
                          <td className="pe-4 py-3 text-end">
                            <Button
                              type="button"
                              variant="link"
                              className="p-0 text-danger"
                              aria-label={`Remove ${product.title} from cart`}
                              onClick={() => {
                                dispatch(removeFromCart(product.id));
                                alert(
                                  `${product.title} was removed from your cart.`,
                                );
                              }}
                            >
                              <FaTrash size={18} />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div className="bg-white border rounded-3 shadow-sm text-center py-5">
                  <h2 className="h4 fw-bold">Your cart is empty</h2>
                  <p className="text-secondary mb-0">
                    Add a product to see it here.
                  </p>
                </div>
              )}
            </div>

            <div className="col-12 col-lg-4">
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h2 className="h4 fw-bold mb-4">Checkout</h2>
                  <div className="d-flex justify-content-between text-secondary mb-3">
                    <span>Total items</span>
                    <span className="fw-semibold text-body">{totalItems}</span>
                  </div>
                  <div className="d-flex justify-content-between border-top pt-3 mb-4">
                    <span className="fw-semibold">Total amount</span>
                    <span className="h5 fw-bold text-success mb-0">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                  <Button
                    variant="success"
                    className="w-100 py-2 fw-semibold"
                    onClick={checkout}
                  >
                    Checkout
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Cart;
